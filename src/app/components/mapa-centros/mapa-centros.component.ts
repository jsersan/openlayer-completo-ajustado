import { Component, OnInit, AfterViewInit } from '@angular/core'

import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import Style from 'ol/style/Style'
import Icon from 'ol/style/Icon'
import Overlay from 'ol/Overlay'
import { fromLonLat, transform, transformExtent } from 'ol/proj'
import { register } from 'ol/proj/proj4'
import * as proj4x from 'proj4'

const proj4 = (proj4x as any).default || proj4x

import { institutos } from '../../../assets/data/institutos'
import { ciclos } from '../../../assets/data/ciclos'

@Component({
  selector: 'app-mapa-centros',
  templateUrl: './mapa-centros.component.html',
  styleUrls: ['./mapa-centros.component.scss']
})
export class MapaCentrosComponent implements OnInit, AfterViewInit {
  map!: Map
  popupOverlay!: Overlay
  tooltipOverlay!: Overlay  // ✅ AÑADIDO
  tooltipElement!: HTMLElement  // ✅ AÑADIDO
  pinsLayer!: VectorLayer<any>
  provincias: string[] = []
  municipios: string[] = []
  ciclos = ciclos
  tiposCentro: { value: string; label: string }[] = []
  provinciaSeleccionada = ''
  municipioSeleccionado = ''
  tipoCentroSeleccionado = ''
  moduloSeleccionado = ''
  municipioEnabled = false

  euskadiExtent = transformExtent(
    [-3.4, 42.57, -1.5, 43.45],
    'EPSG:4326',
    'EPSG:3857'
  )

  tipoCentroLabels: Record<string, string> = {
    CIFP: 'Centro Integrado de Formación Profesional',
    CIFPD: 'Centro Integrado de FP a Distancia',
    CPES: 'Centro Privado de Educación Secundaria',
    CPEPS: 'Centro Privado de Educación Infantil, Primaria y Secundaria',
    CPFPB: 'Centro Privado de Formación Profesional Básica',
    IES: 'Instituto de Educación Secundaria',
    IMFPB: 'Instituto Municipal de Formación Profesional Básica'
  }

  tipoCentroIcono: Record<string, string> = {
    CIFP: 'assets/images/marker-cifp.png',
    CPEPS: 'assets/images/marker-cpeips.png',
    CPES: 'assets/images/marker-cpes.png',
    CPFPB: 'assets/images/marker-cpfpb.png',
    IES: 'assets/images/marker-ies.png'
  }

  ngOnInit (): void {
    proj4.defs(
      'EPSG:25830',
      '+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
    )
    register(proj4)
    this.cargarListas()
  }

  ngAfterViewInit (): void {
    this.inicializarMapa();
  }

  cargarListas (): void {
    console.log('Centros:' + institutos.length)
    console.log(
      'Tipos de Centros:' + Array.from(new Set(institutos.map(c => c.DGENRC)))
    )

    this.provincias = Array.from(new Set(institutos.map(c => c.DTERRC))).sort()
    const tiposUnicos = Array.from(
      new Set(institutos.map(c => c.DGENRC).filter(v => !!v && v.trim() !== ''))
    ).sort()
    this.tiposCentro = tiposUnicos.map(codigo => ({
      value: codigo,
      label: this.tipoCentroLabels[codigo] || codigo
    }))
  }

