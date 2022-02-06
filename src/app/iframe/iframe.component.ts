import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";

@Component({
    selector: 'frame-component',
    templateUrl: './iframe.component.html'
})
export class IframeComponent {
    @ViewChild('frame', { static: true })
    public frameContainer!: ElementRef;

    private frame!: any;

    constructor(private renderer: Renderer2) { }

    public loadIframe(): void {
        this.frame = this.renderer.createElement('iframe');
        this.renderer.setAttribute(this.frame, 'src', 'https://www.youtube.com/embed/qhx8QCDZ-cU');
        this.renderer.setAttribute(this.frame, 'width', '768px');
        this.renderer.setAttribute(this.frame, 'height', '540px');
        this.renderer.appendChild(this.frameContainer.nativeElement, this.frame)

        this.frame.onload = function () {
            console.log('iframe загружен');

        }
        /**Слушать iframe вот так, но в моём примере он не ответит, так что посмотри стендап*/
        window.onmessage = function (event: MessageEvent) {
            console.log('Reply received!');
        };

    }

    /**Говорить с iframe вот так */
    public sendMessage(): void {
        if (!this.frame) {
            return;
        }
        this.frame.contentWindow.postMessage('message', '*')
    }


}