export async function copyText(text: string): Promise<boolean> {
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

export type JoinStyle = "comma" | "newline";

export function combineBodies(bodies: string[], style: JoinStyle): string {
  const parts = bodies.map((body) => body.trim()).filter(Boolean);
  if (style === "newline") return parts.join("\n");
  return parts.join(", ");
}
