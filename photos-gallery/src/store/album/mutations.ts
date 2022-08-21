export function SET_ALBUMS(state: Record<string, unknown>, payload: unknown) {
  state.albums = payload;
}

export function SET_ALBUM(state: Record<string, unknown>, payload: unknown) {
  state.album = payload;
}
