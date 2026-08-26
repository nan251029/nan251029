import { useEffect, useMemo, useRef, useState } from "react";
import {
  Download,
  Layers,
  Library,
  MoreHorizontal,
  Plus,
  Search,
  Upload,
} from "lucide-react";
import { toast } from "sonner";
import { CategoryNav } from "@/components/category-nav";
import { ComposeMixer } from "@/components/compose-mixer";
import { PromptCard } from "@/components/prompt-card";
import { PromptEditor } from "@/components/prompt-editor";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { TooltipProvider } from "@/components/ui/tooltip";
import { copyText } from "@/lib/copy-text";
import {
  ALL_CATEGORY,
  UNCATEGORIZED,
  exportPayload,
  sortCategories,
  sortPrompts,
  usePromptsStore,
  type PromptItem,
  type SortMode,
} from "@/lib/prompts-store";
import { cn } from "@/lib/utils";

export function PromptVault() {
  const categories = usePromptsStore((s) => s.categories);
  const prompts = usePromptsStore((s) => s.prompts);
  const addCategory = usePromptsStore((s) => s.addCategory);
  const renameCategory = usePromptsStore((s) => s.renameCategory);
  const deleteCategory = usePromptsStore((s) => s.deleteCategory);
  const addPrompt = usePromptsStore((s) => s.addPrompt);
  const updatePrompt = usePromptsStore((s) => s.updatePrompt);
  const deletePrompt = usePromptsStore((s) => s.deletePrompt);
  const duplicatePrompt = usePromptsStore((s) => s.duplicatePrompt);
  const togglePin = usePromptsStore((s) => s.togglePin);
  const recordCopy = usePromptsStore((s) => s.recordCopy);
  const importData = usePromptsStore((s) => s.importData);

  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORY);
  const [viewMode, setViewMode] = useState<"compose" | "library">("compose");
  const [query, setQuery] = useState("");
  const [sortMode, setSortMode] = useState<SortMode>("recent");
  const [editorOpen, setEditorOpen] = useState(false);
  const [editing, setEditing] = useState<PromptItem | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const importRef = useRef<HTMLInputElement>(null);
  const copiedTimer = useRef<number | null>(null);

  useEffect(() => {
    void usePromptsStore.persist.rehydrate();
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      const typing =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);
      if (e.key === "/" && !typing) {
        e.preventDefault();
        searchRef.current?.focus();
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchRef.current?.focus();
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "n" && !typing) {
        e.preventDefault();
        openNew();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    return () => {
      if (copiedTimer.current) window.clearTimeout(copiedTimer.current);
    };
  }, []);

  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const p of prompts) {
      if (p.categoryId) map[p.categoryId] = (map[p.categoryId] ?? 0) + 1;
    }
    return map;
  }, [prompts]);

  const uncategorizedCount = prompts.filter((p) => !p.categoryId).length;
  const orderedCategories = useMemo(
    () => sortCategories(categories),
    [categories],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = prompts;
    if (selectedCategory === UNCATEGORIZED) {
      list = list.filter((p) => !p.categoryId);
    } else if (selectedCategory !== ALL_CATEGORY) {
      list = list.filter((p) => p.categoryId === selectedCategory);
    }
    if (q) {
      list = list.filter((p) => {
        const cat = categories.find((c) => c.id === p.categoryId)?.name ?? "";
        return (
          p.title.toLowerCase().includes(q) ||
          p.body.toLowerCase().includes(q) ||
          cat.toLowerCase().includes(q)
        );
      });
    }
    return sortPrompts(list, sortMode);
  }, [prompts, selectedCategory, query, sortMode, categories]);

  function openNew() {
    setEditing(null);
    setEditorOpen(true);
  }

  function openEdit(prompt: PromptItem) {
    setEditing(prompt);
    setEditorOpen(true);
  }

  async function handleCopy(prompt: PromptItem) {
    const ok = await copyText(prompt.body);
    if (!ok) {
      toast.error("복사에 실패했습니다. 브라우저 권한을 확인해 주세요.");
      return;
    }
    recordCopy(prompt.id);
    setCopiedId(prompt.id);
    if (copiedTimer.current) window.clearTimeout(copiedTimer.current);
    copiedTimer.current = window.setTimeout(() => setCopiedId(null), 1600);
    toast.success("복사됨", {
      description: prompt.title,
    });
  }

  function handleExport() {
    const payload = exportPayload();
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `promclip-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("파일을 저장했습니다.");
  }

  async function handleImport(file: File) {
    try {
      const text = await file.text();
      const parsed = JSON.parse(text) as {
        categories?: unknown;
        prompts?: unknown;
      };
      if (!Array.isArray(parsed.categories) || !Array.isArray(parsed.prompts)) {
        throw new Error("invalid");
      }
      importData({
        categories: parsed.categories as never,
        prompts: parsed.prompts as never,
      });
      toast.success("가져왔습니다. 같은 항목은 건너뛰었습니다.");
    } catch {
      toast.error("가져올 수 없는 파일입니다.");
    }
  }

  const categoryName = (id: string | null) =>
    id ? (categories.find((c) => c.id === id)?.name ?? "미분류") : "미분류";

  const defaultCategoryId =
    selectedCategory === ALL_CATEGORY || selectedCategory === UNCATEGORIZED
      ? null
      : selectedCategory;

  const deleteTarget = prompts.find((p) => p.id === deleteId);

  return (
    <TooltipProvider>
      <div className="min-h-dvh">
        <header className="border-b border-border/80 bg-background/85 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
            <div className="min-w-0">
              <p className="font-display text-2xl font-semibold tracking-tight text-foreground">
                프롬클립
              </p>
              <p className="hidden text-sm text-muted-foreground sm:block">
                {viewMode === "compose"
                  ? "카테고리에서 골라 합칩니다. 한 칸에서 여러 개도 됩니다"
                  : "저장해 두고, 눌러서 바로 복사"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="mr-1 hidden rounded-lg bg-secondary p-1 sm:flex">
                <button
                  type="button"
                  onClick={() => setViewMode("compose")}
                  className={cn(
                    "inline-flex h-9 items-center gap-1.5 rounded-md px-3 text-sm font-medium transition-colors duration-150",
                    viewMode === "compose"
                      ? "bg-card text-foreground shadow-border"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <Layers className="size-4" />
                  조합
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("library")}
                  className={cn(
                    "inline-flex h-9 items-center gap-1.5 rounded-md px-3 text-sm font-medium transition-colors duration-150",
                    viewMode === "library"
                      ? "bg-card text-foreground shadow-border"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <Library className="size-4" />
                  보관함
                </button>
              </div>
              <input
                ref={importRef}
                type="file"
                accept="application/json"
                className="sr-only"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) void handleImport(file);
                  e.target.value = "";
                }}
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="더 보기">
                    <MoreHorizontal className="size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>보관함</DropdownMenuLabel>
                  <DropdownMenuItem onSelect={handleExport}>
                    <Download />
                    JSON으로 내보내기
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => importRef.current?.click()}>
                    <Upload />
                    JSON 가져오기
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button type="button" onClick={openNew}>
                <Plus className="size-4" />
                <span className="hidden sm:inline">새 프롬프트</span>
                <span className="sm:hidden">추가</span>
              </Button>
            </div>
          </div>
        </header>

        <div className="mx-auto flex max-w-6xl gap-2 px-4 pt-4 sm:hidden sm:px-6">
          <div className="flex w-full rounded-lg bg-secondary p-1">
            <button
              type="button"
              onClick={() => setViewMode("compose")}
              className={cn(
                "inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-md text-sm font-medium transition-colors duration-150",
                viewMode === "compose"
                  ? "bg-card text-foreground shadow-border"
                  : "text-muted-foreground",
              )}
            >
              <Layers className="size-4" />
              조합
            </button>
            <button
              type="button"
              onClick={() => setViewMode("library")}
              className={cn(
                "inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-md text-sm font-medium transition-colors duration-150",
                viewMode === "library"
                  ? "bg-card text-foreground shadow-border"
                  : "text-muted-foreground",
              )}
            >
              <Library className="size-4" />
              보관함
            </button>
          </div>
        </div>

        {viewMode === "compose" ? (
          <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
            <ComposeMixer
              onAddPrompt={(categoryId) => {
                if (categoryId) setSelectedCategory(categoryId);
                else setSelectedCategory(UNCATEGORIZED);
                openNew();
              }}
            />
          </div>
        ) : (
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-6 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-6">
              <CategoryNav
                variant="sidebar"
                categories={orderedCategories}
                counts={counts}
                total={prompts.length}
                uncategorizedCount={uncategorizedCount}
                selected={selectedCategory}
                onSelect={setSelectedCategory}
                onCreate={(name) => addCategory(name)}
                onRename={renameCategory}
                onDelete={(id) => {
                  deleteCategory(id);
                  if (selectedCategory === id) setSelectedCategory(ALL_CATEGORY);
                }}
              />
            </div>
          </aside>

          <main className="min-w-0">
            <div className="mb-4 lg:hidden">
              <CategoryNav
                variant="chips"
                categories={orderedCategories}
                counts={counts}
                total={prompts.length}
                uncategorizedCount={uncategorizedCount}
                selected={selectedCategory}
                onSelect={setSelectedCategory}
                onCreate={(name) => addCategory(name)}
                onRename={renameCategory}
                onDelete={(id) => {
                  deleteCategory(id);
                  if (selectedCategory === id) setSelectedCategory(ALL_CATEGORY);
                }}
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative min-w-0 flex-1">
                <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  ref={searchRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && filtered[0]) {
                      e.preventDefault();
                      void handleCopy(filtered[0]);
                    }
                  }}
                  placeholder="제목, 내용, 카테고리 검색"
                  className="pl-10"
                  aria-label="프롬프트 검색"
                />
              </div>
              <div className="flex rounded-lg bg-secondary p-1">
                {(
                  [
                    ["recent", "최근"],
                    ["copied", "많이 쓴 순"],
                    ["title", "이름"],
                  ] as const
                ).map(([mode, label]) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setSortMode(mode)}
                    className={cn(
                      "h-9 rounded-md px-3 text-sm font-medium transition-colors duration-150",
                      sortMode === mode
                        ? "bg-card text-foreground shadow-border"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {filtered.length === 0 ? (
              <EmptyState
                hasAny={prompts.length > 0}
                query={query}
                onCreate={openNew}
              />
            ) : (
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((prompt) => (
                  <li key={prompt.id}>
                    <PromptCard
                      prompt={prompt}
                      categoryName={categoryName(prompt.categoryId)}
                      copied={copiedId === prompt.id}
                      onCopy={() => void handleCopy(prompt)}
                      onEdit={() => openEdit(prompt)}
                      onDuplicate={() => {
                        duplicatePrompt(prompt.id);
                        toast.success("복제했습니다.");
                      }}
                      onTogglePin={() => togglePin(prompt.id)}
                      onDelete={() => setDeleteId(prompt.id)}
                    />
                  </li>
                ))}
              </ul>
            )}
          </main>
        </div>
        )}
      </div>

      <PromptEditor
        open={editorOpen}
        onOpenChange={setEditorOpen}
        categories={orderedCategories}
        editing={editing}
        defaultCategoryId={defaultCategoryId}
        onCreateCategory={addCategory}
        onSave={(input) => {
          if (editing) {
            updatePrompt(editing.id, input);
            toast.success("저장했습니다.");
          } else {
            addPrompt(input);
            toast.success("추가했습니다. 복사 버튼으로 바로 쓸 수 있어요.");
            if (input.categoryId) setSelectedCategory(input.categoryId);
          }
        }}
      />

      <AlertDialog
        open={deleteId !== null}
        onOpenChange={(open) => {
          if (!open) setDeleteId(null);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>이 프롬프트를 삭제할까요?</AlertDialogTitle>
            <AlertDialogDescription>
              {deleteTarget
                ? `"${deleteTarget.title}"을 삭제합니다. 되돌릴 수 없습니다.`
                : ""}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={() => {
                if (deleteId) deletePrompt(deleteId);
                setDeleteId(null);
              }}
            >
              삭제
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </TooltipProvider>
  );
}

function EmptyState({
  hasAny,
  query,
  onCreate,
}: {
  hasAny: boolean;
  query: string;
  onCreate: () => void;
}) {
  return (
    <div className="mt-10 rounded-xl bg-card px-6 py-14 text-center shadow-border">
      <p className="font-display text-xl font-semibold">
        {query.trim()
          ? "검색 결과가 없습니다"
          : hasAny
            ? "이 카테고리가 비어 있습니다"
            : "첫 프롬프트를 저장하세요"}
      </p>
      <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
        {query.trim()
          ? "다른 단어로 찾아보거나, 새 프롬프트를 추가하세요."
          : "자주 쓰는 문장을 적어 두면, 복사 한 번에 붙여넣을 수 있습니다."}
      </p>
      <Button type="button" className="mt-6" onClick={onCreate}>
        <Plus className="size-4" />
        새 프롬프트
      </Button>
    </div>
  );
}
