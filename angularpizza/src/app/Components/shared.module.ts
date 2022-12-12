import { NgModule } from '@angular/core';

//Components
import { InputFormComponent } from './input-form/input-form.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';

//Modules
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        InputFormComponent,
        ButtonComponent,
        HeaderComponent
    ],
    imports: [
        TranslateModule
    ],
    providers: [],
    exports: [
        InputFormComponent,
        ButtonComponent,
        TranslateModule,
        HeaderComponent
    ]
})
export class SharedModule { }
