/**
 * Created by gillbeits on 18.03.16.
 */
/// <reference path="../../typings/browser.d.ts"/>
module Main {
    export class xsMenu {
        private menuBtn: HTMLElement;
        private menu: HTMLElement;

        constructor(menuBtn: HTMLElement) {
            this.menuBtn = menuBtn;
            this.menu = document.querySelector('[rel="' + menuBtn.id + '"]') as HTMLElement;
            $(this.menuBtn).click(() => {
                $(this.menu).show();
            });
            $('.closeBtn', this.menu).click(() => {
                $(this.menu).hide();
            });
            $(this.menu).click(() => {
                $(this.menu).hide();
            });
        }
    }
}
