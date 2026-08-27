import { useCallback, useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { curriculum } from "@/data/curriculum";

export type TaskStatus = "todo" | "in_progress" | "completed";

export type StatusMap = Record<number, TaskStatus>;

const STORAGE_KEY = "taskflow-progress";

function emptyMap(): StatusMap {
  return Object.fromEntries(curriculum.map((item) => [item.day, "todo" as TaskStatus]));
}

function readLocal(): StatusMap {
  if (typeof window === "undefined") return emptyMap();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyMap();
    return { ...emptyMap(), ...(JSON.parse(raw) as StatusMap) };
  } catch {
    return emptyMap();
  }
}

export function useProgress() {
  const [user, setUser] = useState<User | null>(null);
  const [statuses, setStatuses] = useState<StatusMap>(emptyMap);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const load = async (currentUser: User | null) => {
      if (!currentUser) {
        if (active) {
          setStatuses(readLocal());
          setLoading(false);
        }
        return;
      }
      const { data } = await supabase.from("task_progress").select("day, status");
      if (!active) return;
      const next = emptyMap();
      for (const row of data ?? []) {
        next[row.day] = row.status as TaskStatus;
      }
      setStatuses(next);
      setLoading(false);
    };

    supabase.auth.getUser().then(({ data }) => {
      if (!active) return;
      setUser(data.user ?? null);
      void load(data.user ?? null);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
      if (event !== "SIGNED_IN" && event !== "SIGNED_OUT" && event !== "USER_UPDATED") return;
      setUser(session?.user ?? null);
      setLoading(true);
      void load(session?.user ?? null);
    });

    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  const setStatus = useCallback(
    async (day: number, status: TaskStatus) => {
      const previous = statuses;
      const next = { ...statuses, [day]: status };
      setStatuses(next);

      if (!user) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        return { error: null as string | null };
      }

      const { error } = await supabase
        .from("task_progress")
        .upsert({ user_id: user.id, day, status }, { onConflict: "user_id,day" });

      if (error) {
        setStatuses(previous);
        return { error: error.message };
      }
      return { error: null as string | null };
    },
    [statuses, user],
  );

  return { user, statuses, setStatus, loading };
}
