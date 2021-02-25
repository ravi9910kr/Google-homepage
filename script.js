const bars = document.getElementById("cir");
const appMenu = document.getElementById("app-menu");
bars.addEventListener("click", ()=>{
  if(appMenu.classList.contains("hide")){
    appMenu.classList.remove("hide");
  }else{
    appMenu.classList.add("hide")
  }
});