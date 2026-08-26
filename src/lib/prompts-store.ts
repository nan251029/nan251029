import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Category = {
  id: string;
  name: string;
  order: number;
  createdAt: number;
};

export type PromptItem = {
  id: string;
  title: string;
  body: string;
  categoryId: string | null;
  pinned: boolean;
  copyCount: number;
  lastCopiedAt: number | null;
  createdAt: number;
  updatedAt: number;
};

export type SortMode = "recent" | "copied" | "title";

type PromptsState = {
  categories: Category[];
  prompts: PromptItem[];
  hasHydrated: boolean;
  addCategory: (name: string) => Category;
  renameCategory: (id: string, name: string) => void;
  deleteCategory: (id: string) => void;
  moveCategory: (id: string, direction: -1 | 1) => void;
  addPrompt: (input: {
    title: string;
    body: string;
    categoryId: string | null;
  }) => PromptItem;
  updatePrompt: (
    id: string,
    input: { title: string; body: string; categoryId: string | null },
  ) => void;
  deletePrompt: (id: string) => void;
  duplicatePrompt: (id: string) => void;
  togglePin: (id: string) => void;
  recordCopy: (id: string) => void;
  recordCopies: (ids: string[]) => void;
  importData: (data: { categories: Category[]; prompts: PromptItem[] }) => void;
  replaceAll: (data: { categories: Category[]; prompts: PromptItem[] }) => void;
  setHasHydrated: (value: boolean) => void;
};

function now() {
  return Date.now();
}

function newId() {
  return crypto.randomUUID();
}

const SEED_AT = 1_700_000_000_000;

const seedCategories: Category[] = [
  { id: "cat-subject", name: "인물", order: 0, createdAt: SEED_AT },
  { id: "cat-scene", name: "배경", order: 1, createdAt: SEED_AT + 1 },
  { id: "cat-action", name: "상황", order: 2, createdAt: SEED_AT + 2 },
  { id: "cat-outfit", name: "의상", order: 3, createdAt: SEED_AT + 3 },
  { id: "cat-style", name: "스타일", order: 4, createdAt: SEED_AT + 4 },
];

function item(
  id: string,
  title: string,
  body: string,
  categoryId: string,
  offset: number,
): PromptItem {
  return {
    id,
    title,
    body,
    categoryId,
    pinned: false,
    copyCount: 0,
    lastCopiedAt: null,
    createdAt: SEED_AT + offset,
    updatedAt: SEED_AT + offset,
  };
}

const seedPrompts: PromptItem[] = [
  item(
    "p-woman",
    "젊은 여성",
    "a young East Asian woman, long black hair, calm sharp features, luminous skin",
    "cat-subject",
    10,
  ),
  item(
    "p-man",
    "중년 남성",
    "a middle-aged man, short gray hair, weathered face, intense quiet eyes",
    "cat-subject",
    20,
  ),
  item(
    "p-child",
    "아이",
    "a small child, round face, curious eyes, soft natural hair",
    "cat-subject",
    30,
  ),
  item(
    "p-rain-alley",
    "비 오는 골목",
    "rainy neon-lit alley at night, wet pavement reflections, steam from street vents",
    "cat-scene",
    40,
  ),
  item(
    "p-forest",
    "안개 숲",
    "misty ancient forest, shafts of morning light through tall trees, mossy ground",
    "cat-scene",
    50,
  ),
  item(
    "p-hanok",
    "한옥 마당",
    "a quiet hanok courtyard, wooden eaves, paper doors, late afternoon sun",
    "cat-scene",
    60,
  ),
  item(
    "p-lookback",
    "돌아보기",
    "looking back over the shoulder, wind lifting the hair, paused mid-step",
    "cat-action",
    70,
  ),
  item(
    "p-window",
    "창가에 앉음",
    "sitting by a window, quiet afternoon light on the face, hands in lap",
    "cat-action",
    80,
  ),
  item(
    "p-walk",
    "골목 걷기",
    "walking slowly down the street, coat moving with the stride, city behind",
    "cat-action",
    90,
  ),
  item(
    "p-redcoat",
    "빨간 코트",
    "wearing a tailored red wool coat, black boots, a thin scarf",
    "cat-outfit",
    100,
  ),
  item(
    "p-hanbok",
    "현대 한복",
    "wearing a modern hanbok in ivory and ink, silk texture, clean silhouette",
    "cat-outfit",
    110,
  ),
  item(
    "p-linen",
    "린넨 셔츠",
    "wearing a loose linen shirt, earth-tone trousers, simple leather shoes",
    "cat-outfit",
    120,
  ),
  item(
    "p-cine",
    "영화 스틸",
    "cinematic film still, anamorphic lens, shallow depth of field, Kodak Portra colors",
    "cat-style",
    130,
  ),
  item(
    "p-watercolor",
    "수채화",
    "delicate watercolor illustration, soft paper grain, muted pigments",
    "cat-style",
    140,
  ),
  item(
    "p-studio",
    "스튜디오 조명",
    "studio portrait lighting, soft key light, gentle rim light, clean background falloff",
    "cat-style",
    150,
  ),
];

