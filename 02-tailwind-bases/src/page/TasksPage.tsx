import type { Itask } from "@/types";
import { Button, Input } from "@/components/ui";
import { Tasks } from "@/components/Tasks";
import { useTasks } from "@/hooks/useTasks";
import { useState } from "react";

const INITIAL_TASKS: Itask[] = [
  { title: "test1", content: "end the ...", end: false },
  { title: "test2", content: "end the ...", end: true },
];

export function TasksPage() {
  const { tasks, insertNew, removeOne, removeAll, toggleEnd } =
    useTasks(INITIAL_TASKS);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center gap-4">
        <Input
          type="text"
          placeholder="Título de la tarea"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="min-w-[200px]"
        />
        <Input
          type="text"
          placeholder="Descripción"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          className="min-w-[300px]"
        />
        <Button
          onClick={() => {
            if (!newTitle.trim()) return;
            insertNew({ title: newTitle, content: newContent, end: false });
            setNewTitle("");
            setNewContent("");
          }}
        >
          Add
        </Button>
        <Button variant="destructive" onClick={removeAll}>
          Remove all
        </Button>
      </div>

      <Tasks tasks={tasks} onToggle={toggleEnd} onRemove={removeOne} />
    </div>
  );
}
