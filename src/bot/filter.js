//chooses only articles not already seen & posted in the last 10min
export const selectNewArticles = (articles, processedArticleIds, filterWords = []) => {
    const items = Array.isArray(articles.items) ? articles.items : [];
    const filteredArticles = items.filter(({ photo, id, title }) => 
        photo && 
        photo.high_resolution.timestamp * 1000 > Date.now() - 60000 && 
        !processedArticleIds.has(id) &&
        !filterWords.some(word => title.toLowerCase().includes(word))
    );
    return filteredArticles;
};