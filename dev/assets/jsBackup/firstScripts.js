"use strict";
exports.__esModule = true;
var burger_ts_1 = require("./libs/burger.ts");
// import { cancelWebp } from './libs/canUseWebp.ts';
// import { lazyLoad } from './libs/lazyLoad.ts';
//import {myFunc} from './modules/myFunc.js';
//то что здесь импортируется, в этих файлах перед ними поставлен export
//но эти импортированные переменные, функции и т.д. доступны ТОЛЬКО ЗДЕСЬ. в html они недоступны
document.addEventListener('DOMContentLoaded', function () {
    /* это нужно чтобы сделать эти функции видимыми в глобальной обл переменных в самом файле html
   (в его инлайновый тэгах скрипта), а также
   когда php рендерит элементы с onclick=toggleSubfolders, он их рендерит в html файл, поэтому
   функции должны существовать в пространстве имён самого html.
 
   экспорт из отдельных файлов и импорт этих функций сюда НЕ отправляет функции в обл переменных в html, в html эти функции недоступны.
   поэтому надо их привоить в Window, а в html/php вызывать новый функции (myToggleSubfolders etc)
 
  window.myImportedFunc = function(elem) {
     myFunc(elem);
   }
   window.showAudioFiles = function(elem) {
     showAudioFiles(elem);
   }
 */
    //чтобы transition не отрабатывал сначала (это я про то как элементы стоят на странице, а потом плавно исчезают из-за того что у них в css transition проставлено:
    //вот как с этим бороться: в css не установлено transition: 
    //а ставится оно в js после события DomContentLoaded:
    //такимо бразом оно не будет исчезать при первой загрузке, но будет вести себя правильно дальше
    //и лучше не использовать display: none и visibility: hidden, вместо них лучше поставить большой z-index: -9
    //отключаем перезагрузку стр на F5
    window.addEventListener('keydown', function (e) {
        //отключаем перезагрузку стр на F5
        if (e.keyCode == 116) {
            console.log(e.key);
            e.preventDefault();
            return false;
        }
    });
    //инициализация Бургер Меню
    var menuToggler1 = new burger_ts_1.MenuToggler({
        menuTriggerSelector: '.burger',
        menuSelector: '.mobile-menu',
        transitionTime: '0.5s',
        transitionType: 'linear',
        menuDisplay: 'flex',
        type: 'slide',
        slideBegin: 'translate(270px, -200px)',
        slideEnd: 'translate(0px, -200px)'
    });
    //проверяем поддержку WEBP и меняем src у img на значенеи из data-ext, если не поддерживается WEBP
    //отменяем webp, если браузер не поддерживает
    cancelWebp();
    //подключаем ленивую загрузку
    lazyLoad();
    function add() {
    }
});

//# sourceMappingURL=firstScripts.js.map
