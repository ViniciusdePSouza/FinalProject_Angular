import { NgModule } from '@angular/core';

//Components
import { InputFormComponent } from './input-form/input-form.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';

//Modules
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule, ActivatedRoute, ParamMap } from '@angular/router';

@NgModule({
    declarations: [
        InputFormComponent,
        ButtonComponent,
        HeaderComponent,
        CardComponent,
    ],
    imports: [
        TranslateModule.forChild(),
        RouterModule
    ],
    providers: [],
    exports: [
        InputFormComponent,
        ButtonComponent,
        // TranslateModule,
        HeaderComponent,
        CardComponent
    ]
})
export class SharedModule { }
