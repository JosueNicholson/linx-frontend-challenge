import { get, post } from "@/services/axios-client";
import type { ActionContext } from "vuex";

export async function create(
  { dispatch }: ActionContext<unknown, unknown>,
  { title, description }: Record<string, string>
) {
  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    await post("/album", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch("fetchAll");
  } catch (error) {
    console.log(error);
  }
}

export async function fetchAll({ commit }: ActionContext<unknown, unknown>) {
  try {
    const username = window.localStorage.getItem("account_username");
    const { data: res } = await get(`/account/${username}/albums`);
    commit("SET_ALBUMS", res.data);
  } catch (error) {
    console.log(error);
  }
}

export async function fetchById(
  { commit }: ActionContext<unknown, unknown>,
  id: string
) {
  try {
    const { data: res } = await get(`album/${id}`);
    commit("SET_ALBUM", res.data);
  } catch (error) {
    console.log(error);
  }
}
