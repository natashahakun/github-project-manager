class ApiKeyService {
    set = apiKey => sessionStorage.setItem('gh-api-key', apiKey);
    get = () => sessionStorage.getItem('gh-api-key');
}

export default new ApiKeyService();
