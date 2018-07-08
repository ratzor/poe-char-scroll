// ==UserScript==
// @name         POE Scroll To Current Char
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Scrolls the character list to currently sellected character
// @author       Ratzor
// @match        https://www.pathofexile.com/account/view-profile/*/characters
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

waitForKeyElements ("#profile-inventory-controls .characters", scrollToChar);

function scrollToChar(){
    document.querySelector('#profile-inventory-controls .character.active').scrollIntoView();
    window.scrollTo(0,0);
}