document.querySelector("hide").addEventListener("click",()=> toggle("hide"));
document.querySelector("show").addEventListener("click",()=> toggle("show"));
function toggle(x){
    if (x=="hide"){
        document.querySelector("#texte").style.display="none";
    }
    else if (x=="show"){
        document.querySelector("#texte").style.display="block";
    }
}