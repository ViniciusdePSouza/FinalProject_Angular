import { NgModule } from '@angular/core';

//Components
import { InputFormComponent } from './input-form/input-form.component';
import { ButtonComponent } from './button/button.component';

//Modules
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        InputFormComponent,
        ButtonComponent
    ],
    imports: [
        TranslateModule
    ],
    providers: [],
    exports: [
        InputFormComponent,
        ButtonComponent,
        TranslateModule
    ]
})
export class SharedModule { }
