import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    BodyElementComponent,
    ToothElementComponent,
    SelectedToothComponent,
    ExtraComponent,
    PrescribeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    CheckboxModule,
    FieldsetModule,
    MultiSelectModule,
    PanelModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
