
import { Injectable } from '@angular/core';
import { Producto } from './producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productos: Producto[] = [
  ];

  obtenerProductoPorId(id: string): Producto | undefined {
    return this.productos.find(producto => producto.id === id);
  }
}
