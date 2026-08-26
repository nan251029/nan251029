import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Category, PromptItem } from "@/lib/prompts-store";

type PromptEditorProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  categories: Category[];
  editing: PromptItem | null;
  defaultCategoryId: string | null;
  onSave: (input: {
    title: string;
    body: string;
    categoryId: string | null;
  }) => void;
  onCreateCategory: (name: string) => Category;
};

export function PromptEditor({
  open,
  onOpenChange,
  categories,
  editing,
  defaultCategoryId,
  onSave,
  onCreateCategory,
}: PromptEditorProps) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [newCategory, setNewCategory] = useState("");
  const [showNewCategory, setShowNewCategory] = useState(false);

  useEffect(() => {
    if (!open) return;
    if (editing) {
      setTitle(editing.title);
      setBody(editing.body);
      setCategoryId(editing.categoryId ?? "");
    } else {
      setTitle("");
      setBody("");
      setCategoryId(defaultCategoryId ?? "");
    }
    setNewCategory("");
    setShowNewCategory(false);
  }, [open, editing, defaultCategoryId]);

  function handleSave() {
    if (!body.trim() && !title.trim()) return;
    let nextCategory = categoryId === "" ? null : categoryId;
    if (showNewCategory && newCategory.trim()) {
      nextCategory = onCreateCategory(newCategory.trim()).id;
    }
    onSave({ title, body, categoryId: nextCategory });
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>{editing ? "프롬프트 수정" : "새 프롬프트"}</DialogTitle>
          <DialogDescription>
            제목으로 찾고, 본문은 복사 버튼 한 번에 클립보드로 갑니다.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="prompt-title">제목</Label>
            <Input
              id="prompt-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="예: 코드 리뷰"
              autoFocus
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="prompt-category">카테고리</Label>
            {showNewCategory ? (
              <div className="flex gap-2">
                <Input
                  id="prompt-category"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="새 카테고리 이름"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowNewCategory(false);
                    setNewCategory("");
                  }}
                >
                  취소
                </Button>
              </div>
            ) : (
              <div className="flex gap-2">
                <select
                  id="prompt-category"
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  className="h-11 min-w-0 flex-1 rounded-lg border border-input bg-card px-3 text-base text-foreground shadow-border outline-none focus-visible:border-ring focus-visible:ring-ring/40 focus-visible:ring-[3px] md:text-sm"
                >
                  <option value="">미분류</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowNewCategory(true)}
                >
                  새로 만들기
                </Button>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="prompt-body">본문</Label>
            <Textarea
              id="prompt-body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="복사해서 바로 붙여넣을 프롬프트를 적으세요."
              className="min-h-52 font-sans leading-relaxed"
            />
          </div>
        </div>

        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
            닫기
          </Button>
          <Button
            type="button"
            onClick={handleSave}
            disabled={!body.trim() && !title.trim()}
          >
            저장
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
