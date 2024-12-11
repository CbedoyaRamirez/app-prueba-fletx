import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuItems = [
    {
      title: 'Pre-Operación',
      icon: 'settings',
      expanded: false,
      submenu: ['Clientes', 'Plantas', 'Generadores de carga', 'Productos', 'Zonas de riesgo']
    },
    {
      title: 'Conductores y vehículos',
      icon: 'directions_car',
      expanded: false,
      submenu: ['Conductores', 'Vehículos', 'Trailers', 'Propietario - Poseedor', 'Estaciones combustible']
    },
    {
      title: 'Tablas maestras',
      icon: 'list',
      expanded: false,
      submenu: ['Comercial', 'Tráfico y monitoreo', 'Finanzas y contabilidad', 'Sistemas']
    },
    {
      title: 'Operación',
      icon: 'build',
      expanded: false,
      submenu: ['TruckBoard', 'Tráfico y monitoreo', 'Servicios activos', 'Histórico de servicios']
    },
    {
      title: 'Configuración',
      icon: 'settings_applications',
      expanded: false,
      submenu: ['Usuarios']
    }
  ];

  

  toggleSection(section: any) {
    section.expanded = !section.expanded;
  }

}
