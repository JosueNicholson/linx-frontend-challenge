import { post } from "@/services/axios-client";

export async function authorize() {
  try {
    const bodyFormData = new FormData();
    bodyFormData.append("clientId", import.meta.env.VITE_APP_CLIENT_ID);
    bodyFormData.append("secretId", import.meta.env.VITE_APP_SECRET_ID);
    // bodyFormData.append("grant")
    await post(
      "/oauth2/token",
      { data: bodyFormData },
      { headers: { "Content-Type": "multipart/form-data" } }
    );
  } catch (error) {
    console.log(error);
  }
}
