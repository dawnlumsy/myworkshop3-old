import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';

const MATERIAL = [ MatButtonModule, MatIconModule, MatToolbarModule, MatInputModule, 
    MatRadioModule, MatCheckboxModule, MatMomentDateModule, MatDatepickerModule
];
@NgModule ({
    imports: MATERIAL,
    exports: MATERIAL
}) export class MaterialModule {}