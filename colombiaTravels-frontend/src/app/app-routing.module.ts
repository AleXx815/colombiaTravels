import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from "./components/inicio/inicio.component";
import { GaleriaComponent } from "./components/galeria/galeria.component";
import { ContactanosComponent } from "./components/contactanos/contactanos.component";
import { LoginComponent } from "./components/login/login.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { ReservasComponent } from "./components/reservas/reservas.component";
import { LugaresComponent } from "./components/lugares/lugares.component";
import { ReservaExistosaComponent } from "./components/reserva-existosa/reserva-existosa.component";
import { SuperloginComponent } from "./components/superlogin/superlogin.component";
import { CiudadComponent } from "./components/ciudad/ciudad.component";

const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "galeria", component: GaleriaComponent },
  { path: "contactanos", component: ContactanosComponent },
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "reservas", component: ReservasComponent },
  { path: "lugares", component: LugaresComponent },
  { path: "reserva-existosa", component: ReservaExistosaComponent },
  { path: "superlogin", component: SuperloginComponent },
  { path: "ciudad", component: CiudadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
