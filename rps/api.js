import { backendURL } from '../config';
export async function performGetRequest(url) {
  try {
    const REQUEST_URL = backendURL + url;
    const response = await fetch(REQUEST_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
   
    return data;
  } catch (error) {
    console.error('Error during GET request:', error);
    throw error;
  }
}


export async function performPostRequest(url, payload) {
  try {
    const REQUEST_URL = backendURL + url;
    const response = await fetch(REQUEST_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error during POST request:', error);
    throw error;
  }
}