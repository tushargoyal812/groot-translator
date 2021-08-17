var translate=document.querySelector("#btn-translate");
var textarea=document.querySelector("#btn-textarea");
var output=document.querySelector("#btn-output");
//var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL="https://api.funtranslations.com/translate/sith.json"


function getTranslationURL(text)
{
    return  serverURL + "?" + "text=" + text;
}

function errorHandler(error)
{
    console.log("error occured",error);
    alert("somthing wrong with server do after sometime")
}

function clickHandler()
 {
     var inputText=textarea.value;
     fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText=json.contents.translated;
        output.innerText=translatedText;
    }) 
    .catch(errorHandler)
};


translate.addEventListener("click",clickHandler)