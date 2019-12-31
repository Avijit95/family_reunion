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
import { TalenthuntComponent } from './talenthunt/talenthunt.component';
import { TalenthuntuploadComponent } from './talenthuntupload/talenthuntupload.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { MycartComponent } from './mycart/mycart.component';
import { ProductsearchComponent } from './productsearch/productsearch.component';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';
import { NetworkingComponent } from './networking/networking.component';
import { ChatComponent } from './chat/chat.component';
import { NetworkingtabComponent } from './networkingtab/networkingtab.component';

const routes: Routes = [
  { path: 'home', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: '', component : WelcomeComponent},
  { path: 'login', component : LoginComponent},
  { path: 'signup', component : SignupComponent},
  { path: 'forgotpassword', component : ForgotpasswordComponent},
  { path: 'otp', component : OtpComponent},
  { path: 'homepage', component : HomepageComponent},
  { path: 'tabs', component : TabsComponent},
  { path: 'agenda', component : AgendaComponent},
  { path: 'agendaview', component : AgendaviewComponent},
  { path: 'speaker', component : SpeakerComponent},
  { path: 'speakerview', component : SpeakerviewComponent},
  { path: 'sponsor', component : SponsorComponent},
  { path: 'sponsorview', component : SponsorviewComponent},
  { path: 'myprofile', component : MyprofileComponent},
  { path: 'editmyprofile', component : EditmyprofileComponent},
  { path: 'products', component : ProductsComponent},
  { path: 'selectcategory', component : SelectcategoryComponent},
  { path: 'talenthunt', component : TalenthuntComponent},
  { path: 'talenthuntupload', component : TalenthuntuploadComponent},
  { path: 'productdetail', component : ProductdetailComponent},
  { path: 'mycart', component : MycartComponent},
  { path: 'Productsearch', component : ProductsearchComponent},
  { path: 'ordersummary', component : OrdersummaryComponent},
  { path: 'networking', component : NetworkingComponent},
  { path: 'chat', component : ChatComponent},
  { path: 'networkingtab', component : NetworkingtabComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
