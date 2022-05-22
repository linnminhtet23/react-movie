const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'ee2b8ebf91b89a25e821f68c580e6b4c',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;