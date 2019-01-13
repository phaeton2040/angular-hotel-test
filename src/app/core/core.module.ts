import {
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    exports: [
        MatToolbarModule,
        MatCardModule,
        MatInputModule,
        MatCheckboxModule,
        MatSelectModule
    ]
})
export class CoreModule {}
