const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

  const array = document.createElement("li");
  let arrayList = [];
  for (const ingredient of ingredients){
    arrayList.push(document.createElement("li"));
  };

  const textEl = document.querySelector("li");
  console.log(textEl.textContent);

  document.getElementsByTagName("li").classList.add("item")

  var ul = document.getElementById("ingredients");
  ul.appendChild("li");

  console.log(ingredients);



