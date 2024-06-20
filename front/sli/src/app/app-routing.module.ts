import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { CidadeListaComponent } from './cadastros/cidade-lista/cidade-lista.component';
import { CidadeFormComponent } from './cadastros/cidade-form/cidade-form.component';


const routes: Routes = [
  { path : "", redirectTo: "/home", pathMatch: "full" },
  { path : "home", component: HomeComponent },
  { path : "login", component: LoginComponent },
  { path : "lista-cidades", component: CidadeListaComponent },
  { path : "cadastro-cidades", component: CidadeFormComponent},
  { path : "cadastro-cidades/:id", component: CidadeFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
