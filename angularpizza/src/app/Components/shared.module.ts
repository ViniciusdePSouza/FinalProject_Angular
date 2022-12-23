import { NgModule } from '@angular/core';

//Components
import { InputFormComponent } from './input-form/input-form.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';



//Modules
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        InputFormComponent,
        ButtonComponent,
        HeaderComponent,
        CardComponent,

    ],
    imports: [
        TranslateModule.forChild(),
        RouterModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    exports: [
        InputFormComponent,
        ButtonComponent,
        // TranslateModule,
        HeaderComponent,
        CardComponent,

    ]
})
export class SharedModule { }
