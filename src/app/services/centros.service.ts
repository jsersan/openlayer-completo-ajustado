import { Injectable } from '@angular/core';
import { institutos } from '../../assets/data/institutos';
import { ciclos } from '../../assets/data/ciclos';  // Ajustar nombre exacto exportado
import asignacion from '../../assets/data/asignacion';    // Usar si es necesario

@Injectable({
  providedIn: 'root'
})
export class CentrosService {

  getInstitutos() {
    return institutos;
  }

  getCiclosFormativos() {
    return ciclos;
  }

  getAsignacion() {
    return asignacion;  // Si es necesario proveer este dato
  }

  // Filtrar provincias según institutos
  getProvincias(): string[] {
    return Array.from(new Set(institutos.map(c => c.DTERRC)));
  }

  // Tipo centro según institutos
  getTiposCentro(): string[] {
    return Array.from(new Set(institutos.map(c => c.DGENRC)));
  }

  // Municipios por provincia según institutos
  getMunicipios(provincia: string): string[] {
    if (!provincia) return [];
    return Array.from(new Set(institutos.filter(c => c.DTERRC === provincia).map(c => c.DMUNIC)));
  }
}
