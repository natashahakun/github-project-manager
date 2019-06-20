export const githubApiService = async (path, apiKey) => {
    const url = `https://api.github.com/${path}`;
    const headers = new Headers();
    headers.append('Authorization', `token ${apiKey}`)
    const response = await fetch(url, {
        headers: headers
    });

    const body = await response.json();
    if (response.status !== 200) {
        throw new Error(body.message)
    }

    return body;
};
