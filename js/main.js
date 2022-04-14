/* Set the width of the side navigation to 250px */
function openNav() {
  closeLoginNav();
  document.getElementById("menuCategory").style.width = "550px";
  const viewAllButton = document.getElementById("viewAllButton");
  viewAllButton.href = "bicicletas/vertudo.html"
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("menuCategory").style.width = "0";
}
function onClickCategory(id){
  const collection = document.getElementsByClassName("menuCategoryActive");
  collection[0].classList.remove("menuCategoryActive");
  document.getElementById(id).classList.add("menuCategoryActive");
  setUpCategoryLinks(id);
}
function setUpCategoryLinks(id) {
  const viewAllButton = document.getElementById("viewAllButton");
  if(id === "bikeCategory"){
    viewAllButton.href = "bicicletas/vertudo.html"
  } else if (id === "tiresCategory"){
    viewAllButton.href = "bicicletas/vertudo.html"
  } else {

  }
}
function openLoginNav() {
  closeNav();
  document.getElementById("loginNav").style.width = "550px";
}
function closeLoginNav() {
  document.getElementById("loginNav").style.width = "0";
}