  inicializarMapa(): void {
    // ✅ Crear overlay para el popup principal
    this.popupOverlay = new Overlay({
      element: document.getElementById('popup') as HTMLElement,
      positioning: 'bottom-center',
      stopEvent: false,
      offset: [0, -40],
      autoPan: false
    })

    // ✅ Crear overlay para el tooltip (hover) - ASIGNAR A this.tooltipElement
    this.tooltipElement = document.createElement('div')
    this.tooltipElement.id = 'map-tooltip'
    this.tooltipElement.className = 'map-tooltip'
    document.body.appendChild(this.tooltipElement)

    this.tooltipOverlay = new Overlay({
      element: this.tooltipElement,
      positioning: 'top-center',
      stopEvent: false,
      offset: [0, -15]
    })
  
    this.map = new Map({
      target: 'map',
      layers: [new TileLayer({ source: new OSM() })],
      view: new View({ center: [0, 0], zoom: 2 }),
      overlays: [this.popupOverlay, this.tooltipOverlay] // ✅ Usar this.tooltipOverlay
    })
  
    this.map.getView().fit(this.euskadiExtent, {
      duration: 600,
      padding: [30, 30, 30, 30],
      maxZoom: 10.5
    })
  
    // ✅ Mostrar tooltip al pasar el cursor (hover)
    this.map.on('pointermove', evt => {
      const feature = this.map.forEachFeatureAtPixel(
        evt.pixel,
        f => f as Feature<any>
      )
      
      if (feature) {
        // Mostrar cursor pointer
        (this.map.getTargetElement() as HTMLElement).style.cursor = 'pointer'
        
        // ✅ Usar tooltipNombre (DGENRC + NOM + DGENRE)
        const nombreCompleto = feature.get('tooltipNombre') || feature.get('name') || 'Centro'
        this.tooltipElement.innerHTML = nombreCompleto
        this.tooltipElement.style.display = 'block'
        this.tooltipOverlay.setPosition(evt.coordinate)
      } else {
        // Ocultar tooltip y restaurar cursor
        (this.map.getTargetElement() as HTMLElement).style.cursor = ''
        this.tooltipElement.style.display = 'none'
      }
    })
  
    // ✅ Click para mostrar popup completo
    this.map.on('singleclick', evt => {
      const feature = this.map.forEachFeatureAtPixel(
        evt.pixel,
        f => f as Feature<any>
      )
      const popup = this.popupOverlay.getElement() as HTMLElement
      
      if (feature) {
        const props = feature.getProperties()
        popup.innerHTML = props['contenido'] || props['name'] || 'Centro'
        
        // Ocultar tooltip al hacer click
        this.tooltipElement.style.display = 'none'
        
        // Posicionar popup inteligentemente
        this.posicionarPopupInteligente(evt.pixel, evt.coordinate, popup)
        
        popup.style.display = 'block'
      } else {
        popup.style.display = 'none'
      }
    })
  
    this.pinsLayer = new VectorLayer({
      source: new VectorSource({ features: [] })
    });
    this.map.addLayer(this.pinsLayer);
  }

