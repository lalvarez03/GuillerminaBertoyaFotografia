import { Component, Input, type OnInit, type OnDestroy } from "@angular/core"
import { interval, type Subscription } from "rxjs"

@Component({
  selector: "app-carroussel",
  templateUrl: "./carroussel.component.html",
  styleUrls: ["./carroussel.component.css"],
})
export class CarrousselComponent implements OnInit, OnDestroy {
  @Input() imagenes: string[] = []
  @Input() intervaloAutoplay = 3000 // 5 segundos por defecto

  indiceActual = 0
  autoplayActive = false
  private autoplaySubscription: Subscription | null = null

  constructor() {}

  ngOnInit() {
    this.precargarImagenes()
  }

  ngOnDestroy() {
    this.detenerAutoplay()
  }

  precargarImagenes() {
    this.imagenes.forEach((src, index) => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        console.log(`Imagen ${index + 1} cargada`)
      }
    })
  }

  siguiente() {
    this.indiceActual = (this.indiceActual + 1) % this.imagenes.length
  }

  anterior() {
    this.indiceActual = (this.indiceActual - 1 + this.imagenes.length) % this.imagenes.length
  }

  irA(indice: number) {
    this.indiceActual = indice
  }

  toggleAutoplay() {
    if (this.autoplayActive) {
      this.detenerAutoplay()
    } else {
      this.iniciarAutoplay()
    }
    this.autoplayActive = !this.autoplayActive
  }

  private iniciarAutoplay() {
    this.autoplaySubscription = interval(this.intervaloAutoplay).subscribe(() => {
      this.siguiente()
    })
  }

  private detenerAutoplay() {
    if (this.autoplaySubscription) {
      this.autoplaySubscription.unsubscribe()
      this.autoplaySubscription = null
    }
  }

  calcularProgreso(): number {
    return ((this.indiceActual + 1) / this.imagenes.length) * 100
  }
}

