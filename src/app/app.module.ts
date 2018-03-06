import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './routing-module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EventsComponent } from './content/events/events.component';
import { AboutComponent } from './content/about/about.component';
import { HomeComponent } from './content/home/home.component';
import { ContactsComponent } from './content/contacts/contacts.component';
import { MembershipComponent } from './content/membership/membership.component';

import { EventService } from './services/event.service';
import { SliderComponent } from './content/home/slider/slider.component';
import { BlocksComponent } from './content/home/blocks/blocks.component';
import { MapComponent } from './content/contacts/map/map.component';
import { SocialIconsComponent } from './header/social-icons/social-icons.component';
import { InfoComponent } from './content/contacts/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EventsComponent,
    AboutComponent,
    HomeComponent,
    ContactsComponent,
    MembershipComponent,
    SliderComponent,
    BlocksComponent,
    MapComponent,
    SocialIconsComponent,
    InfoComponent,
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC8Ry2L5EkeFo0l4h_ORUPJYz-a5pV7h1k'
    }),
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
