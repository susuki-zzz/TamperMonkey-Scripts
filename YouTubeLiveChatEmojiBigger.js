// ==UserScript==
// @name         YouTubeLiveChatEmojiBigger
// @namespace    https://github.com/susuki-zzz/TamperMonkey-Scripts/
// @version      2025-12-16
// @description  YouTubeの絵文字ピッカーの絵文字をマウスオーバー時に大きくします。併せて解像度も上げています。
// @author       Susuki Mochiduki
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

const defaultSize = 24;
const defaultPadding = 4;
const scale = 2.0; // Change the second size string if you like. / お好みでサイズ指定を変更してください

GM_addStyle(`
#emoji
{
    contain: none !important;
}
img.yt-emoji-picker-category-renderer
{
    height: ${defaultSize}px;
    width:  ${defaultSize}px;
    overflow: visible !important;
    position: relative;
    display: inline-block;
    transform-origin: center;
    transition: transform .1s ease;
}
img.yt-emoji-picker-category-renderer:hover
{
    z-index: 999999;
    margin: ${defaultPadding}px;
    padding: 0px;
    transform: scale(${scale});
}
`);

(function() {
    'use strict';
    const target = '=w24-h24-c-k-nd';
    const replacement = `=w${Math.floor(scale*24)}-h${Math.floor(scale*24)}-c-k-nd`;
    const upgrade = () => {
        document.querySelectorAll('img.yt-emoji-picker-category-renderer').forEach(img => {
            if (img.src && img.src.includes(target)) {
                img.src = img.src.replace(target, replacement);
            }
        });
    };
    setInterval(upgrade, 1000);
})();