export const UNCATEGORIZED = "uncategorized";
export const ALL_CATEGORY = "all";

export const usePromptsStore = create<PromptsState>()(
  persist(
    (set, get) => ({
      categories: seedCategories,
      prompts: seedPrompts,
      hasHydrated: false,
      setHasHydrated: (value) => set({ hasHydrated: value }),
      addCategory: (name) => {
        const trimmed = name.trim();
        const existing = get().categories.find(
          (c) => c.name.toLowerCase() === trimmed.toLowerCase(),
        );
        if (existing) return existing;
        const category: Category = {
          id: newId(),
          name: trimmed,
          order: Math.max(-1, ...get().categories.map((c) => c.order ?? 0)) + 1,
          createdAt: now(),
        };
        set({ categories: [...get().categories, category] });
        return category;
      },
      renameCategory: (id, name) => {
        const trimmed = name.trim();
        if (!trimmed) return;
        set({
          categories: get().categories.map((c) =>
            c.id === id ? { ...c, name: trimmed } : c,
          ),
        });
      },
      deleteCategory: (id) => {
        set({
          categories: get().categories.filter((c) => c.id !== id),
          prompts: get().prompts.map((p) =>
            p.categoryId === id ? { ...p, categoryId: null, updatedAt: now() } : p,
          ),
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
        set({
          categories: copy.map((c, order) => ({ ...c, order })),
        });
      },
      addPrompt: ({ title, body, categoryId }) => {
        const item: PromptItem = {
          id: newId(),
          title: title.trim() || "제목 없음",
          body: body.trim(),
          categoryId,
          pinned: false,
          copyCount: 0,
          lastCopiedAt: null,
          createdAt: now(),
          updatedAt: now(),
        };
        set({ prompts: [item, ...get().prompts] });
        return item;
      },
      updatePrompt: (id, input) => {
        set({
          prompts: get().prompts.map((p) =>
            p.id === id
              ? {
                  ...p,
                  title: input.title.trim() || "제목 없음",
                  body: input.body.trim(),
                  categoryId: input.categoryId,
                  updatedAt: now(),
                }
              : p,
          ),
        });
      },
      deletePrompt: (id) => {
        set({ prompts: get().prompts.filter((p) => p.id !== id) });
      },
      duplicatePrompt: (id) => {
        const source = get().prompts.find((p) => p.id === id);
        if (!source) return;
        const copy: PromptItem = {
          ...source,
          id: newId(),
          title: `${source.title} 복사`,
          pinned: false,
          copyCount: 0,
          lastCopiedAt: null,
          createdAt: now(),
          updatedAt: now(),
        };
        set({ prompts: [copy, ...get().prompts] });
      },
      togglePin: (id) => {
        set({
          prompts: get().prompts.map((p) =>
            p.id === id ? { ...p, pinned: !p.pinned, updatedAt: now() } : p,
          ),
        });
      },
      recordCopy: (id) => {
        const t = now();
        set({
          prompts: get().prompts.map((p) =>
            p.id === id
              ? {
                  ...p,
                  copyCount: p.copyCount + 1,
                  lastCopiedAt: t,
                  updatedAt: t,
                }
              : p,
          ),
        });
      },
      recordCopies: (ids) => {
        if (ids.length === 0) return;
        const t = now();
        const setIds = new Set(ids);
        set({
          prompts: get().prompts.map((p) =>
            setIds.has(p.id)
              ? {
                  ...p,
                  copyCount: p.copyCount + 1,
                  lastCopiedAt: t,
                  updatedAt: t,
                }
              : p,
          ),
        });
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
            order: c.order ?? i,
          })),
          prompts: Array.from(prompts.values()),
        });
      },
      replaceAll: (data) => {
        set({
          categories: data.categories,
          prompts: data.prompts,
        });
      },
    }),
    {
      name: "promclip-v2",
      skipHydration: true,
      partialize: (state) => ({
        categories: state.categories,
        prompts: state.prompts,
      }),
      onRehydrateStorage: () => () => {
        usePromptsStore.getState().setHasHydrated(true);
      },
    },
  ),
);

export function sortCategories(categories: Category[]): Category[] {
  return [...categories].sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0) || a.createdAt - b.createdAt,
  );
}

export function sortPrompts(prompts: PromptItem[], mode: SortMode): PromptItem[] {
  const copy = [...prompts];
  copy.sort((a, b) => {
    if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
    if (mode === "copied") {
      if (b.copyCount !== a.copyCount) return b.copyCount - a.copyCount;
    }
    if (mode === "title") {
      return a.title.localeCompare(b.title, "ko");
    }
    return (b.lastCopiedAt ?? b.updatedAt) - (a.lastCopiedAt ?? a.updatedAt);
  });
  return copy;
}

export function exportPayload() {
  const { categories, prompts } = usePromptsStore.getState();
  return {
    version: 2 as const,
    exportedAt: new Date().toISOString(),
    categories,
    prompts,
  };
}
