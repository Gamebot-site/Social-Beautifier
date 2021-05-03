// ==UserScript==
// @name         Social Beautifier
// @author       BlackThunder#4007
// @version      0.5
// @description  Improves the UI of social
// @match        *://*.krunker.io/social.html?p=profile*
// @downloadURL  https://raw.githubusercontent.com/Gamebot-site/Social-Beautifier/main/userscript.user.js
// @updateURL    https://raw.githubusercontent.com/Gamebot-site/Social-Beautifier/main/userscript.meta.js
// ==/UserScript==

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
  var startTimeInMs = Date.now();
  (function loopSearch() {
    if (document.querySelector(selector) != null) {
      callback();
      return;
    }
    else {
      setTimeout(function () {
        if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
          return;
        loopSearch();
      }, checkFrequencyInMs);
    }
  })();
}

function manipulate() {
var container = document.getElementsByClassName ("leftMidHolder").item(0);
var bottomContainer = document.getElementsByClassName ("leftBottomHolder").item(0);
var midRContainer = document.getElementsByClassName ("rightMidHolder").item(0);
var topRContainer = document.getElementsByClassName ("rightTopHolder").item(0);
var botRContainer = document.getElementsByClassName ("rightBottomHolder").item(0);
for(var x=0;x<=10;x+=1){
    var firstTargDivBT = botRContainer.childNodes[0];
    if(firstTargDivBT==undefined){break;}
    topRContainer.append(firstTargDivBT);
}
for(var v=0;v<=10;v+=1){
    var firstTargDivB = bottomContainer.childNodes[0];
    if(firstTargDivB==undefined){break;}
    botRContainer.insertBefore(firstTargDivB, botRContainer.childNodes[0]);
}

var mem_since = container.childNodes;
bottomContainer.insertBefore(mem_since.item(1), bottomContainer.childNodes[0]);
bottomContainer.insertBefore(mem_since.item(0), bottomContainer.childNodes[0]);
var socialFlag = document.getElementById ("socialFlag");
socialFlag.style.setProperty('position', 'static', 'important')
socialFlag.style.setProperty('top', '0px', 'important')
socialFlag.style.setProperty('right', '0px', 'important')
socialFlag.style.setProperty('margin-right', '10px', 'important')
bottomContainer.childNodes[1].style.setProperty('margin-right', '115px', 'important')
container = document.getElementsByClassName ("leftMidHolder").item(0);
try{var twitchUrl = midRContainer.childNodes[0].onclick.toString().split("/twitch.tv/")[1].split('"')[0];
var dateSpan = document.createElement('span')
dateSpan.innerHTML = twitchUrl+'  ';
dateSpan.style = "color:#6441a5;vertical-align:6px;"
midRContainer.insertBefore(dateSpan, midRContainer.childNodes[0]);}
catch(err){}

var xpbarText = document.getElementsByClassName("xpBarV").item(0);
var xpbartexts = xpbarText.innerText.split(" / ");
var new_xpbar = numberWithCommas(xpbartexts[0]) + " / " + numberWithCommas(xpbartexts[1]);
xpbarText.innerText = new_xpbar;


var follContainer = document.getElementsByClassName ("follL").item(0);


while(true){
    var firstTargDiv = getElementByXpath('//*[@id="rightProfile"]/div[1]/i[1]');
    if(firstTargDiv==undefined){break;}
    var styles = firstTargDiv.style.color;
    firstTargDiv.style = "margin-right:1px;font-size:32px;vertical-align:middle";
    firstTargDiv.style.color = styles;
    container.insertBefore(firstTargDiv, container.childNodes[0]);
}


container.insertBefore(socialFlag, container.childNodes[0]);

var Stats = document.getElementsByClassName ("pSt");
for(var xy=0; xy < Stats.length ;xy++){
var spans = Stats[xy].getElementsByTagName("strong").item(0);
spans.innerText = numberWithCommas(spans.innerText);
}
}
waitForElementToDisplay("#rightProfile > div.leftMidHolder > span",manipulate,1000,90000);

addGlobalStyle(".follCount{margin-right:10px;}.follL{font-size: 14px;}.pSt strong{-webkit-text-stroke: .025em rgba(51,51,51,0.50);font-weight: 100;color:rgb(255 255 255);text-shadow: 0px 0px 2px #000000, 0px 0px 5px #000000, 0px 0px 8px #000000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0px 0px 1px #000000;font-size:14px;letter-spacing: 1px;-webkit-font-smoothing: antialiased;}")
addGlobalStyle(".leftBottomHolder {top:90px;bottom:11px;}.pSt{background-image: linear-gradient(#b9b9b9, #757575);width: 140px;letter-spacing: 1px;margin-right: 0px;margin-left: 0px;border-radius: 0px;color: #ffce85;text-shadow:0px 0px 2px #000000, 0px 0px 5px #000000, 0px 0px 8px #000000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0px 0px 1px #000000 !important;}")
addGlobalStyle(".rightMidHolder{top:57%}.leftMidHolder{top: 50%;}.material-icons{vertical-align: middle;text-shadow: none;}#followBtn{text-shadow: none;}#giftBtn{text-shadow: none;}#tradeBtn{text-shadow: none;}#verifyBtn{text-shadow: none;}#searchPInput{text-shadow: none;}#reprtBtn{text-shadow: none;}#shareBtn{text-shadow: none;}#flagBtn{text-shadow: none;}* {text-shadow: 0 0 5px #00000087;}.scrollItemNew{border-radius: 10px;padding-bottom: 5px;box-shadow: 0 0px 20px 3px #000 !important;width: 1000px;}.profileNav{box-shadow: 0 0px 20px 3px #000 !important;width: 1020px;}.xpBar{width: 975px;border-radius: 20px;}#socialPic{filter: drop-shadow(0px 0px 5px #000);}.xpBarB{border-bottom-left-radius: 20px;border-top-left-radius: 20px;background-image: linear-gradient(to right, #ffce85, #fffb85);}.xpBarV{text-shadow:0px 0px 2px #000000, 0px 0px 5px #000000, 0px 0px 8px #000000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0px 0px 1px #000000;}")
addGlobalStyle("#postInput{text-shadow:none;}#postTime{text-shadow:none;}#postSubInfo{text-shadow:none;}.lName{text-shadow: 0 0 5px #00000087;}");
