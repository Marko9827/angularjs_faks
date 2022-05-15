import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './services/events/events.component';
import { AddComponent } from './services/add/add.component';
import { EditComponent } from './services/edit/edit.component';
import { DelComponent } from './services/del/del.component';
import { UpdateComponent } from './services/update/update.component';
//
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    EventsComponent,
    AddComponent,
    EditComponent,
    DelComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB6sCGAOM7T8VCmMY1sk-5f9qGpQDVvvok",
      authDomain: "blog-88dea.firebaseapp.com",
      databaseURL: "https://blog-88dea.firebaseio.com",
      projectId: "blog-88dea",
      storageBucket: "blog-88dea.appspot.com",
      messagingSenderId: "834954236272",
      appId: "1:834954236272:web:358fffab61b5f39dd4bfb5",
      measurementId: "G-G0HV6WCFJN"
    }),
     AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
