import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { fotosNewBorn } from "../../environment";
import { ModalComponent } from "../modal/modal.component";

export abstract class Sesion {
    constructor(private modalService: NgbModal) {this.setDateLimits();}
    protected dateMin!:string;
    protected dateMax!:string;
    protected abstract setFotos():void;

    private setDateLimits(): void {
        const today = new Date();
        const twoWeeksLater = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000);
        this.dateMin = this.formatDate(today);
        this.dateMax = this.formatDate(twoWeeksLater);
    }

    private formatDate(date: Date): string {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    
    protected copiarCBU() {
    const cbu = "00000031000345678901"; // Reemplaza con tu CBU
    navigator.clipboard.writeText(cbu);
    alert("CBU copiado al portapapeles: " + cbu);
    }
    protected openModal(price: string, link: string, minDate:string, maxDate:string) {
        const modalRef = this.modalService.open(ModalComponent);
        modalRef.componentInstance.price = price;
        modalRef.componentInstance.link = link;
      }
}
