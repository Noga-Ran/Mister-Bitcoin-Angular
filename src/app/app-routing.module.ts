import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ContactResolver } from './services/contact.resolver';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'contacts/:id', component: ContactDetailsComponent, resolve: { contact: ContactResolver },
  },
  {
    path: 'contacts', component: ContactAppComponent,
    // children: [
    //   { path: 'edit/:id', component: ContactEditPageComponent, resolve: { contact: ContactResolver } },
    //   { path: 'edit', component: ContactEditPageComponent }
    // ]
  },
  { path: 'edit/:id', component: ContactEditPageComponent, resolve: { contact: ContactResolver } },
  { path: 'edit', component: ContactEditPageComponent },
  { path: 'statistic', component: StatisticPageComponent },
  { path: 'signup', component: SignUpPageComponent },
  { path: 'about', component: AboutPageComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