  /**
   * ✅ SOLUCIÓN DEFINITIVA: Posicionamiento manual con CSS
   * Ignoramos el sistema de positioning de OpenLayers y usamos posición absoluta
   */
  private posicionarPopupInteligente(pixel: number[], coordinate: number[], popup: HTMLElement): void {
    const mapSize = this.map.getSize()
    if (!mapSize) return

    const [width, height] = mapSize
    const [x, y] = pixel

    // ✅ Obtener el ancho real de la sidebar
    const sidebar = document.querySelector('.sidebar') as HTMLElement
    const sidebarWidth = sidebar ? sidebar.offsetWidth : 420

    // ✅ Calcular área visible del mapa
    const areaVisibleWidth = width - sidebarWidth
    const xRelativo = x - sidebarWidth

    // ✅ Hacer el popup visible para medir su tamaño
    popup.style.display = 'block'
    popup.style.visibility = 'hidden'
    const popupRect = popup.getBoundingClientRect()
    const popupWidth = popupRect.width || 320
    const popupHeight = popupRect.height || 280
    popup.style.visibility = 'visible'

    // ✅ Calcular espacio disponible
    const espacioArriba = y
    const espacioAbajo = height - y
    const espacioIzquierda = xRelativo
    const espacioDerecha = areaVisibleWidth - xRelativo

    const margen = 40

    // ✅ Decidir posición
    let posicionVertical: 'arriba' | 'abajo'
    let posicionHorizontal: 'izquierda' | 'centro' | 'derecha'

    // VERTICAL: ¿Arriba o abajo del marcador?
    if (espacioAbajo >= popupHeight + margen) {
      posicionVertical = 'abajo'
    } else if (espacioArriba >= popupHeight + margen) {
      posicionVertical = 'arriba'
    } else {
      // Si no cabe en ninguno, elegir el que tenga más espacio
      posicionVertical = espacioArriba > espacioAbajo ? 'arriba' : 'abajo'
    }

    // HORIZONTAL: ¿Izquierda, centro o derecha del marcador?
    if (espacioDerecha >= popupWidth / 2 + margen && espacioIzquierda >= popupWidth / 2 + margen) {
      posicionHorizontal = 'centro'
    } else if (espacioIzquierda >= popupWidth + margen) {
      posicionHorizontal = 'izquierda'
    } else if (espacioDerecha >= popupWidth + margen) {
      posicionHorizontal = 'derecha'
    } else {
      posicionHorizontal = espacioIzquierda > espacioDerecha ? 'izquierda' : 'derecha'
    }

    // ✅ APLICAR POSICIÓN MANUALMENTE CON CSS
    let offsetX = 0
    let offsetY = 0
    let transformX = '0'
    let transformY = '0'

    if (posicionVertical === 'arriba') {
      offsetY = -20
      transformY = '-100%'
    } else {
      offsetY = 20
      transformY = '0'
    }

    if (posicionHorizontal === 'centro') {
      transformX = '-50%'
    } else if (posicionHorizontal === 'izquierda') {
      offsetX = -20
      transformX = '-100%'
    } else {
      offsetX = 20
      transformX = '0'
    }

    popup.style.transform = `translate(${transformX}, ${transformY})`
    this.popupOverlay.setPositioning('bottom-center' as any)
    this.popupOverlay.setOffset([offsetX, offsetY])
    this.popupOverlay.setPosition(coordinate)
  }

  actualizarMunicipios (): void {
    this.municipios = []
    this.municipioSeleccionado = ''
    this.municipioEnabled = false
    if (this.provinciaSeleccionada) {
      const municipiosSet = new Set<string>()
      institutos
        .filter(c => c.DTERRC === this.provinciaSeleccionada)
        .forEach(c => municipiosSet.add(c.DMUNIC))
      this.municipios = Array.from(municipiosSet).sort()
      this.municipioEnabled = true
      this.actualizarMapa(true)
    } else {
      this.actualizarMapa(true)
    }
  }

