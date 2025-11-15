import { Component, OnInit, AfterViewInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import Overlay from 'ol/Overlay';
import { fromLonLat, transform, transformExtent } from 'ol/proj';
import { centros } from '../../../assets/data/centrosEducativos';
import { ciclos } from '../../../assets/data/ciclosFormativos';

@Component({
  selector: 'app-mapa-centros',
  templateUrl: './mapa-centros.component.html',
  styleUrls: ['./mapa-centros.component.scss']
})
export class MapaCentrosComponent implements OnInit, AfterViewInit {
  map!: Map;
  popupOverlay!: Overlay;
  pinsLayer!: VectorLayer<any>;
  provincias: string[] = [];
  municipios: string[] = [];
  ciclos = ciclos;
  tiposCentro: { value: string, label: string }[] = [];
  provinciaSeleccionada = '';
  municipioSeleccionado = '';
  tipoCentroSeleccionado = '';
  moduloSeleccionado = '';
  municipioEnabled = false;

  // Extent de Euskadi en EPSG:3857
  euskadiExtent = transformExtent([-3.4, 42.57, -1.5, 43.45], 'EPSG:4326', 'EPSG:3857');

  tipoCentroLabels: Record<string, string> = {
    'CIFP': 'Centro Integrado de Formación Profesional',
    'CPEPS': 'Centro Privado de Educación Infantil, Primaria y Secundaria',
    'CPES': 'Centro Privado de Educación Secundaria',
    'CPFPB': 'Centro Privado de Formación Profesional Básica',
    'IES': 'Instituto de Educación Secundaria',
    'IMFPB': 'Instituto Municipal de Formación Profesional Básica'
  };

  ngOnInit(): void {
    this.cargarListas();
  }

  ngAfterViewInit(): void {
    this.inicializarMapa();
  }

  cargarListas(): void {
    this.provincias = Array.from(new Set(centros.map(c => c.DTERRC))).sort();
    const tiposUnicos = Array.from(
      new Set(centros.map(c => c.DGENRC).filter(v => !!v && v.trim() !== ''))
    ).sort();
    this.tiposCentro = tiposUnicos.map(codigo => ({
      value: codigo,
      label: this.tipoCentroLabels[codigo] || codigo
    }));
  }

  inicializarMapa(): void {
    this.popupOverlay = new Overlay({
      element: document.getElementById('popup') as HTMLElement,
      positioning: 'bottom-center',
      stopEvent: false,
      offset: [0, -40],
      autoPan: { animation: { duration: 250 }, margin: 80 }
    });

    this.map = new Map({
      target: 'map',
      layers: [new TileLayer({ source: new OSM() })],
      view: new View({
        center: [0, 0], // da igual, fitearemos el extent
        zoom: 2
      }),
      overlays: [this.popupOverlay]
    });

    // Fit Euskadi SIEMPRE al iniciar
    this.map.getView().fit(this.euskadiExtent, {
      duration: 600,
      padding: [30, 30, 30, 30],
      maxZoom: 10.5
    });

    this.map.on('pointermove', evt => {
      const hit = this.map.hasFeatureAtPixel(evt.pixel);
      (this.map.getTargetElement() as HTMLElement).style.cursor = hit ? 'pointer' : '';
    });

    this.map.on('singleclick', evt => {
      const feature = this.map.forEachFeatureAtPixel(evt.pixel, f => f as Feature<any>);
      const popup = this.popupOverlay.getElement() as HTMLElement;
      if (feature) {
        const props = feature.getProperties();
        popup.innerHTML = props["contenido"] || props["name"] || "Centro";
        this.popupOverlay.setOffset([0, -40]);
        this.popupOverlay.setPositioning('bottom-center' as any);
        this.popupOverlay.setPosition(evt.coordinate);
        popup.style.display = 'block';
      } else {
        popup.style.display = 'none';
      }
    });

    this.actualizarMapa();
  }

  actualizarMunicipios(): void {
    this.municipios = [];
    this.municipioSeleccionado = '';
    this.municipioEnabled = false;
    if (this.provinciaSeleccionada) {
      const municipiosSet = new Set<string>();
      centros
        .filter(c => c.DTERRC === this.provinciaSeleccionada)
        .forEach(c => municipiosSet.add(c.DMUNIC));
      this.municipios = Array.from(municipiosSet).sort();
      this.municipioEnabled = true;
      this.actualizarMapa();
    } else {
      this.actualizarMapa();
    }
  }

  actualizarMapa(): void {
    if (!this.map) return;
  
    let filtrados = centros;
    if (this.provinciaSeleccionada) {
      filtrados = filtrados.filter(c => c.DTERRC === this.provinciaSeleccionada);
    }
    if (this.municipioSeleccionado)
      filtrados = filtrados.filter(c => c.DMUNIC === this.municipioSeleccionado);
  
    if (this.tipoCentroSeleccionado)
      filtrados = filtrados.filter(c => c.DGENRC === this.tipoCentroSeleccionado);
  
    if (this.moduloSeleccionado) {
      const ciclo = this.ciclos.find(
        c => c.codcicl === Number(this.moduloSeleccionado)
      );
      if (ciclo) {
        filtrados = filtrados.filter(c => ciclo.centros.includes(c.CCEN));
      }
    }
  
    const features = filtrados.map(centro => {
      const contenido = this.getPopupHTML(centro);
      const lng = Number(centro.COOR_X);
      const lat = Number(centro.COOR_Y);
      const point = transform([lng, lat], 'EPSG:4326', 'EPSG:3857');
      const feature = new Feature({
        geometry: new Point(point),
        name: centro.NOM,
        contenido
      });
      const icon = 'assets/images/marker-default.png';
      feature.setStyle(new Style({
        image: new Icon({ src: icon, scale: 0.15 })
      }));
      return feature;
    });
  
    if (this.pinsLayer) this.map.removeLayer(this.pinsLayer);
  
    this.pinsLayer = new VectorLayer({
      source: new VectorSource({ features })
    });
    this.map.addLayer(this.pinsLayer);
  
    if (features.length > 0) {
      const extent = this.pinsLayer.getSource()!.getExtent();
      // Verifica si el extent es válido y de tamaño razonable
      const isValidExtent = extent && extent[0] !== Infinity && extent[2] !== -Infinity;
      const width = Math.abs(extent[2] - extent[0]);
      const height = Math.abs(extent[3] - extent[1]);
  
      if (isValidExtent && width > 10 && height > 10) {
        this.map.getView().fit(extent, {
          maxZoom: 13, // ¡esto limita fit a zoom máximo razonable!
          minResolution: 50, // Opcional: asegura no hacer un fit absurdamente pequeño
          padding: [40, 40, 40, 40],
          duration: 400
        });
      } else if (isValidExtent) {
        // Hay solo un centro o puntos demasiado juntos
        const center = [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2];
        this.map.getView().setCenter(center);
        this.map.getView().setZoom(12); // Un zoom que encuadre normal el pin
      } else {
        // Extent inválido: vuelve a Euskadi
        this.map.getView().fit(this.euskadiExtent, {
          duration: 400, padding: [30, 30, 30, 30], maxZoom: 10.5
        });
      }
    } else {
      // Siempre vuelve al extent de Euskadi si no hay features
      this.map.getView().fit(this.euskadiExtent, {
        duration: 400, padding: [30, 30, 30, 30], maxZoom: 10.5
      });
    }
  }
  
  
  private getPopupHTML(centro: any): string {
    const rows: string[] = [];
    if (centro.NOM) rows.push(`<strong>${centro.NOM}</strong>`);
    if (centro.DOMI) rows.push(`Dirección/Helbidea: ${centro.DOMI}`);
    if (centro.DMUNIC) rows.push(`Municipio/Udaleria: ${centro.DMUNIC}`);
    if (centro.DTERRC) rows.push(`Provincia/Probintzia: ${centro.DTERRC}`);
    if (centro.TEL1) rows.push(`Teléfono: ${centro.TEL1}`);
    if (centro.TFAX) rows.push(`Fax: ${centro.TFAX}`);
    if (centro.EMAIL) rows.push(`Email: ${centro.EMAIL}`);
    if (centro.PAGINA) rows.push(`<a href="${centro.PAGINA}" target="_blank">Visitar sitio web</a>`);
    return rows.join('<br/>');
  }
}

