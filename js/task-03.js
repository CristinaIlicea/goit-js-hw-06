const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];






  var container = document.getElementById('imageContainer');

  const list = document.querySelector(".gallery");
  images.forEach((image) => {
    let img = document.createElement("img");
    img.setAttribute("class", "picture");
    img.setAttribute("name", image.alt);
    img.setAttribute("src", image.url);
    list.insertAdjacentHTML("beforeend", "<li></li>", document.getElementsByClassName("picture"));
  });