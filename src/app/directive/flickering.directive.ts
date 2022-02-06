import { AfterViewInit, Directive, Input, NgZone, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[flickeringTime]'
})
export class FlickeringDirective implements AfterViewInit {
    @Input()
    public set flickeringTime(flickeringTime: number) {
        this._flickeringTime = flickeringTime;
    }

    private _flickeringTime!: number;
    constructor(
        private template: TemplateRef<any>,
        private container: ViewContainerRef,
        private ngZone: NgZone
    ) { }


    public ngAfterViewInit(): void {
        let isVisible = true;
        this.ngZone.runOutsideAngular(() => {
            /**Директива с ассинхоронщиной - для того что бы показать как работает ngZone */
            setInterval(() => {
                if (isVisible) {
                    this.container.clear()

                } else {
                    this.container.createEmbeddedView(this.template)
                }
                isVisible = !isVisible

            }, this._flickeringTime)
        })
    }
}