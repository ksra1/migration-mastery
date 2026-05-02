import { createFileRoute } from "@tanstack/react-router";
import { DeckShell } from "../deck/DeckShell";
import { PasswordGate } from "../deck/PasswordGate";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Enterprise AEM Cloud Migration — Case Study" },
      {
        name: "description",
        content:
          "Senior Engineering Manager case study: consolidating 4 on-prem stacks into a unified cloud platform with 75% cost reduction.",
      },
      { property: "og:title", content: "Enterprise AEM Cloud Migration — Case Study" },
      {
        property: "og:description",
        content:
          "Leadership, architecture, and outcomes from a large-scale enterprise cloud migration.",
      },
    ],
  }),
  component: () => (
    <PasswordGate>
      <DeckShell slideId={1} />
    </PasswordGate>
  ),
});
