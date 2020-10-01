document.querySelector("#inputdiv");
document.querySelector("#name").addEventListener("blur" , function(){
    document.querySelector("#inputdiv").innerHTML=document.querySelector("#name").value;
});
