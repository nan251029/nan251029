import { createFileRoute } from "@tanstack/react-router";
import { PromptVault } from "@/components/prompt-vault";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <PromptVault />;
}
