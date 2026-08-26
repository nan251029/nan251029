import { useState } from "react";
import { FolderPlus, MoreHorizontal, Pencil, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  ALL_CATEGORY,
  UNCATEGORIZED,
  type Category,
} from "@/lib/prompts-store";
import { cn } from "@/lib/utils";

type CategoryNavProps = {
  categories: Category[];
  counts: Record<string, number>;
  total: number;
  uncategorizedCount: number;
  selected: string;
  onSelect: (id: string) => void;
  onCreate: (name: string) => void;
  onRename: (id: string, name: string) => void;
  onDelete: (id: string) => void;
  variant: "sidebar" | "chips";
};

export function CategoryNav({
  categories,
  counts,
  total,
  uncategorizedCount,
  selected,
  onSelect,
  onCreate,
  onRename,
  onDelete,
  variant,
}: CategoryNavProps) {
  const [createOpen, setCreateOpen] = useState(false);
  const [renameId, setRenameId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [name, setName] = useState("");

  const renameTarget = categories.find((c) => c.id === renameId);
  const deleteTarget = categories.find((c) => c.id === deleteId);

  function submitCreate() {
    const trimmed = name.trim();
    if (!trimmed) return;
    onCreate(trimmed);
    setName("");
    setCreateOpen(false);
  }

  function submitRename() {
    if (!renameId) return;
    const trimmed = name.trim();
    if (!trimmed) return;
    onRename(renameId, trimmed);
    setRenameId(null);
    setName("");
  }

  const items = [
    { id: ALL_CATEGORY, name: "전체", count: total },
    ...categories.map((c) => ({
      id: c.id,
      name: c.name,
      count: counts[c.id] ?? 0,
    })),
    { id: UNCATEGORIZED, name: "미분류", count: uncategorizedCount },
  ];

  if (variant === "chips") {
    return (
      <>
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => {
            const isSystem =
              item.id === ALL_CATEGORY || item.id === UNCATEGORIZED;
            const isSelected = selected === item.id;
            return (
              <div key={item.id} className="flex shrink-0 items-center">
                <button
                  type="button"
                  onClick={() => onSelect(item.id)}
                  className={cn(
                    "h-11 shrink-0 snap-start px-4 text-sm font-medium transition-colors duration-150",
                    isSelected && !isSystem ? "rounded-l-full rounded-r-none" : "rounded-full",
                    isSelected
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground shadow-border hover:bg-muted",
                  )}
                >
                  {item.name}
                  <span className="ml-1.5 tabular-nums opacity-70">{item.count}</span>
                </button>
                {isSelected && !isSystem ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        type="button"
                        aria-label={`${item.name} 관리`}
                        className="flex h-11 w-10 items-center justify-center rounded-r-full bg-primary text-primary-foreground"
                      >
                        <MoreHorizontal className="size-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onSelect={() => {
                          setName(item.name);
                          setRenameId(item.id);
                        }}
                      >
                        <Pencil />
                        이름 변경
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        variant="destructive"
                        onSelect={() => setDeleteId(item.id)}
                      >
                        <Trash2 />
                        삭제
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : null}
              </div>
            );
          })}
          <button
            type="button"
            onClick={() => {
              setName("");
              setCreateOpen(true);
            }}
            className="inline-flex h-11 shrink-0 items-center gap-1 rounded-full bg-card px-3.5 text-sm font-medium text-foreground shadow-border hover:bg-muted"
          >
            <Plus className="size-4" />
            카테고리
          </button>
        </div>
        {dialogs()}
      </>
    );
  }

  return (
    <>
      <nav className="flex flex-col gap-1">
        <p className="px-3 pb-1 text-xs font-medium text-muted-foreground">
          카테고리
        </p>
        {items.map((item) => {
          const isSystem =
            item.id === ALL_CATEGORY || item.id === UNCATEGORIZED;
          return (
            <div key={item.id} className="group relative">
              <button
                type="button"
                onClick={() => onSelect(item.id)}
                className={cn(
                  "flex h-11 w-full items-center justify-between rounded-lg px-3 text-left text-sm font-medium transition-colors duration-150",
                  selected === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted",
                )}
              >
                <span className="truncate pr-6">{item.name}</span>
                <span
                  className={cn(
                    "tabular-nums text-xs",
                    selected === item.id ? "opacity-80" : "text-muted-foreground",
                  )}
                >
                  {item.count}
                </span>
              </button>
              {isSystem ? null : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon-sm"
                      aria-label={`${item.name} 관리`}
                      className={cn(
                        "absolute top-1 right-1 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100",
                        selected === item.id &&
                          "text-primary-foreground hover:bg-primary-foreground/15",
                      )}
                    >
                      <MoreHorizontal className="size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onSelect={() => {
                        setName(item.name);
                        setRenameId(item.id);
                      }}
                    >
                      <Pencil />
                      이름 변경
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      variant="destructive"
                      onSelect={() => setDeleteId(item.id)}
                    >
                      <Trash2 />
                      삭제
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          );
        })}
        <Button
          type="button"
          variant="ghost"
          className="mt-1 justify-start text-muted-foreground"
          onClick={() => {
            setName("");
            setCreateOpen(true);
          }}
        >
          <FolderPlus className="size-4" />
          카테고리 추가
        </Button>
      </nav>
      {dialogs()}
    </>
  );

  function dialogs() {
    return (
      <>
        <Dialog open={createOpen} onOpenChange={setCreateOpen}>
          <DialogContent className="max-w-sm">
            <DialogHeader>
              <DialogTitle>카테고리 추가</DialogTitle>
              <DialogDescription>
                글쓰기, 코딩처럼 용도별로 묶을 이름을 적으세요.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-2">
              <Label htmlFor="new-category">이름</Label>
              <Input
                id="new-category"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") submitCreate();
                }}
                placeholder="예: 마케팅"
                autoFocus
              />
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setCreateOpen(false)}>
                취소
              </Button>
              <Button type="button" onClick={submitCreate} disabled={!name.trim()}>
                추가
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog
          open={renameId !== null}
          onOpenChange={(open) => {
            if (!open) setRenameId(null);
          }}
        >
          <DialogContent className="max-w-sm">
            <DialogHeader>
              <DialogTitle>이름 변경</DialogTitle>
              <DialogDescription>
                {renameTarget ? `"${renameTarget.name}"의 새 이름` : ""}
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-2">
              <Label htmlFor="rename-category">이름</Label>
              <Input
                id="rename-category"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") submitRename();
                }}
                autoFocus
              />
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setRenameId(null)}>
                취소
              </Button>
              <Button type="button" onClick={submitRename} disabled={!name.trim()}>
                저장
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <AlertDialog
          open={deleteId !== null}
          onOpenChange={(open) => {
            if (!open) setDeleteId(null);
          }}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>카테고리를 삭제할까요?</AlertDialogTitle>
              <AlertDialogDescription>
                {deleteTarget
                  ? `"${deleteTarget.name}"을 지웁니다. 안의 프롬프트는 미분류로 옮겨집니다.`
                  : ""}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>취소</AlertDialogCancel>
              <AlertDialogAction
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                onClick={() => {
                  if (deleteId) onDelete(deleteId);
                  setDeleteId(null);
                }}
              >
                삭제
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    );
  }
}
