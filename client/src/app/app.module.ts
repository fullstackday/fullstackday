import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkTimeListComponent } from './work-time-list/work-time-list.component';
import { WorkTimeEditorComponent } from './work-time-editor/work-time-editor.component';
import { HeaderComponent } from './header/header.component';
import { AppMaterialModule } from './app-material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        WorkTimeListComponent,
        WorkTimeEditorComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppMaterialModule,
        ReactiveFormsModule
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
