import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Diese Domain ist noch im Aufbau" },
      {
        name: "description",
        content:
          "Diese Domain ist noch im Aufbau. Schauen Sie gerne später wieder vorbei.",
      },
      { property: "og:title", content: "Diese Domain ist noch im Aufbau" },
      {
        property: "og:description",
        content:
          "Diese Domain ist noch im Aufbau. Schauen Sie gerne später wieder vorbei.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Diese Domain ist noch im Aufbau" },
      {
        name: "twitter:description",
        content:
          "Diese Domain ist noch im Aufbau. Schauen Sie gerne später wieder vorbei.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-16">
      <span className="rounded-full border border-border px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        Diese Domain ist noch im Aufbau
      </span>
      <h1 className="mt-10 max-w-3xl text-center text-5xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl">
        Diese Domain ist noch im Aufbau.
      </h1>
      <p className="mt-8 text-center text-xl text-muted-foreground sm:text-2xl">
        Schauen Sie gerne später wieder vorbei.
      </p>
      <div className="mt-14 h-px w-24 bg-border" />
    </main>
  );
}
