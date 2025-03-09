const refs = {
    items: document.querySelectorAll("li.item"),
};



// Number of categories in ul#categories
console.log(`Number of categories: ${refs.items.length}`)



refs.items.forEach(item => {
    // h2 text
    const heading = item.firstElementChild.textContent;
    console.log(`Category: ${heading}`);

    // Number of categories in each li.item
    const innerListCount = item.lastElementChild.children.length;
    console.log(`Elements: ${innerListCount}`);
});