const categoriesList = document.querySelectorAll("#categories");

console.log(`Number of categories: ${categories.length}`);

categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;

  console.log(`Category: ${categoryName}`);

  const categoryElements = category.querySelectorAll("li").length;
 
  console.log(`Elements: ${categoryElements}`);
});

 
// console.log(categoriesList)
