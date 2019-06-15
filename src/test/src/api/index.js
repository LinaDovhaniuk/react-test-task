const BASE_URL = 'http://localhost:3000';

export const get = async (endPoint) => {
    const resp = await fetch ( `${BASE_URL}/${endPoint}`);
    return await resp.json();
};

export const post = async (endPoint) => {
    const resp = await fetch ( `${BASE_URL}/${endPoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await resp.json();
};

