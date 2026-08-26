import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { A as Slot, P as require_jsx_runtime, a as Overlay2, c as Title2, d as DialogContent$1, f as DialogDescription$1, h as DialogTitle$1, i as Description2, l as Dialog$1, m as DialogPortal$1, n as Cancel, o as Portal2, p as DialogOverlay$1, r as Content2, s as Root2, t as Action, u as DialogClose } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { _ as ChevronUp, a as Search, c as PinOff, d as Layers, f as FolderPlus, g as CopyPlus, h as Copy, i as Trash2, l as Pencil, m as Download, n as Upload, o as Plus, p as Ellipsis, s as Pin, t as X, u as Library, v as ChevronDown, y as Check } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as Root2$1, i as Portal2$1, n as Item2, o as Separator2, r as Label2, s as Trigger, t as Content2$1 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { t as Provider } from "../_libs/radix-ui__react-tooltip.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Ds4sWSMd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
			outline: "border border-border bg-card text-foreground hover:bg-muted shadow-border",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/70",
			ghost: "hover:bg-muted hover:text-foreground",
			copied: "bg-copied text-copied-foreground hover:bg-copied"
		},
		size: {
			default: "h-11 px-4 py-2",
			sm: "h-9 rounded-md px-3 text-sm",
			lg: "h-12 rounded-lg px-5 text-base",
			icon: "size-11",
			"icon-sm": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		"data-slot": "button",
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
function Dialog({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
		"data-slot": "dialog",
		...props
	});
}
function DialogPortal({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPortal$1, {
		"data-slot": "dialog-portal",
		...props
	});
}
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		"data-slot": "dialog-overlay",
		className: cn("fixed inset-0 z-50 bg-foreground/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
		...props
	});
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		"data-slot": "dialog-content",
		className: cn("fixed top-1/2 left-1/2 z-50 grid w-[calc(100%-2rem)] max-w-lg max-h-[min(90dvh,44rem)] -translate-x-1/2 -translate-y-1/2 gap-4 overflow-y-auto rounded-xl bg-card p-5 text-card-foreground shadow-border duration-200", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className),
		...props,
		children: [children, showCloseButton ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
			className: "absolute top-3 right-3 rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none",
			"aria-label": "닫기",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
		}) : null]
	})] });
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "dialog-header",
		className: cn("flex flex-col gap-1.5 pr-8", className),
		...props
	});
}
function DialogFooter({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "dialog-footer",
		className: cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		"data-slot": "dialog-title",
		className: cn("font-display text-xl font-semibold leading-snug", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		"data-slot": "dialog-description",
		className: cn("text-sm text-muted-foreground", className),
		...props
	});
}
function DropdownMenu({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2$1, {
		"data-slot": "dropdown-menu",
		...props
	});
}
function DropdownMenuTrigger({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
		"data-slot": "dropdown-menu-trigger",
		...props
	});
}
function DropdownMenuContent({ className, sideOffset = 6, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2$1, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$1, {
		"data-slot": "dropdown-menu-content",
		sideOffset,
		className: cn("z-50 min-w-40 overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground shadow-border", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className),
		...props
	}) });
}
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
		"data-slot": "dropdown-menu-item",
		"data-inset": inset,
		"data-variant": variant,
		className: cn("relative flex cursor-pointer items-center gap-2 rounded-md px-2.5 py-2 text-sm outline-none select-none", "focus:bg-muted data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10", "data-[disabled]:pointer-events-none data-[disabled]:opacity-50", "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", inset && "pl-8", className),
		...props
	});
}
function DropdownMenuSeparator({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
		className: cn("-mx-1 my-1 h-px bg-border", className),
		...props
	});
}
function DropdownMenuLabel({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
		className: cn("px-2.5 py-1.5 text-xs font-medium text-muted-foreground", className),
		...props
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		"data-slot": "input",
		className: cn("h-11 w-full min-w-0 rounded-lg border border-input bg-card px-3 py-2 text-base text-foreground shadow-border transition-[box-shadow,border-color] duration-150 outline-none placeholder:text-muted-foreground md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/40 focus-visible:ring-[3px]", "disabled:pointer-events-none disabled:opacity-50", "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		"data-slot": "label",
		className: cn("text-sm font-medium leading-none text-foreground select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
		...props
	});
}
function AlertDialog({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
		"data-slot": "alert-dialog",
		...props
	});
}
function AlertDialogPortal({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, {
		"data-slot": "alert-dialog-portal",
		...props
	});
}
function AlertDialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay2, {
		"data-slot": "alert-dialog-overlay",
		className: cn("fixed inset-0 z-50 bg-foreground/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
		...props
	});
}
function AlertDialogContent({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		"data-slot": "alert-dialog-content",
		className: cn("fixed top-1/2 left-1/2 z-50 grid w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-card p-5 text-card-foreground shadow-border duration-200", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className),
		...props
	})] });
}
function AlertDialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1.5 text-left", className),
		...props
	});
}
function AlertDialogFooter({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
		...props
	});
}
function AlertDialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title2, {
		className: cn("font-display text-xl font-semibold", className),
		...props
	});
}
function AlertDialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description2, {
		className: cn("text-sm text-muted-foreground", className),
		...props
	});
}
function AlertDialogAction({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
		className: cn(buttonVariants(), className),
		...props
	});
}
function AlertDialogCancel({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cancel, {
		className: cn(buttonVariants({ variant: "outline" }), className),
		...props
	});
}
function now() {
	return Date.now();
}
function newId() {
	return crypto.randomUUID();
}
var SEED_AT = 17e11;
var seedCategories = [
	{
		id: "cat-subject",
		name: "인물",
		order: 0,
		createdAt: SEED_AT
	},
	{
		id: "cat-scene",
		name: "배경",
		order: 1,
		createdAt: 1700000000001
	},
	{
		id: "cat-action",
		name: "상황",
		order: 2,
		createdAt: 1700000000002
	},
	{
		id: "cat-outfit",
		name: "의상",
		order: 3,
		createdAt: 1700000000003
	},
	{
		id: "cat-style",
		name: "스타일",
		order: 4,
		createdAt: 1700000000004
	}
];
function item(id, title, body, categoryId, offset) {
	return {
		id,
		title,
		body,
		categoryId,
		pinned: false,
		copyCount: 0,
		lastCopiedAt: null,
		createdAt: SEED_AT + offset,
		updatedAt: SEED_AT + offset
	};
}
var seedPrompts = [
	item("p-woman", "젊은 여성", "a young East Asian woman, long black hair, calm sharp features, luminous skin", "cat-subject", 10),
	item("p-man", "중년 남성", "a middle-aged man, short gray hair, weathered face, intense quiet eyes", "cat-subject", 20),
	item("p-child", "아이", "a small child, round face, curious eyes, soft natural hair", "cat-subject", 30),
	item("p-rain-alley", "비 오는 골목", "rainy neon-lit alley at night, wet pavement reflections, steam from street vents", "cat-scene", 40),
	item("p-forest", "안개 숲", "misty ancient forest, shafts of morning light through tall trees, mossy ground", "cat-scene", 50),
	item("p-hanok", "한옥 마당", "a quiet hanok courtyard, wooden eaves, paper doors, late afternoon sun", "cat-scene", 60),
	item("p-lookback", "돌아보기", "looking back over the shoulder, wind lifting the hair, paused mid-step", "cat-action", 70),
	item("p-window", "창가에 앉음", "sitting by a window, quiet afternoon light on the face, hands in lap", "cat-action", 80),
	item("p-walk", "골목 걷기", "walking slowly down the street, coat moving with the stride, city behind", "cat-action", 90),
	item("p-redcoat", "빨간 코트", "wearing a tailored red wool coat, black boots, a thin scarf", "cat-outfit", 100),
	item("p-hanbok", "현대 한복", "wearing a modern hanbok in ivory and ink, silk texture, clean silhouette", "cat-outfit", 110),
	item("p-linen", "린넨 셔츠", "wearing a loose linen shirt, earth-tone trousers, simple leather shoes", "cat-outfit", 120),
	item("p-cine", "영화 스틸", "cinematic film still, anamorphic lens, shallow depth of field, Kodak Portra colors", "cat-style", 130),
	item("p-watercolor", "수채화", "delicate watercolor illustration, soft paper grain, muted pigments", "cat-style", 140),
	item("p-studio", "스튜디오 조명", "studio portrait lighting, soft key light, gentle rim light, clean background falloff", "cat-style", 150)
];
var UNCATEGORIZED = "uncategorized";
var usePromptsStore = create()(persist((set, get) => ({
	categories: seedCategories,
	prompts: seedPrompts,
	hasHydrated: false,
	setHasHydrated: (value) => set({ hasHydrated: value }),
	addCategory: (name) => {
		const trimmed = name.trim();
		const existing = get().categories.find((c) => c.name.toLowerCase() === trimmed.toLowerCase());
		if (existing) return existing;
		const category = {
			id: newId(),
			name: trimmed,
			order: Math.max(-1, ...get().categories.map((c) => c.order ?? 0)) + 1,
			createdAt: now()
		};
		set({ categories: [...get().categories, category] });
		return category;
	},
	renameCategory: (id, name) => {
		const trimmed = name.trim();
		if (!trimmed) return;
		set({ categories: get().categories.map((c) => c.id === id ? {
			...c,
			name: trimmed
		} : c) });
	},
	deleteCategory: (id) => {
		set({
			categories: get().categories.filter((c) => c.id !== id),
			prompts: get().prompts.map((p) => p.categoryId === id ? {
				...p,
				categoryId: null,
				updatedAt: now()
			} : p)
		});
	},
	moveCategory: (id, direction) => {
		const cats = sortCategories(get().categories);
		const index = cats.findIndex((c) => c.id === id);
		const next = index + direction;
		if (index < 0 || next < 0 || next >= cats.length) return;
		const copy = [...cats];
		const [moved] = copy.splice(index, 1);
		copy.splice(next, 0, moved);
		set({ categories: copy.map((c, order) => ({
			...c,
			order
		})) });
	},
	addPrompt: ({ title, body, categoryId }) => {
		const item = {
			id: newId(),
			title: title.trim() || "제목 없음",
			body: body.trim(),
			categoryId,
			pinned: false,
			copyCount: 0,
			lastCopiedAt: null,
			createdAt: now(),
			updatedAt: now()
		};
		set({ prompts: [item, ...get().prompts] });
		return item;
	},
	updatePrompt: (id, input) => {
		set({ prompts: get().prompts.map((p) => p.id === id ? {
			...p,
			title: input.title.trim() || "제목 없음",
			body: input.body.trim(),
			categoryId: input.categoryId,
			updatedAt: now()
		} : p) });
	},
	deletePrompt: (id) => {
		set({ prompts: get().prompts.filter((p) => p.id !== id) });
	},
	duplicatePrompt: (id) => {
		const source = get().prompts.find((p) => p.id === id);
		if (!source) return;
		set({ prompts: [{
			...source,
			id: newId(),
			title: `${source.title} 복사`,
			pinned: false,
			copyCount: 0,
			lastCopiedAt: null,
			createdAt: now(),
			updatedAt: now()
		}, ...get().prompts] });
	},
	togglePin: (id) => {
		set({ prompts: get().prompts.map((p) => p.id === id ? {
			...p,
			pinned: !p.pinned,
			updatedAt: now()
		} : p) });
	},
	recordCopy: (id) => {
		const t = now();
		set({ prompts: get().prompts.map((p) => p.id === id ? {
			...p,
			copyCount: p.copyCount + 1,
			lastCopiedAt: t,
			updatedAt: t
		} : p) });
	},
	recordCopies: (ids) => {
		if (ids.length === 0) return;
		const t = now();
		const setIds = new Set(ids);
		set({ prompts: get().prompts.map((p) => setIds.has(p.id) ? {
			...p,
			copyCount: p.copyCount + 1,
			lastCopiedAt: t,
			updatedAt: t
		} : p) });
	},
	importData: (data) => {
		const cats = new Map(get().categories.map((c) => [c.id, c]));
		for (const c of data.categories) {
			if (!c?.id || !c?.name) continue;
			if (!cats.has(c.id)) cats.set(c.id, c);
		}
		const prompts = new Map(get().prompts.map((p) => [p.id, p]));
		for (const p of data.prompts) {
			if (!p?.id || typeof p.body !== "string") continue;
			if (!prompts.has(p.id)) prompts.set(p.id, p);
		}
		set({
			categories: Array.from(cats.values()).map((c, i) => ({
				...c,
				order: c.order ?? i
			})),
			prompts: Array.from(prompts.values())
		});
	},
	replaceAll: (data) => {
		set({
			categories: data.categories,
			prompts: data.prompts
		});
	}
}), {
	name: "promclip-v2",
	skipHydration: true,
	partialize: (state) => ({
		categories: state.categories,
		prompts: state.prompts
	}),
	onRehydrateStorage: () => () => {
		usePromptsStore.getState().setHasHydrated(true);
	}
}));
function sortCategories(categories) {
	return [...categories].sort((a, b) => (a.order ?? 0) - (b.order ?? 0) || a.createdAt - b.createdAt);
}
function sortPrompts(prompts, mode) {
	const copy = [...prompts];
	copy.sort((a, b) => {
		if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
		if (mode === "copied") {
			if (b.copyCount !== a.copyCount) return b.copyCount - a.copyCount;
		}
		if (mode === "title") return a.title.localeCompare(b.title, "ko");
		return (b.lastCopiedAt ?? b.updatedAt) - (a.lastCopiedAt ?? a.updatedAt);
	});
	return copy;
}
function exportPayload() {
	const { categories, prompts } = usePromptsStore.getState();
	return {
		version: 2,
		exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
		categories,
		prompts
	};
}
function CategoryNav({ categories, counts, total, uncategorizedCount, selected, onSelect, onCreate, onRename, onDelete, variant }) {
	const [createOpen, setCreateOpen] = (0, import_react.useState)(false);
	const [renameId, setRenameId] = (0, import_react.useState)(null);
	const [deleteId, setDeleteId] = (0, import_react.useState)(null);
	const [name, setName] = (0, import_react.useState)("");
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
		{
			id: "all",
			name: "전체",
			count: total
		},
		...categories.map((c) => ({
			id: c.id,
			name: c.name,
			count: counts[c.id] ?? 0
		})),
		{
			id: UNCATEGORIZED,
			name: "미분류",
			count: uncategorizedCount
		}
	];
	if (variant === "chips") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
		children: [items.map((item) => {
			const isSystem = item.id === "all" || item.id === "uncategorized";
			const isSelected = selected === item.id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onSelect(item.id),
					className: cn("h-11 shrink-0 snap-start px-4 text-sm font-medium transition-colors duration-150", isSelected && !isSystem ? "rounded-l-full rounded-r-none" : "rounded-full", isSelected ? "bg-primary text-primary-foreground" : "bg-card text-foreground shadow-border hover:bg-muted"),
					children: [item.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-1.5 tabular-nums opacity-70",
						children: item.count
					})]
				}), isSelected && !isSystem ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": `${item.name} 관리`,
						className: "flex h-11 w-10 items-center justify-center rounded-r-full bg-primary text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
					align: "end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
						onSelect: () => {
							setName(item.name);
							setRenameId(item.id);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {}), "이름 변경"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
						variant: "destructive",
						onSelect: () => setDeleteId(item.id),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {}), "삭제"]
					})]
				})] }) : null]
			}, item.id);
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => {
				setName("");
				setCreateOpen(true);
			},
			className: "inline-flex h-11 shrink-0 items-center gap-1 rounded-full bg-card px-3.5 text-sm font-medium text-foreground shadow-border hover:bg-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "카테고리"]
		})]
	}), dialogs()] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		className: "flex flex-col gap-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-3 pb-1 text-xs font-medium text-muted-foreground",
				children: "카테고리"
			}),
			items.map((item) => {
				const isSystem = item.id === "all" || item.id === "uncategorized";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onSelect(item.id),
						className: cn("flex h-11 w-full items-center justify-between rounded-lg px-3 text-left text-sm font-medium transition-colors duration-150", selected === item.id ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate pr-6",
							children: item.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("tabular-nums text-xs", selected === item.id ? "opacity-80" : "text-muted-foreground"),
							children: item.count
						})]
					}), isSystem ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							size: "icon-sm",
							"aria-label": `${item.name} 관리`,
							className: cn("absolute top-1 right-1 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100", selected === item.id && "text-primary-foreground hover:bg-primary-foreground/15"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
						align: "end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
							onSelect: () => {
								setName(item.name);
								setRenameId(item.id);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {}), "이름 변경"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
							variant: "destructive",
							onSelect: () => setDeleteId(item.id),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {}), "삭제"]
						})]
					})] })]
				}, item.id);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "ghost",
				className: "mt-1 justify-start text-muted-foreground",
				onClick: () => {
					setName("");
					setCreateOpen(true);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderPlus, { className: "size-4" }), "카테고리 추가"]
			})
		]
	}), dialogs()] });
	function dialogs() {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: createOpen,
				onOpenChange: setCreateOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "카테고리 추가" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "글쓰기, 코딩처럼 용도별로 묶을 이름을 적으세요." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "new-category",
								children: "이름"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "new-category",
								value: name,
								onChange: (e) => setName(e.target.value),
								onKeyDown: (e) => {
									if (e.key === "Enter") submitCreate();
								},
								placeholder: "예: 마케팅",
								autoFocus: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							onClick: () => setCreateOpen(false),
							children: "취소"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							onClick: submitCreate,
							disabled: !name.trim(),
							children: "추가"
						})] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: renameId !== null,
				onOpenChange: (open) => {
					if (!open) setRenameId(null);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "이름 변경" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: renameTarget ? `"${renameTarget.name}"의 새 이름` : "" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "rename-category",
								children: "이름"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "rename-category",
								value: name,
								onChange: (e) => setName(e.target.value),
								onKeyDown: (e) => {
									if (e.key === "Enter") submitRename();
								},
								autoFocus: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							onClick: () => setRenameId(null),
							children: "취소"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							onClick: submitRename,
							disabled: !name.trim(),
							children: "저장"
						})] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
				open: deleteId !== null,
				onOpenChange: (open) => {
					if (!open) setDeleteId(null);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, { children: "카테고리를 삭제할까요?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, { children: deleteTarget ? `"${deleteTarget.name}"을 지웁니다. 안의 프롬프트는 미분류로 옮겨집니다.` : "" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, { children: "취소" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
					className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
					onClick: () => {
						if (deleteId) onDelete(deleteId);
						setDeleteId(null);
					},
					children: "삭제"
				})] })] })
			})
		] });
	}
}
async function copyText(text) {
	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch {
		try {
			const textarea = document.createElement("textarea");
			textarea.value = text;
			textarea.setAttribute("readonly", "");
			textarea.style.position = "fixed";
			textarea.style.left = "-9999px";
			document.body.appendChild(textarea);
			textarea.select();
			const ok = document.execCommand("copy");
			document.body.removeChild(textarea);
			return ok;
		} catch {
			return false;
		}
	}
}
function combineBodies(bodies, style) {
	const parts = bodies.map((body) => body.trim()).filter(Boolean);
	if (style === "newline") return parts.join("\n");
	return parts.join(", ");
}
function ComposeMixer({ onAddPrompt }) {
	const categories = usePromptsStore((s) => s.categories);
	const prompts = usePromptsStore((s) => s.prompts);
	const moveCategory = usePromptsStore((s) => s.moveCategory);
	const recordCopies = usePromptsStore((s) => s.recordCopies);
	const [picked, setPicked] = (0, import_react.useState)({});
	const [collapsed, setCollapsed] = (0, import_react.useState)({});
	const [joinStyle, setJoinStyle] = (0, import_react.useState)("comma");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [previewOpen, setPreviewOpen] = (0, import_react.useState)(true);
	const ordered = sortCategories(categories);
	const uncategorized = prompts.filter((p) => !p.categoryId);
	const sections = (0, import_react.useMemo)(() => {
		const list = ordered.map((cat) => ({
			key: cat.id,
			name: cat.name,
			movable: true,
			items: sortPrompts(prompts.filter((p) => p.categoryId === cat.id), "title")
		}));
		if (uncategorized.length > 0) list.push({
			key: UNCATEGORIZED,
			name: "미분류",
			movable: false,
			items: sortPrompts(uncategorized, "title")
		});
		return list;
	}, [
		ordered,
		prompts,
		uncategorized
	]);
	const selectedItems = (0, import_react.useMemo)(() => {
		const items = [];
		for (const section of sections) {
			const ids = picked[section.key] ?? [];
			for (const id of ids) {
				const prompt = section.items.find((p) => p.id === id);
				if (prompt) items.push({
					category: section.name,
					prompt
				});
			}
		}
		return items;
	}, [picked, sections]);
	const combined = combineBodies(selectedItems.map((s) => s.prompt.body), joinStyle);
	const anyOpen = sections.some((s) => !collapsed[s.key]);
	function toggle(sectionKey, promptId) {
		setPicked((prev) => {
			const current = prev[sectionKey] ?? [];
			if (current.includes(promptId)) {
				const nextIds = current.filter((id) => id !== promptId);
				if (nextIds.length === 0) {
					const next = { ...prev };
					delete next[sectionKey];
					return next;
				}
				return {
					...prev,
					[sectionKey]: nextIds
				};
			}
			return {
				...prev,
				[sectionKey]: [...current, promptId]
			};
		});
		setCopied(false);
	}
	function toggleCollapsed(sectionKey) {
		setCollapsed((prev) => ({
			...prev,
			[sectionKey]: !prev[sectionKey]
		}));
	}
	function toggleAllSections() {
		if (anyOpen) {
			const next = {};
			for (const section of sections) next[section.key] = true;
			setCollapsed(next);
		} else setCollapsed({});
	}
	async function copyCombined() {
		if (!combined) return;
		if (!await copyText(combined)) {
			toast.error("복사에 실패했습니다. 브라우저 권한을 확인해 주세요.");
			return;
		}
		recordCopies(selectedItems.map((s) => s.prompt.id));
		setCopied(true);
		window.setTimeout(() => setCopied(false), 1600);
		toast.success("합쳐서 복사됨", { description: selectedItems.map((s) => s.prompt.title).join(" · ") });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pb-44",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-xl text-sm leading-relaxed text-muted-foreground",
					children: "카테고리를 열어 조각을 고르면 아래 순서대로 합쳐집니다. 한 카테고리에서 여러 개를 고를 수 있고, 위아래 화살표로 합치는 순서를 바꿀 수 있습니다."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: toggleAllSections,
					className: "h-9 shrink-0 rounded-md px-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
					children: anyOpen ? "모두 접기" : "모두 펼치기"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-3",
				children: sections.map((section, index) => {
					const isCollapsed = Boolean(collapsed[section.key]);
					const selectedIds = picked[section.key] ?? [];
					const selectedCount = selectedIds.length;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "min-w-0 overflow-hidden rounded-lg bg-card shadow-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2 px-2 py-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-w-0 items-center gap-1",
								children: [section.movable ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": `${section.name} 위로`,
										disabled: index === 0,
										onClick: () => moveCategory(section.key, -1),
										className: "flex size-9 items-center justify-center rounded-md text-muted-foreground hover:bg-muted disabled:opacity-30",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": `${section.name} 아래로`,
										disabled: index === ordered.length - 1,
										onClick: () => moveCategory(section.key, 1),
										className: "flex size-9 items-center justify-center rounded-md text-muted-foreground hover:bg-muted disabled:opacity-30",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" })
									})]
								}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									"aria-expanded": !isCollapsed,
									onClick: () => toggleCollapsed(section.key),
									className: "flex min-w-0 items-center gap-2 rounded-md px-2 py-2 text-left hover:bg-muted",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 shrink-0 text-muted-foreground transition-transform duration-200 ease-out", isCollapsed && "-rotate-90") }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-display text-lg font-semibold",
											children: section.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs tabular-nums text-muted-foreground",
											children: section.items.length
										}),
										selectedCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary",
											children: [selectedCount, "개 선택"]
										}) : null
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "ghost",
								size: "sm",
								onClick: () => onAddPrompt(section.key === "uncategorized" ? null : section.key),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "추가"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("grid transition-[grid-template-rows] duration-200 ease-out", isCollapsed ? "grid-rows-[0fr]" : "grid-rows-[1fr]"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden",
								children: section.items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "px-4 pb-4 text-sm text-muted-foreground",
									children: "이 카테고리가 비어 있습니다. 조각을 추가하세요."
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-2 overflow-x-auto px-3 pb-3 [scrollbar-width:thin]",
									children: section.items.map((prompt) => {
										const selected = selectedIds.includes(prompt.id);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											"aria-pressed": selected,
											onClick: () => toggle(section.key, prompt.id),
											className: cn("w-52 shrink-0 rounded-md bg-background p-2.5 text-left shadow-border transition-[box-shadow,background-color] duration-150", selected ? "ring-2 ring-primary" : "hover:shadow-border-hover"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-medium leading-snug text-foreground",
													children: prompt.title
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: cn("mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-sm border", selected ? "border-primary bg-primary text-primary-foreground" : "border-border text-transparent"),
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" })
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground",
												children: prompt.body
											})]
										}, prompt.id);
									})
								})
							})
						})]
					}, section.key);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed right-0 bottom-0 left-0 z-40 border-t border-border bg-background/95 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-3",
					children: [
						selectedItems.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
							children: selectedItems.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full bg-secondary px-3 text-xs font-medium",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: s.category
									}),
									s.prompt.title,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": `${s.prompt.title} 선택 해제`,
										onClick: () => {
											const section = sections.find((sec) => sec.items.some((p) => p.id === s.prompt.id));
											if (section) toggle(section.key, s.prompt.id);
										},
										className: "flex size-5 items-center justify-center rounded-full hover:bg-muted",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" })
									})
								]
							}, s.prompt.id))
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-4" }), "카테고리에서 조각을 고르면 여기에 모입니다. 한 칸에서 여러 개도 가능합니다."]
						}),
						previewOpen && combined ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "line-clamp-3 rounded-lg bg-card px-3 py-2 text-sm leading-relaxed text-foreground shadow-border",
							children: combined
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex rounded-lg bg-secondary p-1",
									children: [["comma", "쉼표로 잇기"], ["newline", "줄바꿈"]].map(([style, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setJoinStyle(style),
										className: cn("h-9 rounded-md px-3 text-sm font-medium transition-colors duration-150", joinStyle === style ? "bg-card text-foreground shadow-border" : "text-muted-foreground hover:text-foreground"),
										children: label
									}, style))
								}),
								combined ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "ghost",
									size: "sm",
									onClick: () => setPreviewOpen((v) => !v),
									children: previewOpen ? "미리보기 숨기기" : "미리보기"
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "ml-auto flex items-center gap-2",
									children: [selectedItems.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "button",
										variant: "outline",
										onClick: () => {
											setPicked({});
											setCopied(false);
										},
										children: "선택 해제"
									}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										type: "button",
										variant: copied ? "copied" : "default",
										onClick: () => void copyCombined(),
										disabled: !combined,
										className: "min-w-36",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), copied ? "복사됨" : "합쳐서 복사"]
									})]
								})
							]
						})
					]
				})
			})
		]
	});
}
var badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0", {
	variants: { variant: {
		default: "border-transparent bg-secondary text-secondary-foreground",
		outline: "border-border text-muted-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"data-slot": "badge",
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function PromptCard({ prompt, categoryName, copied, onCopy, onEdit, onDuplicate, onTogglePin, onDelete }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("flex flex-col rounded-lg bg-card p-3 shadow-border transition-[box-shadow,transform] duration-150 ease-out", "hover:shadow-border-hover", copied && "ring-2 ring-copied/40"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: categoryName }), prompt.pinned ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-medium text-primary",
							children: "고정"
						}) : null]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-display text-base font-semibold leading-snug text-foreground",
						children: prompt.title
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						size: "icon-sm",
						"aria-label": prompt.pinned ? "고정 해제" : "위에 고정",
						onClick: onTogglePin,
						className: "text-muted-foreground",
						children: prompt.pinned ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinOff, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							size: "icon-sm",
							"aria-label": "더 보기",
							className: "text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
						align: "end",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
								onSelect: onEdit,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {}), "수정"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
								onSelect: onDuplicate,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyPlus, {}), "복제"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
								onSelect: onTogglePin,
								children: [prompt.pinned ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinOff, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, {}), prompt.pinned ? "고정 해제" : "위에 고정"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
								variant: "destructive",
								onSelect: onDelete,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {}), "삭제"]
							})
						]
					})] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground whitespace-pre-wrap",
				children: prompt.body || "내용 없음"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2.5 flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs tabular-nums text-muted-foreground",
					children: prompt.copyCount > 0 ? `${prompt.copyCount}회 복사` : "아직 안 씀"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: copied ? "copied" : "default",
					size: "sm",
					onClick: onCopy,
					className: "min-w-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative size-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: cn("absolute inset-0 size-4 transition-[opacity,transform,filter] duration-200 ease-out", copied ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-none") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: cn("absolute inset-0 size-4 transition-[opacity,transform,filter] duration-200 ease-out", copied ? "scale-100 opacity-100 blur-none" : "scale-[0.25] opacity-0 blur-[4px]") })]
					}), copied ? "복사됨" : "복사"]
				})]
			})
		]
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		"data-slot": "textarea",
		className: cn("min-h-40 w-full rounded-lg border border-input bg-card px-3 py-3 text-base text-foreground shadow-border transition-[box-shadow,border-color] duration-150 outline-none placeholder:text-muted-foreground md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/40 focus-visible:ring-[3px]", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function PromptEditor({ open, onOpenChange, categories, editing, defaultCategoryId, onSave, onCreateCategory }) {
	const [title, setTitle] = (0, import_react.useState)("");
	const [body, setBody] = (0, import_react.useState)("");
	const [categoryId, setCategoryId] = (0, import_react.useState)("");
	const [newCategory, setNewCategory] = (0, import_react.useState)("");
	const [showNewCategory, setShowNewCategory] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
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
	}, [
		open,
		editing,
		defaultCategoryId
	]);
	function handleSave() {
		if (!body.trim() && !title.trim()) return;
		let nextCategory = categoryId === "" ? null : categoryId;
		if (showNewCategory && newCategory.trim()) nextCategory = onCreateCategory(newCategory.trim()).id;
		onSave({
			title,
			body,
			categoryId: nextCategory
		});
		onOpenChange(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: editing ? "프롬프트 수정" : "새 프롬프트" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "제목으로 찾고, 본문은 복사 버튼 한 번에 클립보드로 갑니다." })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "prompt-title",
								children: "제목"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "prompt-title",
								value: title,
								onChange: (e) => setTitle(e.target.value),
								placeholder: "예: 코드 리뷰",
								autoFocus: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "prompt-category",
								children: "카테고리"
							}), showNewCategory ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "prompt-category",
									value: newCategory,
									onChange: (e) => setNewCategory(e.target.value),
									placeholder: "새 카테고리 이름"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "outline",
									onClick: () => {
										setShowNewCategory(false);
										setNewCategory("");
									},
									children: "취소"
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									id: "prompt-category",
									value: categoryId,
									onChange: (e) => setCategoryId(e.target.value),
									className: "h-11 min-w-0 flex-1 rounded-lg border border-input bg-card px-3 text-base text-foreground shadow-border outline-none focus-visible:border-ring focus-visible:ring-ring/40 focus-visible:ring-[3px] md:text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "미분류"
									}), categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: c.id,
										children: c.name
									}, c.id))]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "outline",
									onClick: () => setShowNewCategory(true),
									children: "새로 만들기"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "prompt-body",
								children: "본문"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "prompt-body",
								value: body,
								onChange: (e) => setBody(e.target.value),
								placeholder: "복사해서 바로 붙여넣을 프롬프트를 적으세요.",
								className: "min-h-52 font-sans leading-relaxed"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					onClick: () => onOpenChange(false),
					children: "닫기"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					onClick: handleSave,
					disabled: !body.trim() && !title.trim(),
					children: "저장"
				})] })
			]
		})
	});
}
function TooltipProvider({ delayDuration = 300, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Provider, {
		delayDuration,
		...props
	});
}
function PromptVault() {
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
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)("all");
	const [viewMode, setViewMode] = (0, import_react.useState)("compose");
	const [query, setQuery] = (0, import_react.useState)("");
	const [sortMode, setSortMode] = (0, import_react.useState)("recent");
	const [editorOpen, setEditorOpen] = (0, import_react.useState)(false);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [deleteId, setDeleteId] = (0, import_react.useState)(null);
	const [copiedId, setCopiedId] = (0, import_react.useState)(null);
	const searchRef = (0, import_react.useRef)(null);
	const importRef = (0, import_react.useRef)(null);
	const copiedTimer = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		usePromptsStore.persist.rehydrate();
	}, []);
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			const target = e.target;
			const typing = target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);
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
	(0, import_react.useEffect)(() => {
		return () => {
			if (copiedTimer.current) window.clearTimeout(copiedTimer.current);
		};
	}, []);
	const counts = (0, import_react.useMemo)(() => {
		const map = {};
		for (const p of prompts) if (p.categoryId) map[p.categoryId] = (map[p.categoryId] ?? 0) + 1;
		return map;
	}, [prompts]);
	const uncategorizedCount = prompts.filter((p) => !p.categoryId).length;
	const orderedCategories = (0, import_react.useMemo)(() => sortCategories(categories), [categories]);
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		let list = prompts;
		if (selectedCategory === "uncategorized") list = list.filter((p) => !p.categoryId);
		else if (selectedCategory !== "all") list = list.filter((p) => p.categoryId === selectedCategory);
		if (q) list = list.filter((p) => {
			const cat = categories.find((c) => c.id === p.categoryId)?.name ?? "";
			return p.title.toLowerCase().includes(q) || p.body.toLowerCase().includes(q) || cat.toLowerCase().includes(q);
		});
		return sortPrompts(list, sortMode);
	}, [
		prompts,
		selectedCategory,
		query,
		sortMode,
		categories
	]);
	function openNew() {
		setEditing(null);
		setEditorOpen(true);
	}
	function openEdit(prompt) {
		setEditing(prompt);
		setEditorOpen(true);
	}
	async function handleCopy(prompt) {
		if (!await copyText(prompt.body)) {
			toast.error("복사에 실패했습니다. 브라우저 권한을 확인해 주세요.");
			return;
		}
		recordCopy(prompt.id);
		setCopiedId(prompt.id);
		if (copiedTimer.current) window.clearTimeout(copiedTimer.current);
		copiedTimer.current = window.setTimeout(() => setCopiedId(null), 1600);
		toast.success("복사됨", { description: prompt.title });
	}
	function handleExport() {
		const payload = exportPayload();
		const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `promclip-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`;
		a.click();
		URL.revokeObjectURL(url);
		toast.success("파일을 저장했습니다.");
	}
	async function handleImport(file) {
		try {
			const text = await file.text();
			const parsed = JSON.parse(text);
			if (!Array.isArray(parsed.categories) || !Array.isArray(parsed.prompts)) throw new Error("invalid");
			importData({
				categories: parsed.categories,
				prompts: parsed.prompts
			});
			toast.success("가져왔습니다. 같은 항목은 건너뛰었습니다.");
		} catch {
			toast.error("가져올 수 없는 파일입니다.");
		}
	}
	const categoryName = (id) => id ? categories.find((c) => c.id === id)?.name ?? "미분류" : "미분류";
	const defaultCategoryId = selectedCategory === "all" || selectedCategory === "uncategorized" ? null : selectedCategory;
	const deleteTarget = prompts.find((p) => p.id === deleteId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipProvider, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-dvh",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
					className: "border-b border-border/80 bg-background/85 backdrop-blur-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl font-semibold tracking-tight text-foreground",
								children: "프롬클립"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hidden text-sm text-muted-foreground sm:block",
								children: viewMode === "compose" ? "카테고리에서 골라 합칩니다. 한 칸에서 여러 개도 됩니다" : "저장해 두고, 눌러서 바로 복사"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mr-1 hidden rounded-lg bg-secondary p-1 sm:flex",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setViewMode("compose"),
										className: cn("inline-flex h-9 items-center gap-1.5 rounded-md px-3 text-sm font-medium transition-colors duration-150", viewMode === "compose" ? "bg-card text-foreground shadow-border" : "text-muted-foreground hover:text-foreground"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-4" }), "조합"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setViewMode("library"),
										className: cn("inline-flex h-9 items-center gap-1.5 rounded-md px-3 text-sm font-medium transition-colors duration-150", viewMode === "library" ? "bg-card text-foreground shadow-border" : "text-muted-foreground hover:text-foreground"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Library, { className: "size-4" }), "보관함"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: importRef,
									type: "file",
									accept: "application/json",
									className: "sr-only",
									onChange: (e) => {
										const file = e.target.files?.[0];
										if (file) handleImport(file);
										e.target.value = "";
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										size: "icon",
										"aria-label": "더 보기",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
									align: "end",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "보관함" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
											onSelect: handleExport,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), "JSON으로 내보내기"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
											onSelect: () => importRef.current?.click(),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {}), "JSON 가져오기"]
										})
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									onClick: openNew,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "hidden sm:inline",
											children: "새 프롬프트"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "sm:hidden",
											children: "추가"
										})
									]
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex max-w-6xl gap-2 px-4 pt-4 sm:hidden sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex w-full rounded-lg bg-secondary p-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setViewMode("compose"),
							className: cn("inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-md text-sm font-medium transition-colors duration-150", viewMode === "compose" ? "bg-card text-foreground shadow-border" : "text-muted-foreground"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-4" }), "조합"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setViewMode("library"),
							className: cn("inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-md text-sm font-medium transition-colors duration-150", viewMode === "library" ? "bg-card text-foreground shadow-border" : "text-muted-foreground"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Library, { className: "size-4" }), "보관함"]
						})]
					})
				}),
				viewMode === "compose" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-6xl px-4 py-6 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComposeMixer, { onAddPrompt: (categoryId) => {
						if (categoryId) setSelectedCategory(categoryId);
						else setSelectedCategory(UNCATEGORIZED);
						openNew();
					} })
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-8 px-4 py-6 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
						className: "hidden lg:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sticky top-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryNav, {
								variant: "sidebar",
								categories: orderedCategories,
								counts,
								total: prompts.length,
								uncategorizedCount,
								selected: selectedCategory,
								onSelect: setSelectedCategory,
								onCreate: (name) => addCategory(name),
								onRename: renameCategory,
								onDelete: (id) => {
									deleteCategory(id);
									if (selectedCategory === id) setSelectedCategory("all");
								}
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-4 lg:hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryNav, {
									variant: "chips",
									categories: orderedCategories,
									counts,
									total: prompts.length,
									uncategorizedCount,
									selected: selectedCategory,
									onSelect: setSelectedCategory,
									onCreate: (name) => addCategory(name),
									onRename: renameCategory,
									onDelete: (id) => {
										deleteCategory(id);
										if (selectedCategory === id) setSelectedCategory("all");
									}
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-3 sm:flex-row sm:items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										ref: searchRef,
										value: query,
										onChange: (e) => setQuery(e.target.value),
										onKeyDown: (e) => {
											if (e.key === "Enter" && filtered[0]) {
												e.preventDefault();
												handleCopy(filtered[0]);
											}
										},
										placeholder: "제목, 내용, 카테고리 검색",
										className: "pl-10",
										"aria-label": "프롬프트 검색"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex rounded-lg bg-secondary p-1",
									children: [
										["recent", "최근"],
										["copied", "많이 쓴 순"],
										["title", "이름"]
									].map(([mode, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setSortMode(mode),
										className: cn("h-9 rounded-md px-3 text-sm font-medium transition-colors duration-150", sortMode === mode ? "bg-card text-foreground shadow-border" : "text-muted-foreground hover:text-foreground"),
										children: label
									}, mode))
								})]
							}),
							filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
								hasAny: prompts.length > 0,
								query,
								onCreate: openNew
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3",
								children: filtered.map((prompt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptCard, {
									prompt,
									categoryName: categoryName(prompt.categoryId),
									copied: copiedId === prompt.id,
									onCopy: () => void handleCopy(prompt),
									onEdit: () => openEdit(prompt),
									onDuplicate: () => {
										duplicatePrompt(prompt.id);
										toast.success("복제했습니다.");
									},
									onTogglePin: () => togglePin(prompt.id),
									onDelete: () => setDeleteId(prompt.id)
								}) }, prompt.id))
							})
						]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptEditor, {
			open: editorOpen,
			onOpenChange: setEditorOpen,
			categories: orderedCategories,
			editing,
			defaultCategoryId,
			onCreateCategory: addCategory,
			onSave: (input) => {
				if (editing) {
					updatePrompt(editing.id, input);
					toast.success("저장했습니다.");
				} else {
					addPrompt(input);
					toast.success("추가했습니다. 복사 버튼으로 바로 쓸 수 있어요.");
					if (input.categoryId) setSelectedCategory(input.categoryId);
				}
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
			open: deleteId !== null,
			onOpenChange: (open) => {
				if (!open) setDeleteId(null);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, { children: "이 프롬프트를 삭제할까요?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, { children: deleteTarget ? `"${deleteTarget.title}"을 삭제합니다. 되돌릴 수 없습니다.` : "" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, { children: "취소" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
				className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
				onClick: () => {
					if (deleteId) deletePrompt(deleteId);
					setDeleteId(null);
				},
				children: "삭제"
			})] })] })
		})
	] });
}
function EmptyState({ hasAny, query, onCreate }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-10 rounded-xl bg-card px-6 py-14 text-center shadow-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-xl font-semibold",
				children: query.trim() ? "검색 결과가 없습니다" : hasAny ? "이 카테고리가 비어 있습니다" : "첫 프롬프트를 저장하세요"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground",
				children: query.trim() ? "다른 단어로 찾아보거나, 새 프롬프트를 추가하세요." : "자주 쓰는 문장을 적어 두면, 복사 한 번에 붙여넣을 수 있습니다."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				className: "mt-6",
				onClick: onCreate,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "새 프롬프트"]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptVault, {});
}
//#endregion
export { Home as component };
