import { vi } from "vitest";

export default {
  state: () => ({}),
  getters: {
    album: vi.fn(),
    albums: vi.fn(),
  },
  actions: {
    create: vi.fn(),
    fetchAll: vi.fn(),
    fetchById: vi.fn(),
  },
  mutations: {
    SET_ALBUM: vi.fn(),
    SET_ALBUMS: vi.fn(),
  },
};
