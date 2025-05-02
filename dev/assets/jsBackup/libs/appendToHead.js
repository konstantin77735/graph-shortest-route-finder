"use strict";
exports.__esModule = true;
exports.appendToHead = void 0;
function appendToHead(type, href) {
    if (type == 'css') {
        var css = document.createElement('link');
        css.rel = "stylesheet";
        css.href = href;
        document.head.appendChild(css);
    }
    if (type == 'js' || type == 'javascript') {
        var js = document.createElement('script');
        js.src = href;
        document.head.appendChild(js);
    }
}
exports.appendToHead = appendToHead;

//# sourceMappingURL=appendToHead.js.map
