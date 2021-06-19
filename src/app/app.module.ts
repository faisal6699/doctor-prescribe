import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {CheckboxModule} from 'primeng/checkbox';
import { BodyElementComponent } from './body-element/body-element.component';
import {FieldsetModule} from 'primeng/fieldset';
import {PanelModule} from 'primeng/panel';
import { ToothElementComponent } from './body-element/tooth-element/tooth-element.component';
import { SelectedToothComponent } from './body-element/selected-tooth/selected-tooth.component';
import { ExtraComponent } from './extra/extra.component';
import { PrescribeComponent } from './body-element/prescribe/prescribe.component';
import {SidebarModule} from 'primeng/sidebar';
import { PrescribeElementComponent } from './body-element/prescribe-element/prescribe-element.component';
import { PrescribeElementComplaintComponent } from './body-element/prescribe-element/prescribe-element-complaint/prescribe-element-complaint.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    BodyElementComponent,
    ToothElementComponent,
    SelectedToothComponent,
    ExtraComponent,
    PrescribeComponent,
    PrescribeElementComponent,
    PrescribeElementComplaintComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    CheckboxModule,
    FieldsetModule,
    MultiSelectModule,
    PanelModule,
    SidebarModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
