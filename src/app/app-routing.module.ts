import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { OtpComponent } from './otp/otp.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TabsComponent } from './tabs/tabs.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AgendaviewComponent } from './agendaview/agendaview.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { SpeakerviewComponent } from './speakerview/speakerview.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { SponsorviewComponent } from './sponsorview/sponsorview.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { EditmyprofileComponent } from './editmyprofile/editmyprofile.component';
import { ProductsComponent } from './products/products.component';
import { SelectcategoryComponent } from './selectcategory/selectcategory.component';

const routes: Routes = [
  { path: 'home', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: '', component : WelcomeComponent, pathMatch: 'full', },
  { path: 'login', component : LoginComponent, pathMatch: 'full', },
  { path: 'signup', component : SignupComponent, pathMatch: 'full', },
  { path: 'forgotpassword', component : ForgotpasswordComponent, pathMatch: 'full', },
  { path: 'otp', component : OtpComponent, pathMatch: 'full', },
  { path: 'homepage', component : HomepageComponent, pathMatch: 'full', },
  { path: 'tabs', component : TabsComponent, pathMatch: 'full', },
  { path: 'agenda', component : AgendaComponent, pathMatch: 'full', },
  { path: 'agendaview', component : AgendaviewComponent, pathMatch: 'full', },
  { path: 'speaker', component : SpeakerComponent, pathMatch: 'full', },
  { path: 'speakerview', component : SpeakerviewComponent, pathMatch: 'full', },
  { path: 'sponsor', component : SponsorComponent, pathMatch: 'full', },
  { path: 'sponsorview', component : SponsorviewComponent, pathMatch: 'full', },
  { path: 'myprofile', component : MyprofileComponent, pathMatch: 'full', },
  { path: 'editmyprofile', component : EditmyprofileComponent, pathMatch: 'full', },
  { path: 'products', component : ProductsComponent, pathMatch: 'full', },
  { path: 'selectcategory', component : SelectcategoryComponent, pathMatch: 'full', },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
