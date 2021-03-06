import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { PerfilClienteComponent } from './components/perfil-cliente/perfil-cliente.component';
import { PerfilFotografoComponent } from './components/perfil-fotografo/perfil-fotografo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccesoComponent } from './components/acceso/acceso.component';
import { FormularioClienteComponent } from './components/formulario-cliente/formulario-cliente.component';
import { PortfolioComponent } from './components/perfil-fotografo/portfolio/portfolio.component';
import { OpinionesComponent } from './components/perfil-fotografo/opiniones/opiniones.component';
import { AjustesComponent } from './components/perfil-fotografo/ajustes/ajustes.component';
import { BiografiaComponent } from './components/perfil-fotografo/biografia/biografia.component';
import { DatosPersonalesComponent } from './components/perfil-cliente/datos-personales/datos-personales.component';
import { FavoritosComponent } from './components/perfil-cliente/favoritos/favoritos.component';
import { ReservasComponent } from './components/perfil-cliente/reservas/reservas.component';
import { ContactoComponent } from './components/perfil-fotografo/contacto/contacto.component';
import { DisponibilidadComponent } from './components/perfil-fotografo/disponibilidad/disponibilidad.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuAjustesComponent } from './components/menu-ajustes/menu-ajustes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PasswordComponent } from './components/password/password.component';
import { DetalleComponent } from './components/detalle/detalle.component';

import { BioDetalleComponent } from './components/det-bio/bio-detalle.component';
import { DetPortfolioComponent } from './components/det-portfolio/det-portfolio.component';
import { DetContactoComponent } from './components/det-contacto/det-contacto.component';
import { DetOpinionesComponent } from './components/det-opiniones/det-opiniones.component'




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormularioComponent,
    PrincipalComponent,
    PerfilClienteComponent,
    PerfilFotografoComponent,
    AccesoComponent,
    FormularioClienteComponent,
    OpinionesComponent,
    PortfolioComponent,
    AjustesComponent,
    BiografiaComponent,
    DatosPersonalesComponent,
    FavoritosComponent,
    ReservasComponent,
    ContactoComponent,
    DisponibilidadComponent,
    MenuAjustesComponent,
    NavbarComponent,
    FooterComponent,
    PasswordComponent,
    DetalleComponent,

    BioDetalleComponent,
    DetPortfolioComponent,
    DetContactoComponent,
    DetOpinionesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
