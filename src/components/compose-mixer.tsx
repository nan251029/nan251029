import { useMemo, useState } from "react";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Copy,
  Layers,
  Plus,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { combineBodies, copyText, type JoinStyle } from "@/lib/copy-text";
import {
  UNCATEGORIZED,
  sortCategories,
  sortPrompts,
  usePromptsStore,
  type PromptItem,
} from "@/lib/prompts-store";
import { cn } from "@/lib/utils";

type ComposeMixerProps = {
  onAddPrompt: (categoryId: string | null) => void;
};

export function ComposeMixer({ onAddPrompt }: ComposeMixerProps) {
  const categories = usePromptsStore((s) => s.categories);
  const prompts = usePromptsStore((s) => s.prompts);
  const moveCategory = usePromptsStore((s) => s.moveCategory);
  const recordCopies = usePromptsStore((s) => s.recordCopies);

  const [picked, setPicked] = useState<Record<string, string[]>>({});
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [joinStyle, setJoinStyle] = useState<JoinStyle>("comma");
  const [copied, setCopied] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(true);

  const ordered = sortCategories(categories);
  const uncategorized = prompts.filter((p) => !p.categoryId);

  const sections = useMemo(() => {
    const list: { key: string; name: string; items: PromptItem[]; movable: boolean }[] =
      ordered.map((cat) => ({
        key: cat.id,
        name: cat.name,
        movable: true,
        items: sortPrompts(
          prompts.filter((p) => p.categoryId === cat.id),
          "title",
        ),
      }));
    if (uncategorized.length > 0) {
      list.push({
        key: UNCATEGORIZED,
        name: "미분류",
        movable: false,
        items: sortPrompts(uncategorized, "title"),
      });
    }
    return list;
  }, [ordered, prompts, uncategorized]);

  const selectedItems = useMemo(() => {
    const items: { category: string; prompt: PromptItem }[] = [];
    for (const section of sections) {
      const ids = picked[section.key] ?? [];
      for (const id of ids) {
        const prompt = section.items.find((p) => p.id === id);
        if (prompt) items.push({ category: section.name, prompt });
      }
    }
    return items;
  }, [picked, sections]);

  const combined = combineBodies(
    selectedItems.map((s) => s.prompt.body),
    joinStyle,
  );

  const anyOpen = sections.some((s) => !collapsed[s.key]);

  function toggle(sectionKey: string, promptId: string) {
    setPicked((prev) => {
      const current = prev[sectionKey] ?? [];
      if (current.includes(promptId)) {
        const nextIds = current.filter((id) => id !== promptId);
        if (nextIds.length === 0) {
          const next = { ...prev };
          delete next[sectionKey];
          return next;
        }
        return { ...prev, [sectionKey]: nextIds };
      }
      return { ...prev, [sectionKey]: [...current, promptId] };
    });
    setCopied(false);
  }

  function toggleCollapsed(sectionKey: string) {
    setCollapsed((prev) => ({ ...prev, [sectionKey]: !prev[sectionKey] }));
  }

  function toggleAllSections() {
    if (anyOpen) {
      const next: Record<string, boolean> = {};
      for (const section of sections) next[section.key] = true;
      setCollapsed(next);
    } else {
      setCollapsed({});
    }
  }

  async function copyCombined() {
    if (!combined) return;
    const ok = await copyText(combined);
    if (!ok) {
      toast.error("복사에 실패했습니다. 브라우저 권한을 확인해 주세요.");
      return;
    }
    recordCopies(selectedItems.map((s) => s.prompt.id));
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
    toast.success("합쳐서 복사됨", {
      description: selectedItems.map((s) => s.prompt.title).join(" · "),
    });
  }

  return (
    <div className="pb-44">
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          카테고리를 열어 조각을 고르면 아래 순서대로 합쳐집니다. 한 카테고리에서
          여러 개를 고를 수 있고, 위아래 화살표로 합치는 순서를 바꿀 수 있습니다.
        </p>
        <button
          type="button"
          onClick={toggleAllSections}
          className="h-9 shrink-0 rounded-md px-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          {anyOpen ? "모두 접기" : "모두 펼치기"}
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {sections.map((section, index) => {
          const isCollapsed = Boolean(collapsed[section.key]);
          const selectedIds = picked[section.key] ?? [];
          const selectedCount = selectedIds.length;
          return (
            <section
              key={section.key}
              className="min-w-0 overflow-hidden rounded-lg bg-card shadow-border"
            >
              <div className="flex items-center justify-between gap-2 px-2 py-1.5">
                <div className="flex min-w-0 items-center gap-1">
                  {section.movable ? (
                    <div className="flex">
                      <button
                        type="button"
                        aria-label={`${section.name} 위로`}
                        disabled={index === 0}
                        onClick={() => moveCategory(section.key, -1)}
                        className="flex size-9 items-center justify-center rounded-md text-muted-foreground hover:bg-muted disabled:opacity-30"
                      >
                        <ChevronUp className="size-4" />
                      </button>
                      <button
                        type="button"
                        aria-label={`${section.name} 아래로`}
                        disabled={index === ordered.length - 1}
                        onClick={() => moveCategory(section.key, 1)}
                        className="flex size-9 items-center justify-center rounded-md text-muted-foreground hover:bg-muted disabled:opacity-30"
                      >
                        <ChevronDown className="size-4" />
                      </button>
                    </div>
                  ) : null}
                  <button
                    type="button"
                    aria-expanded={!isCollapsed}
                    onClick={() => toggleCollapsed(section.key)}
                    className="flex min-w-0 items-center gap-2 rounded-md px-2 py-2 text-left hover:bg-muted"
                  >
                    <ChevronDown
                      className={cn(
                        "size-4 shrink-0 text-muted-foreground transition-transform duration-200 ease-out",
                        isCollapsed && "-rotate-90",
                      )}
                    />
                    <h2 className="font-display text-lg font-semibold">
                      {section.name}
                    </h2>
                    <span className="text-xs tabular-nums text-muted-foreground">
                      {section.items.length}
                    </span>
                    {selectedCount > 0 ? (
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                        {selectedCount}개 선택
                      </span>
                    ) : null}
                  </button>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    onAddPrompt(section.key === UNCATEGORIZED ? null : section.key)
                  }
                >
                  <Plus className="size-4" />
                  추가
                </Button>
              </div>

              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-200 ease-out",
                  isCollapsed ? "grid-rows-[0fr]" : "grid-rows-[1fr]",
                )}
              >
                <div className="overflow-hidden">
                  {section.items.length === 0 ? (
                    <p className="px-4 pb-4 text-sm text-muted-foreground">
                      이 카테고리가 비어 있습니다. 조각을 추가하세요.
                    </p>
                  ) : (
                    <div className="flex gap-2 overflow-x-auto px-3 pb-3 [scrollbar-width:thin]">
                      {section.items.map((prompt) => {
                        const selected = selectedIds.includes(prompt.id);
                        return (
                          <button
                            key={prompt.id}
                            type="button"
                            aria-pressed={selected}
                            onClick={() => toggle(section.key, prompt.id)}
                            className={cn(
                              "w-52 shrink-0 rounded-md bg-background p-2.5 text-left shadow-border transition-[box-shadow,background-color] duration-150",
                              selected
                                ? "ring-2 ring-primary"
                                : "hover:shadow-border-hover",
                            )}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <p className="font-medium leading-snug text-foreground">
                                {prompt.title}
                              </p>
                              <span
                                className={cn(
                                  "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-sm border",
                                  selected
                                    ? "border-primary bg-primary text-primary-foreground"
                                    : "border-border text-transparent",
                                )}
                              >
                                <Check className="size-3" />
                              </span>
                            </div>
                            <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                              {prompt.body}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <div className="fixed right-0 bottom-0 left-0 z-40 border-t border-border bg-background/95 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-col gap-3">
          {selectedItems.length > 0 ? (
            <div className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {selectedItems.map((s) => (
                <span
                  key={s.prompt.id}
                  className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full bg-secondary px-3 text-xs font-medium"
                >
                  <span className="text-muted-foreground">{s.category}</span>
                  {s.prompt.title}
                  <button
                    type="button"
                    aria-label={`${s.prompt.title} 선택 해제`}
                    onClick={() => {
                      const section = sections.find((sec) =>
                        sec.items.some((p) => p.id === s.prompt.id),
                      );
                      if (section) toggle(section.key, s.prompt.id);
                    }}
                    className="flex size-5 items-center justify-center rounded-full hover:bg-muted"
                  >
                    <X className="size-3" />
                  </button>
                </span>
              ))}
            </div>
          ) : (
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <Layers className="size-4" />
              카테고리에서 조각을 고르면 여기에 모입니다. 한 칸에서 여러 개도 가능합니다.
            </p>
          )}

          {previewOpen && combined ? (
            <p className="line-clamp-3 rounded-lg bg-card px-3 py-2 text-sm leading-relaxed text-foreground shadow-border">
              {combined}
            </p>
          ) : null}

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex rounded-lg bg-secondary p-1">
              {(
                [
                  ["comma", "쉼표로 잇기"],
                  ["newline", "줄바꿈"],
                ] as const
              ).map(([style, label]) => (
                <button
                  key={style}
                  type="button"
                  onClick={() => setJoinStyle(style)}
                  className={cn(
                    "h-9 rounded-md px-3 text-sm font-medium transition-colors duration-150",
                    joinStyle === style
                      ? "bg-card text-foreground shadow-border"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
            {combined ? (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setPreviewOpen((v) => !v)}
              >
                {previewOpen ? "미리보기 숨기기" : "미리보기"}
              </Button>
            ) : null}
            <div className="ml-auto flex items-center gap-2">
              {selectedItems.length > 0 ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setPicked({});
                    setCopied(false);
                  }}
                >
                  선택 해제
                </Button>
              ) : null}
              <Button
                type="button"
                variant={copied ? "copied" : "default"}
                onClick={() => void copyCombined()}
                disabled={!combined}
                className="min-w-36"
              >
                <Copy className="size-4" />
                {copied ? "복사됨" : "합쳐서 복사"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
