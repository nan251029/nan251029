import { Check, Copy, MoreHorizontal, Pin, PinOff, Pencil, Trash2, CopyPlus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { PromptItem } from "@/lib/prompts-store";
import { cn } from "@/lib/utils";

type PromptCardProps = {
  prompt: PromptItem;
  categoryName: string;
  copied: boolean;
  onCopy: () => void;
  onEdit: () => void;
  onDuplicate: () => void;
  onTogglePin: () => void;
  onDelete: () => void;
};

export function PromptCard({
  prompt,
  categoryName,
  copied,
  onCopy,
  onEdit,
  onDuplicate,
  onTogglePin,
  onDelete,
}: PromptCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col rounded-lg bg-card p-3 shadow-border transition-[box-shadow,transform] duration-150 ease-out",
        "hover:shadow-border-hover",
        copied && "ring-2 ring-copied/40",
      )}
    >
      <div className="flex items-start gap-2">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <Badge>{categoryName}</Badge>
            {prompt.pinned ? (
              <span className="text-xs font-medium text-primary">고정</span>
            ) : null}
          </div>
          <h3 className="mt-1 font-display text-base font-semibold leading-snug text-foreground">
            {prompt.title}
          </h3>
        </div>
        <div className="flex shrink-0 items-center">
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            aria-label={prompt.pinned ? "고정 해제" : "위에 고정"}
            onClick={onTogglePin}
            className="text-muted-foreground"
          >
            {prompt.pinned ? (
              <PinOff className="size-4" />
            ) : (
              <Pin className="size-4" />
            )}
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                aria-label="더 보기"
                className="text-muted-foreground"
              >
                <MoreHorizontal className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onSelect={onEdit}>
                <Pencil />
                수정
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={onDuplicate}>
                <CopyPlus />
                복제
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={onTogglePin}>
                {prompt.pinned ? <PinOff /> : <Pin />}
                {prompt.pinned ? "고정 해제" : "위에 고정"}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive" onSelect={onDelete}>
                <Trash2 />
                삭제
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground whitespace-pre-wrap">
        {prompt.body || "내용 없음"}
      </p>

      <div className="mt-2.5 flex items-center justify-between gap-3">
        <span className="text-xs tabular-nums text-muted-foreground">
          {prompt.copyCount > 0 ? `${prompt.copyCount}회 복사` : "아직 안 씀"}
        </span>
        <Button
          type="button"
          variant={copied ? "copied" : "default"}
          size="sm"
          onClick={onCopy}
          className="min-w-20"
        >
          <span className="relative size-4">
            <Copy
              className={cn(
                "absolute inset-0 size-4 transition-[opacity,transform,filter] duration-200 ease-out",
                copied
                  ? "scale-[0.25] opacity-0 blur-[4px]"
                  : "scale-100 opacity-100 blur-none",
              )}
            />
            <Check
              className={cn(
                "absolute inset-0 size-4 transition-[opacity,transform,filter] duration-200 ease-out",
                copied
                  ? "scale-100 opacity-100 blur-none"
                  : "scale-[0.25] opacity-0 blur-[4px]",
              )}
            />
          </span>
          {copied ? "복사됨" : "복사"}
        </Button>
      </div>
    </article>
  );
}
