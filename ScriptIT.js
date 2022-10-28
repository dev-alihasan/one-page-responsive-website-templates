var link = document.querySelector("link[rel~='icon']");
if (!link) {
  link = document.createElement("link");
  link.rel = "icon";
  document.getElementsByTagName("head")[0].appendChild(link);
}
link.href = "https://i.postimg.cc/76wFFgTV/adokoklogo.png";
/*by ali hasan*/
function menuBtnFunction(menuBtn) {
  menuBtn.classList.toggle("active");
  $(".Mainmeu").toggleClass("active");
  $(".Mainmeu a").toggleClass("active");
}
