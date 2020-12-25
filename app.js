var input = document.querySelector("#input");
var button = document.querySelector("#button");
var output = document.querySelector("#output");
var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?";

button.addEventListener("click", clickHandler);

function clickHandler(){
fetch(getApiWithParam()).then(response => response.json()).then(json => {
    var outputText = json.contents.translated;
    output.innerText = outputText;
})
}

function getApiWithParam(){
    return url+"text="+input.value;
}
