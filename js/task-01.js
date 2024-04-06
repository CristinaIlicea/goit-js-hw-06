const elem = document.getElementById("categories");
console.log("Number of categories:", elem.childElementCount);

const mainEl = document.getElementsByClassName("item");
const headingsEls = mainEl[0].getElementsByTagName("h2");
const liEls = mainEl[0].getElementsByTagName("li");
console.log("Category:", headingsEls);
console.log("Elements", liEls.length);