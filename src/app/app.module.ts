import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Reactive Forms
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
// Http
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
// angular materail
import { MaterialModule } from './material.module';
// components
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MainComponent } from './components/main/main.component';
// services
import { AuthService } from './services/auth.service'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    MainComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
