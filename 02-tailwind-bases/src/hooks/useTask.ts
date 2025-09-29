import type { Itask } from "@/types";
import { useState } from "react";

export function useTask(initialState: Itask[] = []) {
  const [tasks, setTasks] = useState<Itask[]>(initialState);

  function addTask(task: Itask) {
    setTasks((prev) => [...prev, task]);
  }

  function removeTask(id: number) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function toggleEnd(id: number) {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, end: !task.end } : task))
    );
  }

  function resetList() {
    setTasks([]);
  }

  return {
    tasks,
    addTask,
    removeTask,
    toggleEnd,
    resetList,
  };
}
