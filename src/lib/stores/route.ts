import type { Route } from "$lib/types/common";
import { writable, type Writable } from "svelte/store";

export const initRoutes: Route[] = [
  {
    name: "About",
    path: "/about",
    isActive: true,
  },
  {
    name: "Sverdle",
    path: "/sverdle",
    isActive: false,
  },
];

export const routes: Writable<Route[]> = writable(initRoutes);

