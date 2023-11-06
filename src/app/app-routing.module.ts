import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { InicioComponent } from "./jandy/inicio/inicio.component";
import { QuienessomosComponent } from "./jandy/quienessomos/quienessomos.component";
import { ProductosComponent } from "./jandy/productos/productos.component";
import { PromocionesComponent } from "./jandy/promociones/promociones.component";

const routes: Routes= [
    {path: "inicio" ,component: InicioComponent},
    {path: "quienessomos" ,component: QuienessomosComponent},
    {path: "productos" ,component: ProductosComponent},
    {path: "promociones" ,component: PromocionesComponent},
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}