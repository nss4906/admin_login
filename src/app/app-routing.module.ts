import { NgModule } from "@angular/core";
import { ForgotpasswordComponent } from "./Mylogin/forgotpassword/forgotpassword.component";
import { LoginComponent } from "./Mylogin/login/login.component"; 
import { RouterModule, Routes } from "@angular/router";
import { VerificationComponent } from "./Mylogin/verification/verification.component";
import { SetpasswordComponent } from "./Mylogin/setpassword/setpassword.component";

const appRoute: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'forgot-password', component: ForgotpasswordComponent},
    {path: 'verification', component: VerificationComponent},
    {path: 'password', component: SetpasswordComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoute)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}