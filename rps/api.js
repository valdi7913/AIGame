import { backendURL } from '../config';
export async function performGetRequest(url) {
  try {
    const response = await fetch(backendURL + url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('GET request successful. Response:', data);
   
    return data;
  } catch (error) {
    console.error('Error during GET request:', error);
    throw error;
  }
}


export async function performPostRequest(url, payload) {
  try {
    const response = await fetch(backendURL+url, {
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
    console.log('POST request successful. Response:', data);

    return data;
  } catch (error) {
    console.error('Error during POST request:', error);
    throw error;
  }
}