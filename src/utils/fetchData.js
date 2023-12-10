export const fetchData = async (category) => {
    if(!category) return;
    const url = `https://dummyjson.com/${category.toLowerCase()}`;
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log([...json[category.toLowerCase()]])
        return [...json[category.toLowerCase()]]

    } catch (error) {
        console.log("error", error);
    }
    return {}
};