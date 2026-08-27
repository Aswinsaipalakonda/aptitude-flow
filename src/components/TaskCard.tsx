import { CheckCircle2, ChevronDown, Circle, ExternalLink, PlayCircle, Timer } from "lucide-react";
import type { CurriculumItem, Priority } from "@/data/curriculum";
import type { TaskStatus } from "@/hooks/use-progress";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const priorityClass: Record<Priority, string> = {
  High: "bg-priority-high-soft text-priority-high border-priority-high/25",
  Medium: "bg-priority-medium-soft text-priority-medium border-priority-medium/25",
  Low: "bg-priority-low-soft text-priority-low border-priority-low/25",
};

const statusLabel: Record<TaskStatus, string> = {
  todo: "To Do",
  in_progress: "In Progress",
  completed: "Completed",
};

const statusIcon: Record<TaskStatus, typeof Circle> = {
  todo: Circle,
  in_progress: Timer,
  completed: CheckCircle2,
};

const statusChip: Record<TaskStatus, string> = {
  todo: "bg-white/70 text-muted-foreground border-border",
  in_progress: "bg-priority-medium-soft text-priority-medium border-priority-medium/25",
  completed: "bg-priority-low-soft text-priority-low border-priority-low/25",
};

export function TaskCard({
  item,
  status,
  onStatusChange,
}: {
  item: CurriculumItem;
  status: TaskStatus;
  onStatusChange: (status: TaskStatus) => void;
}) {
  const StatusIcon = statusIcon[status];

  return (
    <article
      className={cn(
        "glass-panel rounded-3xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-float sm:p-6",
        status === "completed" && "opacity-80",
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-foreground px-3 py-1 text-xs font-semibold tracking-wide text-background">
          Day {item.day}
        </span>
        <span
          className={cn(
            "rounded-full border px-3 py-1 text-xs font-medium",
            priorityClass[item.priority],
          )}
        >
          {item.priority} Priority
        </span>
        <span
          className={cn(
            "ml-auto inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
            statusChip[status],
          )}
        >
          <StatusIcon className="size-3.5" />
          {statusLabel[status]}
        </span>
      </div>

      <h3
        className={cn(
          "mt-4 text-lg font-semibold tracking-tight text-foreground sm:text-xl",
          status === "completed" && "line-through decoration-priority-low/60",
        )}
      >
        {item.topic}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">{item.category}</p>

      <div className="mt-5 flex flex-wrap items-center gap-2.5">
        <Button asChild variant="watch" size="pill">
          <a href={item.video_resource} target="_blank" rel="noreferrer noopener">
            <PlayCircle className="size-4" />
            Watch Tutorial
          </a>
        </Button>
        <Button asChild variant="quiz" size="pill">
          <a href={item.practice_resource} target="_blank" rel="noreferrer noopener">
            <ExternalLink className="size-4" />
            Take Quiz
          </a>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghostGlass" size="pill" className="ml-auto">
              Status
              <ChevronDown className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="rounded-2xl">
            {(["todo", "in_progress", "completed"] as TaskStatus[]).map((value) => (
              <DropdownMenuItem
                key={value}
                onSelect={() => onStatusChange(value)}
                className="rounded-xl text-sm"
              >
                {statusLabel[value]}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </article>
  );
}
