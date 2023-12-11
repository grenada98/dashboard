export const fetchData = async (category, skip) => {
    if(!category) return;
    const url = `https://dummyjson.com/${category.toLowerCase()}?limit=8&skip=${skip}`;
    try {
        const response = await fetch(url);
        const json = await response.json();
        return {data: [...json[category.toLowerCase()]], total: json.total}

    } catch (error) {
        console.log("error", error);
    }
    return {}
};