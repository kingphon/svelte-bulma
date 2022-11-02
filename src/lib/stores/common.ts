import type { Config, User } from '$lib/types/common';
import { writable } from 'svelte/store';

export const user: User = {
  name: "Kin",
  avatar: "https://bulma.io/images/placeholders/128x128.png",
};

export const config: Config = {
  name: "Selly",
  logo: "https://media.sellycdn.net/files/md_445646269301_1617593312837.png",
};
