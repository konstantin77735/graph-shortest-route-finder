"use strict";
exports.__esModule = true;
exports.MenuToggler = void 0;
//Класс меню бургера
var MenuToggler = /** @class */ (function () {
    function MenuToggler(data) {
        var _a, _b, _c, _d, _e, _f;
        this.type = 'appear';
        this.transitionTime = '.25s';
        this.transitionType = '.ease';
        this.menuDisplay = 'block';
        this.slideBegin = 'translate(-100%, 0px)';
        this.slideEnd = 'translate(0px, 0px)';
        this.menuTrigger = null;
        this.menu = null;
        this.menuTriggerSelector = data.menuTriggerSelector;
        this.menuSelector = data.menuSelector;
        this.type = (_a = data.type) !== null && _a !== void 0 ? _a : this.type; //type of Apperance
        this.transitionTime = (_b = data.transitionTime) !== null && _b !== void 0 ? _b : this.transitionTime;
        this.transitionType = (_c = data.transitionType) !== null && _c !== void 0 ? _c : this.transitionType;
        this.menuDisplay = (_d = data.menuDisplay) !== null && _d !== void 0 ? _d : this.menuDisplay;
        this.slideBegin = (_e = data.slideBegin) !== null && _e !== void 0 ? _e : this.slideBegin; //Begin coordinate (x, y). Обязательно добавлять px к любому числу
        this.slideEnd = (_f = data.slideEnd) !== null && _f !== void 0 ? _f : this.slideEnd; //Begin coordinate (x, y). Обязательно добавлять px к любому числу
        this.menuTrigger = document.querySelector(this.menuTriggerSelector);
        this.menu = document.querySelector(this.menuSelector);
        this.isChanging = false;
        this.state = 'hide';
        this.init();
    }
    MenuToggler.prototype.init = function () {
        var _this = this;
        this.menuTrigger.addEventListener('click', this.toggle.bind(this));
        if (this.type == 'appear') {
            // add first styles, makes elem invisible and untouchuble
            //this.menu.style.transition = 'none';
            this.menu.style.opacity = 0;
            this.menu.style.display = 'none';
            //                this.menu.style.cssText = `-webkit-transition: opacity ${this.transitionTime} ${this.transitionType} ${this.transitionTime}, height 0s ${this.transitionType} 0s`;
            //                this.menu.style.cssText = `-o-transition: opacity ${this.transitionTime} ${this.transitionType} ${this.transitionTime}, height 0s ${this.transitionType} 0s`;
            this.menu.addEventListener('transitionend', function (e) {
                if (e.target == _this.menu) {
                    _this.isChanging = false;
                    if (_this.state == 'hide') {
                        _this.menu.style.display = 'none';
                    }
                }
            });
        }
        if (this.type == 'slide') {
            document.body.style.overflowX = 'hidden';
            this.setVendorStyleProperty(this.menu, 'transform', this.slideBegin);
            setTimeout(function () {
                _this.setVendorStyleProperty(_this.menu, 'transition', "transform ".concat(_this.transitionTime, " ").concat(_this.transitionType));
            }, 1);
        }
    };
    MenuToggler.prototype.setVendorStyleProperty = function (element, property, value) {
        element.style["webkit" + property] = value;
        element.style["moz" + property] = value;
        element.style["ms" + property] = value;
        element.style["o" + property] = value;
        element.style[property] = value;
    };
    MenuToggler.prototype.toggle = function () {
        var _this = this;
        if (this.type == 'appear' && !this.isChanging) {
            if (this.menu.style.opacity == '1') {
                this.setVendorStyleProperty(this.menu, 'transition', "opacity ".concat(this.transitionTime, " ").concat(this.transitionType));
                if (this.menuTrigger.classList.contains('burger')) {
                    this.menuTrigger.classList.remove('burger_close');
                }
                this.state = 'hide';
                this.menu.style.opacity = '0';
                this.isChanging = true;
                return;
            }
            if (this.menu.style.opacity == '0') {
                if (this.menuTrigger.classList.contains('burger')) {
                    this.menuTrigger.classList.add('burger_close');
                }
                this.state = 'show';
                this.menu.style.display = this.menuDisplay;
                setTimeout(function () {
                    _this.setVendorStyleProperty(_this.menu, 'transition', "opacity ".concat(_this.transitionTime, " ").concat(_this.transitionType));
                    _this.menu.style.height = 'initial';
                    _this.menu.style.opacity = '1';
                    _this.isChanging = true;
                }, 1);
                return;
            }
        }
        if (this.type == 'slide' && !this.isChanging) {
            if (this.menu.style.transform == this.slideBegin) {
                if (this.menuTrigger.classList.contains('burger')) {
                    this.menuTrigger.classList.add('burger_close');
                }
                this.setVendorStyleProperty(this.menu, 'transform', this.slideEnd);
                this.menu.style.transform = this.slideEnd;
                console.log(this.menu);
                console.log(this.menu.style.transform);
            }
            else {
                if (this.menuTrigger.classList.contains('burger')) {
                    this.menuTrigger.classList.remove('burger_close');
                }
                this.setVendorStyleProperty(this.menu, 'transform', this.slideBegin);
                this.menu.style.transform = this.slideBegin;
                console.log(this.menu);
                console.log(this.menu.style.transform);
            }
        }
    };
    return MenuToggler;
}());
exports.MenuToggler = MenuToggler;

//# sourceMappingURL=burger.js.map
