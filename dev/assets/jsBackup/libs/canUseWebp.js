"use strict";
//Изначально в html все картинки должны быть в webp. А потом этот скрипт поменяет их на старые расширения если webp не поддерживается ос или браузером
//Картинки должны быть изначально в webp, иначе Google PageSpeed их не увидит, если их вставить после загрузки dom
exports.__esModule = true;
exports.cancelWebp = void 0;
//Определяем ОС
var OS = (function () {
    var platform = navigator.platform.toLowerCase(), iosPlatforms = ['iphone', 'ipad', 'ipod', 'ipod touch'];
    if (platform.includes('mac'))
        return 'MacOS';
    if (iosPlatforms.includes(platform))
        return 'iOS';
    if (platform.includes('win'))
        return 'Windows';
    if (/android/.test(navigator.userAgent.toLowerCase()))
        return 'Android';
    if (/linux/.test(platform))
        return 'Linux';
    return 'unknown';
})();
// Функция проверки поддержки браузером формата webp
var canUseWebp = function () {
    // Создаем элемент canvas
    var elem = document.createElement('canvas');
    // Приводим элемент к булеву типу
    if (!!(elem.getContext && elem.getContext('2d'))) {
        // Создаем изображение в формате webp, возвращаем индекс искомого элемента и сразу же проверяем его
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }
    // Иначе Webp не используем
    return false;
}();
// // Устанавливаем тэгу html класс webp или no-webp, чтобы в стилях ставить нужные картинки
var setClassToBody = (function () {
    document.documentElement;
    //Ставим webp класс только если браузер поддерживает и ОС не MacOS
    if (canUseWebp && OS != "MacOS") {
        document.documentElement.classList.add('webp');
        document.documentElement.classList.remove('no-webp');
    }
    else {
        document.documentElement.classList.add('no-webp');
        document.documentElement.classList.remove('webp');
    }
})();
// //Изначально в вёрстке все картинки в webp. В каждой подпапке webp-картинки в папке webp. Если браузер не поддерживает webp, то скрипт ставит тэгам img и image src и href на картинку на уровень выше и расширение ставит из атрибута data-ext
//функция будем менять директории файлов для тэгов на такие, чтоб без webp
// в attr будет установлена новый путь до картинки (jpg или png)
function iterateTags(tagsList, attr) {
    tagsList.forEach(function (item, index) {
        //item - это элемент img в ДОМе
        var dataSrc = item.getAttribute('data-src');
        var noExtReg = /[^.]*/; // даёт всё до точки
        var noExt = dataSrc.match(noExtReg)[0];
        console.log(noExt);
    });
}
//проверяем поддержку webp и меняем src на путь без webp, если бразуер не поддерживает webp
//все тэги, для которых будем менять источник изображения, если браузер НЕ поддерживает webp находятся в массиве selectors
function cancelWebp(selectorList) {
    if (selectorList === void 0) { selectorList = ['img']; }
    if (!canUseWebp || OS == 'MacOS' || document.documentElement.classList.contains('no-webp')) {
        selectorList.forEach(function (selector, index) {
            var elements = document.querySelectorAll("".concat(selector, "[data-src]")); //это сами элементыв ДОМе
            iterateTags(elements, 'data-src'); //ставим data-src, чтобы потом lazyLoad.js сработал
        });
        //если webp не поддерживается
    }
    else {
        console.log('canUseWebp!');
    }
}
exports.cancelWebp = cancelWebp;

//# sourceMappingURL=canUseWebp.js.map
