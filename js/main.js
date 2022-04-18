/* Set the width of the side navigation to 250px */
function openNav() {
  closeLoginNav();
  document.getElementById("menuCategory").style.width = "450px";
  const viewAllButton = document.getElementById("viewAllButton");
  viewAllButton.href = "bicicletas/vertudo.html"
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("menuCategory").style.width = "0";
}
function onClickCategory(id){
  setUpCategoryLinks(id);
}
function setUpCategoryLinks(id) {
  const viewAllButton = document.getElementById("viewAllButton");
  switch (id) {
    case "bikeCategory":
      viewAllButton.href = "/bicicletas/ver-tudo.html"
      break;
    case "tiresCategory":
      viewAllButton.href = "/pneus/ver-tudo.html"
      break;
  }
}
function openLoginNav() {
  closeNav();
  document.getElementById("loginNav").style.width = "550px";
}
function closeLoginNav() {
  document.getElementById("loginNav").style.width = "0";
}
