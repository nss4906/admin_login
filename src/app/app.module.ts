import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './Mylogin/login/login.component';
import { ForgotpasswordComponent } from './Mylogin/forgotpassword/forgotpassword.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VerificationComponent } from './Mylogin/verification/verification.component';
import { SetpasswordComponent } from './Mylogin/setpassword/setpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotpasswordComponent,
    VerificationComponent,
    SetpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
