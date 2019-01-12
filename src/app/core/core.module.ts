import {
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    exports: [
        MatToolbarModule,
        MatCardModule,
        MatInputModule,
        MatCheckboxModule
    ]
})
export class CoreModule {}
