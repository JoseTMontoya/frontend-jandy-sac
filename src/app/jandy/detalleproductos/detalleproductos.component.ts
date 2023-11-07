import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../productos/producto.model';
import { ProductosService } from '../productos/productos.service';

@Component({
  selector: 'app-detalleproductos',
  templateUrl: './detalleproductos.component.html',
  styleUrls: ['./detalleproductos.component.css']
})
export class DetalleproductosComponent implements OnInit {
  producto: Producto | undefined;

  constructor(private route: ActivatedRoute, private productosService: ProductosService) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];
    this.producto = this.productosService.obtenerProductoPorId(productId);
  
    if (!this.producto) {
      console.error('Producto no encontrado');
      // Redirigir a una página de error o hacer algo adecuado para tu aplicación
    }
  
  }
  
  cotizar(): void {
    // Lógica para cotizar el producto
  }
}
