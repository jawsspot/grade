import { ChangeDetectionStrategy } from '@angular/compiler/src/compiler_facade_interface';
import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { fromEvent } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	/**Геттер для Того что бы показать как работает ngzone */
	public get title() {
		return this._title;
	}
	private _title: string = 'hello';
	public form: FormGroup;
	constructor(private fb: FormBuilder, private ngZone: NgZone) {
		this.form = this.fb.group({
			name: [''],
		});
	}
}
