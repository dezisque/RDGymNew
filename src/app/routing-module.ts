import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EventsComponent } from './content/events/events.component';
import { AboutComponent } from './content/about/about.component';
import { HomeComponent } from './content/home/home.component';
import { ContactsComponent } from './content/contacts/contacts.component';
import { MembershipComponent } from './content/membership/membership.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'events', component: EventsComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'membership', component: MembershipComponent },
    { path: '**', component: HeaderComponent },
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
      ],
      exports: [RouterModule    ]
})
export class AppRoutingModule {

}