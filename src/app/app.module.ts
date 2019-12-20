import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
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

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    OtpComponent,
    HomepageComponent,
    TabsComponent,
    AgendaComponent,
    AgendaviewComponent,
    SpeakerComponent,
    SpeakerviewComponent,
    SponsorComponent,
    SponsorviewComponent,
    MyprofileComponent,
    EditmyprofileComponent,
    ProductsComponent,
    SelectcategoryComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
