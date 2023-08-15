const ulCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${ulCategories.length}`);


ulCategories.forEach(function (category) {
    const nameCateg = category.firstElementChild.textContent;
    const ulElem = category.lastElementChild;
    const elements = ulElem.children;
    console.log(`Category: ${nameCateg}`);
    console.log(`Elements: ${elements.length}`);
    });
