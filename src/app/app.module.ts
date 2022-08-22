import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app-root/app.component';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactDetailsComponent } from './pages/contact-details/user-details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { AppFooterComponent } from './cmps/app-footer/app-footer.component';
import { EditFormComponent } from './cmps/edit-form/edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactAppComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactFilterComponent,
    ContactDetailsComponent,
    HomePageComponent,
    ContactEditPageComponent,
    StatisticPageComponent,
    AppHeaderComponent,
    AppFooterComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    GoogleChartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
