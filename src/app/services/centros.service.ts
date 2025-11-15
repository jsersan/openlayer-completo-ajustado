import { Injectable } from '@angular/core';
import { centros } from '../../assets/data/centrosEducativos';
import { ciclos } from '../../assets/data/ciclosFormativos';

@Injectable({
  providedIn: 'root'
})
export class CentrosService {

  getCentros() {
    return centros;
  }

  getCiclos() {
    return ciclos;
  }

  // Métodos de filtrado reutilizables (opcional, ejemplo):
  getProvincias(): string[] {
    return Array.from(new Set(centros.map(c => c.DTERRC)));
  }

  getTiposCentro(): string[] {
    return Array.from(new Set(centros.map(c => c.DGENRC)));
  }

  getMunicipios(provincia: string): string[] {
    if (!provincia) return [];
    return Array.from(new Set(centros.filter(c => c.DTERRC === provincia).map(c => c.DMUNIC)));
  }
}
