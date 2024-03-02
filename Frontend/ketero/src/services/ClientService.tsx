

import axios from 'axios';

const apiUrl = 'https://ketero-web-dmow.vercel.app/api/v1/client';
export async function getClient(id: string): Promise<any> {
  try {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  } catch (e) {
    throw e;
  }
}