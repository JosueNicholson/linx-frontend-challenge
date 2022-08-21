import { mount } from "@vue/test-utils";
import Input from "../Input.vue";
import { describe, it, expect } from "vitest";

const defaultProps = {
  value: "value",
  label: "label",
  type: "text",
  placeholder: "placeholder",
};
describe("Input", () => {
  it("Should render", () => {
    const wrapper = mount(Input, { props: { ...defaultProps } });
    Object.keys(defaultProps).forEach((key) => {
      expect(wrapper.vm[key]).toBe(defaultProps[key]);
    });
  });
});
