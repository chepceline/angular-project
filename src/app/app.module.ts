import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"
import { AppComponent } from './app.component';

import { QuotesComponent } from './quote/quote.component';
import { HighlightDirective } from './highlight.directive';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    
    QuotesComponent,
    HighlightDirective,
    DetailsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
