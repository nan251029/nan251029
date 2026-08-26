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
        "flex flex-col rounded-md bg-card px-2.5 py-2 shadow-border transition-[box-shadow,transform] duration-150 ease-out",
        "hover:shadow-border-hover",
        copied && "ring-2 ring-copied/40",
      )}
    >
      <div className="flex items-start gap-1">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1">
            <Badge className="h-5 px-1.5 text-[10px]">{categoryName}</Badge>
            {prompt.pinned ? (
              <span className="text-[10px] font-medium text-primary">고정</span>
            ) : null}
          </div>
          <h3 className="mt-0.5 truncate font-display text-sm font-semibold leading-tight text-foreground">
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
            className="size-7 text-muted-foreground"
          >
            {prompt.pinned ? (
              <PinOff className="size-3.5" />
            ) : (
              <Pin className="size-3.5" />
            )}
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                aria-label="더 보기"
                className="size-7 text-muted-foreground"
              >
                <MoreHorizontal className="size-3.5" />
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

      <p className="mt-0.5 line-clamp-1 text-[11px] leading-snug text-muted-foreground">
        {prompt.body || "내용 없음"}
      </p>

      <div className="mt-1.5 flex items-center justify-between gap-2">
        <span className="text-[11px] tabular-nums text-muted-foreground">
          {prompt.copyCount > 0 ? `${prompt.copyCount}회` : "미사용"}
        </span>
        <Button
          type="button"
          variant={copied ? "copied" : "default"}
          size="sm"
          onClick={onCopy}
          className="h-7 min-w-16 px-2 text-xs"
        >
          <span className="relative size-3.5">
            <Copy
              className={cn(
                "absolute inset-0 size-3.5 transition-[opacity,transform,filter] duration-200 ease-out",
                copied
                  ? "scale-[0.25] opacity-0 blur-[4px]"
                  : "scale-100 opacity-100 blur-none",
              )}
            />
            <Check
              className={cn(
                "absolute inset-0 size-3.5 transition-[opacity,transform,filter] duration-200 ease-out",
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
