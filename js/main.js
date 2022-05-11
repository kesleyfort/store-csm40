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
function mascaraCpf(i){

  var v = i.value;

  if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
    i.value = v.substring(0, v.length-1);
    return;
  }

  i.setAttribute("maxlength", "14");
  if (v.length === 3 || v.length === 7) i.value += ".";
  if (v.length === 11) i.value += "-";

}
function mascaraCep(i){

  var v = i.value;

  if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
    i.value = v.substring(0, v.length-1);
    return;
  }

  i.setAttribute("maxlength", "10");
  if (v.length === 2) i.value += ".";
  if (v.length === 6) i.value += "-";

}

