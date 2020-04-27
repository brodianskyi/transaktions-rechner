import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { RechnerComponent } from './modules/rechner/rechner.component';


const routes: Routes = [{
  path: "",
  component: DefaultComponent,
  children: [{
    path: "",
    component: RechnerComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
