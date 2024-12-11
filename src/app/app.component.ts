import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-prueba-fletx';

  cardItems = [
    {
      title: 'Cond. Activo',
      color: '#000',
      number: 574,
    },
    {
      title: 'Cond. Disponible',
      color: '#000',
      number: 574,
    },
    {
      title: 'Cond. En Servicios',
      color: '#000',
      number: 574,
    },
    {
      title: 'Cond. Inactivos',
      color: '#000',
      number: 574,
    },
    {
      title: 'Cond. Por Aprobar',
      color: '#000',
      number: 574,
    }
  ];

  datos = [
    {
      nombre: 'Andrés Vélez',
      id: 'C.C: 1.015.236.584',
      placa1: 'AAA123',
      placa2: 'BBB123',
      estado: 'En servicio',
      coordenadas: '4.703547, -74.029014',
      codigoVerde: 'SVC.123456',
      codigosAmarillos: ['SVC.123456', 'SVC.123456']
    },
    {
      nombre: 'Andrés Vélez',
      id: 'C.C: 1.015.236.584',
      placa1: 'AAA123',
      placa2: 'BBB123',
      estado: 'En servicio',
      coordenadas: '4.703547, -74.029014',
      codigoVerde: 'SVC.123456',
      codigosAmarillos: ['SVC.123456', 'SVC.123456']
    },
    {
      nombre: 'Andrés Vélez',
      id: 'C.C: 1.015.236.584',
      placa1: 'AAA123',
      placa2: 'BBB123',
      estado: 'En servicio',
      coordenadas: '4.703547, -74.029014',
      codigoVerde: 'SVC.123456',
      codigosAmarillos: ['SVC.123456', 'SVC.123456']
    },
    {
      nombre: 'Andrés Vélez',
      id: 'C.C: 1.015.236.584',
      placa1: 'AAA123',
      placa2: 'BBB123',
      estado: 'En servicio',
      coordenadas: '4.703547, -74.029014',
      codigoVerde: 'SVC.123456',
      codigosAmarillos: ['SVC.123456', 'SVC.123456']
    },
  ];
  

}
