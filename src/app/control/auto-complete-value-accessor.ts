import { AfterViewInit, ChangeDetectorRef, Component, Directive, ElementRef, forwardRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ValidatorFn } from '@angular/forms';



@Component({
    selector: 'counter-control',
    templateUrl: './auto-complete-value-accessor.html',
    /**ControlValueAccessor должен рассматриваться как кастомный контрол */
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AutoCompleteControlComponent),
        multi: true
    }]

})
export class AutoCompleteControlComponent implements ControlValueAccessor, AfterViewInit {
    @ViewChild('input', { static: true })
    public input!: ElementRef;

    @ViewChild('listRef', { static: true })
    public listNode!: ElementRef;

    public value!: string;

    public itemList: Array<string> = [
        '1',
        '2',
        '3',
        '4',
        '5',
    ];

    private onChange = (value: any) => { };
    private onTouched = () => { };

    constructor(private renderer: Renderer2) {

    }

    public ngAfterViewInit(): void {
        this.hidden();
    }

    public open() {
        this.show()
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => {}): void {
        this.onTouched = fn;
    }

    writeValue(outsideValue: string) {
        // получить из Forms API
        this.value = outsideValue;
    }

    updateValue(insideValue: string) {
        this.value = insideValue; // html
        this.renderer.setAttribute(this.input.nativeElement, 'value', insideValue)
        this.hidden();
        this.onChange(insideValue); // уведомить Forms API
        this.onTouched();
    }
    private show() {
        this.renderer.setAttribute(this.input.nativeElement, 'readonly', 'true')
        this.renderer.setStyle(this.listNode.nativeElement, 'display', 'block')
    }
    private hidden() {
        this.renderer.setAttribute(this.input.nativeElement, 'readonly', 'false')
        this.renderer.setStyle(this.listNode.nativeElement, 'display', 'none')
    }
}
