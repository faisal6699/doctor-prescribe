import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import { BodyElementComponent } from './body-element/body-element.component';
import {FieldsetModule} from 'primeng/fieldset';

@NgModule({
  declarations: [
    AppComponent,
    BodyElementComponent,
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
    FieldsetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
