import { mount } from "@vue/test-utils";
import AlbumList from "../AlbumList.vue";
import { describe, it, expect, beforeEach } from "vitest";
import { createStore } from "vuex";
import AlbumStoreMock from "../../../../spec/mocks/store/album-mock";

describe("Album List", () => {
  let store;

  beforeEach(() => {
    store = createStore({
      ...AlbumStoreMock,
    });
  });

  it("Should render", () => {
    const wrapper = mount(AlbumList, { global: { plugins: [store] } });
    expect(wrapper.exists()).toBe(true);
  });
});
