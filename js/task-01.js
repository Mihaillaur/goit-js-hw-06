const categoriesList = document.getElementById("categories");
const categoriesItems = categoriesList.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(function(item){
    const categoriesTitle = item.querySelector("h2").textContent;
    const categoriesQuantity = item.querySelectorAll("li").length;
    console.log(`Category: ${categoriesTitle}`);
    console.log(`Elements: ${categoriesQuantity}`);
});