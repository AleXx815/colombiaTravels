import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { LugaresComponent } from './components/lugares/lugares.component';
import { CartagenaComponent } from './components/ciudades/components/cartagena/cartagena.component';
import { MedellinComponent } from './components/ciudades/components/medellin/medellin.component';
import { BogotaComponent } from './components/ciudades/components/bogota/bogota.component';
import { SanandresComponent } from './components/ciudades/components/sanandres/sanandres.component';
import { CaliComponent } from './components/ciudades/components/cali/cali.component';
import { ManizalesComponent } from './components/ciudades/components/manizales/manizales.component';
import { SantamartaComponent } from './components/ciudades/components/santamarta/santamarta.component';
import { BucaramangaComponent } from './components/ciudades/components/bucaramanga/bucaramanga.component';
import { BarranquillaComponent } from './components/ciudades/components/barranquilla/barranquilla.component';
import { ReservaExistosaComponent } from './components/reserva-existosa/reserva-existosa.component';
import { SuperloginComponent } from './components/superlogin/superlogin.component';
import { CiudadComponent } from './components/ciudad/ciudad.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GaleriaComponent,
    ContactanosComponent,
    LoginComponent,
    RegistroComponent,
    ReservasComponent,
    LugaresComponent,
    CartagenaComponent,
    MedellinComponent,
    BogotaComponent,
    SanandresComponent,
    CaliComponent,
    ManizalesComponent,
    SantamartaComponent,
    BucaramangaComponent,
    BarranquillaComponent,
    ReservaExistosaComponent,
    SuperloginComponent,
    CiudadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
