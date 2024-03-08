import axios from "axios";

const apiUrl = "https://ketero-web-dmow.vercel.app/api/v1/mezgebu";
export async function getMezgebu(id: string): Promise<any> {
  try {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  } catch (e) {
    throw e;
  }
}

export async function getMezgebus(): Promise<any> {
  try {
    const response = await axios.get(`${apiUrl}`);
    return response.data;
  } catch (e) {
    throw e;
  }
}


