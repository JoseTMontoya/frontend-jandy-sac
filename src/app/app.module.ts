import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './jandy/inicio/inicio.component';
import { QuienessomosComponent } from './jandy/quienessomos/quienessomos.component';
import { ProductosComponent } from './jandy/productos/productos.component';
import { PromocionesComponent } from './jandy/promociones/promociones.component';
import { AppRoutingModule } from './app-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DetalleproductosComponent } from './jandy/detalleproductos/detalleproductos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    QuienessomosComponent,
    ProductosComponent,
    PromocionesComponent,
    DetalleproductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
