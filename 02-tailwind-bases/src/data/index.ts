import type { Itask, NavLinkType } from "../types";

export const navLinks: NavLinkType[] = [
  { name: "Boton", path: "/buton" },
  { name: "Filtro", path: "/filter" },
  { name: "Pricing", path: "/pricing" },
  { name: "Counter", path: "/guide4/counter" },
  { name: "Styled Button", path: "/guide4/styled-button" },
  { name: "Randon num", path: "/guide4/random-num" },
  { name: "Tasks", path: "/guide4/tasks" },
];

export const INITIAL_TASKS: Itask[] = [
  { id: 1, title: "test1", content: "end the ...", end: false },
  { id: 2, title: "test2", content: "end the ...", end: true },
  { id: 3, title: "test3", content: "end the ...", end: true },
];
