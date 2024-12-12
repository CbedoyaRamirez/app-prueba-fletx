import { Component, OnInit } from '@angular/core';
import { RegistrosService } from './shared/services/ruby.services';
import { User } from './shared/interface/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app-prueba-fletx';

  datos: {
    nombre: string;
    id: string;
    placa1: string;
    placa2: string;
    estado: string;
    coordenadas: string;
    codigoVerde: string;
    codigosAmarillos: string[];
  }[] = [];

  resp:User[];

  cardItems: { title: string; color: string; number: number }[] = [];

  constructor(private registrosService: RegistrosService) {
    this.cardItems = [
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
      },
    ];
    this.datos = [
      {
        nombre: 'Andrés Vélez',
        id: 'C.C: 1.015.236.584',
        placa1: 'AAA123',
        placa2: 'BBB123',
        estado: 'En servicio',
        coordenadas: '4.703547, -74.029014',
        codigoVerde: 'SVC.123456',
        codigosAmarillos: ['SVC.123456', 'SVC.123456'],
      },
      {
        nombre: 'Andrés Vélez',
        id: 'C.C: 1.015.236.584',
        placa1: 'AAA123',
        placa2: 'BBB123',
        estado: 'En servicio',
        coordenadas: '4.703547, -74.029014',
        codigoVerde: 'SVC.123456',
        codigosAmarillos: ['SVC.123456', 'SVC.123456'],
      },
      {
        nombre: 'Andrés Vélez',
        id: 'C.C: 1.015.236.584',
        placa1: 'AAA123',
        placa2: 'BBB123',
        estado: 'En servicio',
        coordenadas: '4.703547, -74.029014',
        codigoVerde: 'SVC.123456',
        codigosAmarillos: ['SVC.123456', 'SVC.123456'],
      },
      {
        nombre: 'Andrés Vélez',
        id: 'C.C: 1.015.236.584',
        placa1: 'AAA123',
        placa2: 'BBB123',
        estado: 'En servicio',
        coordenadas: '4.703547, -74.029014',
        codigoVerde: 'SVC.123456',
        codigosAmarillos: ['SVC.123456', 'SVC.123456'],
      },
    ];
  }

  ngOnInit(): void {
    this.servicioRubyAndRails();
  }

  async servicioRubyAndRails(){
    await this.registrosService.getRegistros().subscribe({
      next: (data) => {
        this.resp = data;
        console.log(this.datos);
      },
      error: (error) => {
        console.error('Error al obtener los registros:', error);
      },
    });    
  }


}
