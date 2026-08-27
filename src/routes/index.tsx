import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CheckCircle2, Circle, LogOut, Sparkles, Timer, UserRound } from "lucide-react";
import { toast } from "sonner";
import { curriculum } from "@/data/curriculum";
import { useProgress, type TaskStatus } from "@/hooks/use-progress";
import { ProgressRing } from "@/components/ProgressRing";
import { TaskCard } from "@/components/TaskCard";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TaskFlow Planner — 30-Day Aptitude Habit Tracker" },
      {
        name: "description",
        content:
          "Track a focused 30-day aptitude plan: daily topics, priority tags, video tutorials and practice quizzes with saved progress.",
      },
      { property: "og:title", content: "TaskFlow Planner — 30-Day Aptitude Habit Tracker" },
      {
        property: "og:description",
        content:
          "A calm 30-day aptitude study tracker with daily topics, tutorials, quizzes and progress sync.",
      },
    ],
  }),
  component: Home,
});

const tabs: { key: TaskStatus; label: string; icon: typeof Circle }[] = [
  { key: "todo", label: "To Do", icon: Circle },
  { key: "in_progress", label: "In Progress", icon: Timer },
  { key: "completed", label: "Completed", icon: CheckCircle2 },
];

function Home() {
  const { user, statuses, setStatus, loading } = useProgress();
  const [activeTab, setActiveTab] = useState<TaskStatus>("todo");

  const counts = useMemo(() => {
    const base: Record<TaskStatus, number> = { todo: 0, in_progress: 0, completed: 0 };
    for (const item of curriculum) base[statuses[item.day] ?? "todo"] += 1;
    return base;
  }, [statuses]);

  const percent = (counts.completed / curriculum.length) * 100;
  const visible = curriculum.filter((item) => (statuses[item.day] ?? "todo") === activeTab);

  const handleChange = async (day: number, next: TaskStatus) => {
    const { error } = await setStatus(day, next);
    if (error) toast.error("Couldn't save that change. Please try again.");
  };

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <header className="glass-panel rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-muted-foreground">
              <Sparkles className="size-3.5" />
              30-Day Aptitude Habit
            </span>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              TaskFlow Planner
            </h1>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              One topic a day. Watch, practice, and mark it done.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <ProgressRing percent={percent} />
            <div className="text-sm">
              <p className="font-semibold text-foreground">
                {counts.completed} of {curriculum.length}
              </p>
              <p className="text-muted-foreground">tasks completed</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/60 pt-4">
          <p className="text-xs text-muted-foreground">
            {user
              ? `Progress syncing for ${user.email ?? "your account"}`
              : "Progress saved on this device — sign in to sync everywhere"}
          </p>
          {user ? (
            <Button
              variant="ghostGlass"
              size="pill"
              onClick={async () => {
                await supabase.auth.signOut();
                toast.success("Signed out");
              }}
            >
              <LogOut className="size-4" />
              Sign out
            </Button>
          ) : (
            <Button asChild variant="hero" size="pill">
              <Link to="/auth">
                <UserRound className="size-4" />
                Sign in
              </Link>
            </Button>
          )}
        </div>
      </header>

      <nav className="glass-panel mt-6 flex gap-1.5 rounded-3xl p-1.5">
        {tabs.map((tab) => {
          const active = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
                active
                  ? "bg-foreground text-background shadow-soft"
                  : "text-muted-foreground hover:bg-white/60 hover:text-foreground",
              )}
            >
              <tab.icon className="size-4" />
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[11px] font-semibold",
                  active ? "bg-background/20 text-background" : "bg-white/70 text-foreground",
                )}
              >
                {counts[tab.key]}
              </span>
            </button>
          );
        })}
      </nav>

      <section className="mt-6 space-y-4">
        {loading ? (
          <div className="glass-panel rounded-3xl p-10 text-center text-sm text-muted-foreground">
            Loading your plan…
          </div>
        ) : visible.length === 0 ? (
          <div className="glass-panel rounded-3xl p-10 text-center">
            <p className="text-sm font-medium text-foreground">Nothing here yet</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Tasks you move to this stage will appear here.
            </p>
          </div>
        ) : (
          visible.map((item) => (
            <TaskCard
              key={item.day}
              item={item}
              status={statuses[item.day] ?? "todo"}
              onStatusChange={(next) => void handleChange(item.day, next)}
            />
          ))
        )}
      </section>
    </main>
  );
}
