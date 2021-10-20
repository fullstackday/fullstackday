import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaterialTimepickerModule,
    MatProgressBarModule,
    MatTableModule,
  ],
  providers: [
    MatDatepickerModule,
  ],
})
export class AppMaterialModule {
}
