import { Button, Input } from "@/components/ui";
import { Tasks } from "@/components/Tasks";
import { useTask } from "@/hooks/useTask";
import { useState } from "react";
import { INITIAL_TASKS } from "@/data/index";

export function TasksPage() {
  const { tasks, addTask, removeTask, resetList, toggleEnd } =
    useTask(INITIAL_TASKS);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  // index increment
  let index = tasks.length;

  return (
    <div className="w-full min-h-[calc(100vh-4rem)] px-6 flex items-center justify-center flex-col p-6 space-y-4">
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

            index += 1;
            addTask({
              id: index,
              title: newTitle,
              content: newContent,
              end: false,
            });
            setNewTitle("");
            setNewContent("");
          }}
        >
          Add
        </Button>
        <Button variant="destructive" onClick={resetList}>
          Remove all
        </Button>
      </div>

      <Tasks tasks={tasks} onToggle={toggleEnd} onRemove={removeTask} />
    </div>
  );
}
