import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CompanyComponent } from './about/company/company.component';
import { EmployeesComponent } from './about/employees/employees.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CompanyComponent,
    EmployeesComponent,
    ContactComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
