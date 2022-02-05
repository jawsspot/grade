import { AfterViewInit, Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[flickering]'
})
export class FlickeringDirective implements AfterViewInit {
    @Input()
    public set delayRendering(delayTime: number) {
        this.delayTime = delayTime;
    }

    private delayTime!: number;
    constructor(
        private template: TemplateRef<any>,
        private container: ViewContainerRef
    ) { }


    ngAfterViewInit(): void {
        let isVisible = true;
        setInterval(() => {
            if (isVisible) {
                this.container.clear()

            } else {
                this.container.createEmbeddedView(this.template)
            }
            isVisible = !isVisible

        }, this.delayTime)
    }
}