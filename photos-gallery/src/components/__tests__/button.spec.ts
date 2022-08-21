import { mount } from "@vue/test-utils";
import Button from "../Button.vue";
import { describe, it, expect } from "vitest";
const defaultProps = {
  text: "texto",
};
describe("Button", () => {
  it("Should render", () => {
    const wrapper = mount(Button, { props: { ...defaultProps } });
    expect(wrapper.text()).toBe(defaultProps.text);
  });
  it("Should emit click-btn event", async () => {
    const wrapper = mount(Button, { props: { ...defaultProps } });
    const buttonElement = wrapper.find(".button");
    await buttonElement.trigger("click");
    expect(wrapper.emitted("click"));
  });
});
