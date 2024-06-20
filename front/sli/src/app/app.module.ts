import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CidadeListaComponent } from './cadastros/cidade-lista/cidade-lista.component';
import { CidadeFormComponent } from './cadastros/cidade-form/cidade-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CidadeListaComponent,
    HomeComponent,
    LoginComponent,
    CidadeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
