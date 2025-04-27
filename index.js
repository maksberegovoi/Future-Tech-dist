var c = Object.defineProperty;
var u = (o, t, s) =>
    t in o
        ? c(o, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
        : (o[t] = s);
var n = (o, t, s) => u(o, typeof t != 'symbol' ? t + '' : t, s);
(function () {
    const t = document.createElement('link').relList;
    if (t && t.supports && t.supports('modulepreload')) return;
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
        l(e);
    new MutationObserver((e) => {
        for (const r of e)
            if (r.type === 'childList')
                for (const i of r.addedNodes)
                    i.tagName === 'LINK' && i.rel === 'modulepreload' && l(i);
    }).observe(document, { childList: !0, subtree: !0 });
    function s(e) {
        const r = {};
        return (
            e.integrity && (r.integrity = e.integrity),
            e.referrerPolicy && (r.referrerPolicy = e.referrerPolicy),
            e.crossOrigin === 'use-credentials'
                ? (r.credentials = 'include')
                : e.crossOrigin === 'anonymous'
                  ? (r.credentials = 'omit')
                  : (r.credentials = 'same-origin'),
            r
        );
    }
    function l(e) {
        if (e.ep) return;
        e.ep = !0;
        const r = s(e);
        fetch(e.href, r);
    }
})();
class a {
    constructor() {
        n(this, 'selectors', {
            root: '[data-js-header]',
            overlay: '[data-js-header-overlay]',
            burgerButtonOpen: '[data-js-header-burger-button-open]',
            burgerButtonClose: '[data-js-header-burger-button-close]'
        });
        n(this, 'stateClasses', { isOpen: 'is-open', isLock: 'is-lock' });
        n(this, 'onBurgerButtonClick', () => {
            this.overlayElement.classList.toggle(this.stateClasses.isOpen),
                this.htmlTag.classList.toggle(this.stateClasses.isLock);
        });
        (this.rootElement = document.querySelector(this.selectors.root)),
            (this.overlayElement = this.rootElement.querySelector(
                this.selectors.overlay
            )),
            (this.burgerButtonOpenElement = this.rootElement.querySelector(
                this.selectors.burgerButtonOpen
            )),
            (this.burgerButtonCloseElement = this.rootElement.querySelector(
                this.selectors.burgerButtonClose
            )),
            (this.htmlTag = document.documentElement),
            this.bindEvents();
    }
    bindEvents() {
        this.burgerButtonOpenElement.addEventListener(
            'click',
            this.onBurgerButtonClick
        ),
            this.burgerButtonCloseElement.addEventListener(
                'click',
                this.onBurgerButtonClick
            );
    }
}
const d = () => {
    document.documentElement.style.setProperty(
        '--scrollbar-width',
        `${window.innerWidth - document.documentElement.clientWidth}px`
    );
};
new a();
d();
//# sourceMappingURL=index.js.map
