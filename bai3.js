function onclickso0(){
    document.getElementById("inputso").value = document.getElementById("inputso").value+document.getElementById("0").value;
}
function onclickso1(){
    document.getElementById("inputso").value = document.getElementById("inputso").value+document.getElementById("1").value;
}
function onclickso2(){
    document.getElementById("inputso").value = document.getElementById("inputso").value+document.getElementById("2").value;
}
function onclickso3(){
    document.getElementById("inputso").value = document.getElementById("inputso").value+document.getElementById("3").value;
}
function onclickso4(){
    document.getElementById("inputso").value = document.getElementById("inputso").value+document.getElementById("4").value;
}
function onclickso5(){
    document.getElementById("inputso").value = document.getElementById("inputso").value+document.getElementById("5").value;
}
function onclickso6(){
    document.getElementById("inputso").value = document.getElementById("inputso").value+document.getElementById("6").value;
}
function onclickso7(){
    document.getElementById("inputso").value = document.getElementById("inputso").value+document.getElementById("7").value;
}
function onclickso8(){
    document.getElementById("inputso").value = document.getElementById("inputso").value+document.getElementById("8").value;
}
function onclickso9(){
    document.getElementById("inputso").value = document.getElementById("inputso").value+document.getElementById("9").value;
}
function onclickC(){
    document.getElementById("inputso").value=""
}
function cong(){
    document.getElementById("temp").value = document.getElementById("inputso").value;
    document.getElementById("inputso").value ="";
    document.getElementById("=").removeEventListener("click",ketquachia)
    document.getElementById("=").removeEventListener("click",ketquanhan)
    document.getElementById("=").removeEventListener("click",ketquatru)
    document.getElementById("=").addEventListener("click",ketquacong)
}
function ketquacong(){
    document.getElementById("inputso").value=Number(document.getElementById("temp").value)+Number(document.getElementById("inputso").value)
}
function tru(){
    document.getElementById("temp").value = document.getElementById("inputso").value;
    document.getElementById("inputso").value ="";
    document.getElementById("=").removeEventListener("click",ketquachia)
    document.getElementById("=").removeEventListener("click",ketquanhan)
    document.getElementById("=").removeEventListener("click",ketquacong)
    document.getElementById("=").addEventListener("click",ketquatru)
}
function ketquatru(){
    document.getElementById("inputso").value=Number(document.getElementById("temp").value)-Number(document.getElementById("inputso").value)
}
function nhan(){
    document.getElementById("temp").value = document.getElementById("inputso").value;
    document.getElementById("inputso").value ="";
    document.getElementById("=").removeEventListener("click",ketquachia)
    document.getElementById("=").removeEventListener("click",ketquatru)
    document.getElementById("=").removeEventListener("click",ketquacong)
    document.getElementById("=").addEventListener("click",ketquanhan)
}
function ketquanhan(){
    document.getElementById("inputso").value=Number(document.getElementById("temp").value)*Number(document.getElementById("inputso").value)
}
function chia(){
    document.getElementById("temp").value = document.getElementById("inputso").value;
    document.getElementById("inputso").value ="";
    document.getElementById("=").removeEventListener("click",ketquanhan)
    document.getElementById("=").removeEventListener("click",ketquatru)
    document.getElementById("=").removeEventListener("click",ketquacong)
    document.getElementById("=").addEventListener("click",ketquachia)
}
function ketquachia(){
    document.getElementById("inputso").value=Number(document.getElementById("temp").value)/Number(document.getElementById("inputso").value)
}