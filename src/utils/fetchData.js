export const fetchData = async (category) => {
    if(!category) return;
    const url = `https://dummyjson.com/${category.toLowerCase()}`;
    try {
        const response = await fetch(url);
        const json = await response.json();
        return [...json[category.toLowerCase()]]

    } catch (error) {
        console.log("error", error);
    }
    return {}
};