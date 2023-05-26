import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CompanyComponent } from "./about/company/company.component";
import { EmployeesComponent } from "./about/employees/employees.component";
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const myRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    children: [
      {
        path: "",
        component: AboutComponent,
      },
      {
        path: "employees",
        component: EmployeesComponent,
      },
      {
        path: "company",
        component: CompanyComponent,
      },
    ],
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(myRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
