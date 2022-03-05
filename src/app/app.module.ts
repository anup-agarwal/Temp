import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from "@ngrx/store";
import { simpleReducer } from "./simple.reducer";
import { postReducer } from "./post.reducer";

import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ message: simpleReducer, post: postReducer }),
    StoreDevtoolsModule.instrument({maxAge: 10})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
