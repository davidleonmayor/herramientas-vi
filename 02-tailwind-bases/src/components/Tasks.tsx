import type { Itask } from "@/types";

export function Tasks({
  tasks,
  onToggle,
  onRemove,
}: {
  tasks: Itask[];
  onToggle: (title: string) => void;
  onRemove: (title: string) => void;
}) {
  return (
    <div className="mt-4">
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between border p-2 rounded"
          >
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={task.end}
                onChange={() => onToggle(task.title)}
              />
              <div>
                <span
                  className={`text-lg ${
                    task.end ? "line-through text-gray-500" : ""
                  }`}
                >
                  {task.title}
                </span>
                <p className="text-sm text-gray-600">{task.content}</p>
              </div>
            </div>

            <button
              onClick={() => onRemove(task.title)}
              className="text-red-500 hover:underline"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
