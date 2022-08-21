import { mount } from "@vue/test-utils";
import FileInput from "../FileInput.vue";
import { describe, it, expect } from "vitest";
const defaultProps = {
  value: new File([""], "myfile"),
};
describe("FileInput", () => {
  it("Should render", () => {
    const wrapper = mount(FileInput, { props: { ...defaultProps } });
    expect(wrapper.vm.value).toBe(defaultProps.value);
  });
});
