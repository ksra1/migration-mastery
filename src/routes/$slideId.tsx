import { createFileRoute } from "@tanstack/react-router";
import { DeckRoute } from "../deck/DeckShell";

export const Route = createFileRoute("/$slideId")({
  component: DeckRoute,
});
