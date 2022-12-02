import { NgModule } from '@angular/core';

//Components
import { InputFormComponent } from './input-form/input-form.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
    declarations: [
        InputFormComponent,
        ButtonComponent
    ],
    imports: [],
    providers: [],
    exports: [
        InputFormComponent,
        ButtonComponent
    ]
})
export class SharedModule { }
