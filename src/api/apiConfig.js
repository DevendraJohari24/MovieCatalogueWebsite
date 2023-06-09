const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '14ad16cb783a4de67e759f449c6ac960',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;