import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/Navbar.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { RegistroComponent } from './Registro/Registro.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ContactoComponent } from './Contacto/Contacto.component';
import { Detalle Component } from './detalle /detalle .component';

const appRouters: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'index', component: IndexComponent},
  {path: 'Registro', component: RegistroComponent},
  {path: 'categoria', component: CategoriaComponent},
  {path: 'contacto', component: ContactoComponent}
  ];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    FooterComponent,
    RegistroComponent,
    CategoriaComponent,
    ContactoComponent,
    Detalle Component
],
  imports: [
    RouterModule.forRoot(appRouters),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