  actualizarMapa(shouldFit: boolean = false): void {
    if (!this.map) return;
  
    if (!this.provinciaSeleccionada && 
        !this.municipioSeleccionado && 
        !this.tipoCentroSeleccionado && 
        !this.moduloSeleccionado) {
      
      if (this.pinsLayer) this.map.removeLayer(this.pinsLayer);
      
      this.pinsLayer = new VectorLayer({
        source: new VectorSource({ features: [] })
      });
      this.map.addLayer(this.pinsLayer);
      
      this.map.getView().fit(this.euskadiExtent, {
        duration: 400,
        padding: [30, 30, 30, 30],
        maxZoom: 10.5
      });
      
      return;
    }
  
    const normaliza = (x: string) => (x || '').trim().toUpperCase();
  
    let filtrados = institutos.filter(centro => {
      let insertar = true;
      if (this.provinciaSeleccionada && normaliza(centro.DTERRC) !== normaliza(this.provinciaSeleccionada)) insertar = false;
      if (this.municipioSeleccionado && normaliza(centro.DMUNIC) !== normaliza(this.municipioSeleccionado)) insertar = false;
      if (this.tipoCentroSeleccionado && normaliza(centro.DGENRC) !== normaliza(this.tipoCentroSeleccionado)) insertar = false;
      if (this.moduloSeleccionado) {
        const ciclo = this.ciclos.find(c => c.codcicl === Number(this.moduloSeleccionado));
        if (!(ciclo && ciclo.centros.includes(centro.CCEN))) insertar = false;
      }
      return insertar;
    });
  
    const features = filtrados
      .filter(
        centro =>
          centro.COOR_X &&
          centro.COOR_Y &&
          !isNaN(Number(centro.COOR_X)) &&
          !isNaN(Number(centro.COOR_Y))
      )
      .map(centro => {
        const x = Number(centro.COOR_X);
        const y = Number(centro.COOR_Y);
        const point = transform([x, y], 'EPSG:25830', 'EPSG:3857');
        const tipo = centro.DGENRC;
        const icon = this.tipoCentroIcono[tipo] || 'assets/images/marker-default.png';
        const contenido = this.getPopupHTML(centro);
        
        // ✅ Crear nombre para tooltip (DGENRC + NOM + DGENRE)
        const tooltipNombre = `${centro.DGENRC || ''} ${centro.NOM || ''} ${centro.DGENRE || ''}`.trim();
        
        const feature = new Feature({
          geometry: new Point(point),
          name: centro.NOM,
          tooltipNombre: tooltipNombre,
          contenido
        });
        feature.setStyle(
          new Style({
            image: new Icon({ src: icon, scale: 0.15 })
          })
        );
        return feature;
      });
  
    if (this.pinsLayer) this.map.removeLayer(this.pinsLayer);
  
    this.pinsLayer = new VectorLayer({
      source: new VectorSource({ features })
    });
    this.map.addLayer(this.pinsLayer);
  
    if (shouldFit && features.length > 0) {
      const source = this.pinsLayer.getSource();
      if (!source) return;
      const extent = source.getExtent();
      const isValidExtent = extent && extent[0] !== Infinity && extent[2] !== -Infinity;
      const width = extent ? Math.abs(extent[2] - extent[0]) : 0;
      const height = extent ? Math.abs(extent[3] - extent[1]) : 0;
      if (isValidExtent && width > 10 && height > 10) {
        this.map.getView().fit(extent, {
          maxZoom: 13,
          padding: [40, 40, 40, 40],
          duration: 400
        });
      } else if (isValidExtent && extent) {
        const center = [
          (extent[0] + extent[2]) / 2,
          (extent[1] + extent[3]) / 2
        ];
        this.map.getView().setCenter(center);
        this.map.getView().setZoom(12);
      } else {
        this.map.getView().fit(this.euskadiExtent, {
          duration: 400,
          padding: [30, 30, 30, 30],
          maxZoom: 10.5
        });
      }
    } else if (shouldFit && features.length === 0) {
      this.map.getView().fit(this.euskadiExtent, {
        duration: 400,
        padding: [30, 30, 30, 30],
        maxZoom: 10.5
      });
    }
  }

  private getPopupHTML (centro: any): string {
    const rows: string[] = []
    if (centro.NOM) rows.push(`<strong>${centro.NOM}</strong>`)
    if (centro.DOMI) rows.push(`Dirección/Helbidea: ${centro.DOMI}`)
    if (centro.DMUNIC) rows.push(`Municipio/Udaleria: ${centro.DMUNIC}`)
    if (centro.DTERRC) rows.push(`Provincia/Probintzia: ${centro.DTERRC}`)
    if (centro.TEL1) rows.push(`Teléfono: ${centro.TEL1}`)
    if (centro.TFAX) rows.push(`Fax: ${centro.TFAX}`)
    if (centro.EMAIL) rows.push(`Email: ${centro.EMAIL}`)
    if (centro.PAGINA)
      rows.push(
        `<a href="${centro.PAGINA}" target="_blank">Visitar sitio web</a>`
      )
    return rows.join('<br/>')
  }
}