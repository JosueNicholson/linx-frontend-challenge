import { get, post } from "@/services/axios-client";
import type { ActionContext } from "vuex";

export async function upload(
  { rootGetters, dispatch }: ActionContext<unknown, unknown>,
  file: File
) {
  try {
    const formData = new FormData();
    const { id } = rootGetters["album/album"];
    formData.append("image", file);
    formData.append("album", id);
    await post("/image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch("fetchAllByAlbum");
  } catch (error) {
    console.log(error);
  }
}

export async function fetchAllByAlbum({
  rootGetters,
  commit,
}: ActionContext<unknown, unknown>) {
  try {
    const album = rootGetters["album/album"];
    const { data: res } = await get(`/album/${album.id}/images`);
    commit(
      "album/SET_ALBUM",
      {
        ...album,
        images: res.data,
      },
      { root: true }
    );
  } catch (error) {
    console.log(error);
  }
}
