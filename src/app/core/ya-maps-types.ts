export var yandex: any;

export interface YandexMap extends MVCObject {

  constructor(el: HTMLElement, opts?: MapOptions): void;
   geoObjects: any;
}

export interface LatLng {
  constructor(lat: number, lng: number): void;
  lat(): number;
  lng(): number;
}

export interface Marker extends MVCObject {
  constructor(): void;
  setMap(map: YandexMap): void;
  setPosition(latLng: LatLng|LatLngLiteral): void;
}

export interface LatLngLiteral {
  lat: number;
  lng: number;
}

export interface MVCObject { addListener(eventName: string, handler: Function): MapsEventListener; }

export interface MapsEventListener { remove(): void; }

export interface MapOptions {
  zoom?: number;
  minZoom?: number;
  maxZoom?: number;
  center?: any;
}
