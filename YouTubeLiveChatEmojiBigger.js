// ==UserScript==
// @name         YouTubeLiveChatEmojiBigger
// @namespace    https://github.com/susuki-zzz/TamperMonkey-Scripts/
// @version      2025-12-15
// @description  Makes the emoji picker bigger in YouTube Live Chat (PC). / YouTubeライブ（PC）のチャットで絵文字選択を大きくして見やすくします。雑に選択して1秒ごとに置換しています。
// @author       Susuki Mochiduki
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const target = '=w24-h24-c-k-nd';
    // Change the second size string if you like. / お好みでサイズ指定を変更してください
    const replacement = '=w40-h40-c-k-nd';
    const upgrade = () => {
        document.querySelectorAll('img').forEach(img => {
            if (img.src && img.src.includes(target)) {
                img.src = img.src.replace(target, replacement);
            }
        });
    };
    setInterval(upgrade, 1000);
})();
