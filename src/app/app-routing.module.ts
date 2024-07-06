import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPageComponent } from './_components/_pages/principal-page/principal-page.component';

const routes: Routes = [
  {path:'**', redirectTo: 'principal-page', pathMatch:'full'},
  {path:'principal-page', component: PrincipalPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
