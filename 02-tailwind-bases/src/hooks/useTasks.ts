import type { Itask } from "@/types";
import { useState } from "react";

export function useTasks(initialState: Itask[] = []) {
  const [tasks, setTasks] = useState<Itask[]>(initialState);

  function insertNew(task: Itask) {
    setTasks((prev) => [...prev, task]);
  }

  function removeOne(title: string) {
    setTasks((prev) => prev.filter((t) => t.title !== title));
  }

  function toggleEnd(title: string) {
    setTasks((prev) =>
      prev.map((t) => (t.title === title ? { ...t, end: !t.end } : t))
    );
  }

  function removeAll() {
    setTasks([]);
  }

  return {
    tasks,
    insertNew,
    removeOne,
    toggleEnd,
    removeAll,
  };
}
