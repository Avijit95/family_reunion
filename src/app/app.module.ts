import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { SpeakerviewComponent } from './speakerview/speakerview.component'
import { SponsorComponent } from './sponsor/sponsor.component';
import { SponsorviewComponent } from './sponsorview/sponsorview.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { EditmyprofileComponent } from './editmyprofile/editmyprofile.component';
import { ProductsComponent } from './products/products.component';
import { SelectcategoryComponent } from './selectcategory/selectcategory.component';
import{ApiService} from './services/api-service';
import { from } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { TalenthuntComponent } from './talenthunt/talenthunt.component';
import { TalenthuntuploadComponent } from './talenthuntupload/talenthuntupload.component';


import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/File/ngx';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { Media } from '@ionic-native/media/ngx';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { MycartComponent } from './mycart/mycart.component';
import { ProductsearchComponent } from './productsearch/productsearch.component';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';
import { NetworkingComponent } from './networking/networking.component';
import { ChatComponent } from './chat/chat.component';
import { NetworkingtabComponent } from './networkingtab/networkingtab.component';
import { IonicStorageModule } from '@ionic/storage';



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
    SelectcategoryComponent,
    TalenthuntComponent,
    TalenthuntuploadComponent,
    ProductdetailComponent,
    MycartComponent,
    ProductsearchComponent,
    OrdersummaryComponent,
    NetworkingComponent,
    ChatComponent,
    NetworkingtabComponent

  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ImagePicker,
    MediaCapture,
    File,
    Media,
    StreamingMedia,
    PhotoViewer,

    StatusBar,
    CookieService,
    ApiService,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
