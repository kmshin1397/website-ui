import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    @ViewChild('espresso') espresso: ElementRef;
    @ViewChild('coffee') coffee: ElementRef;
    @ViewChild('stripL') stripL: ElementRef;
    @ViewChild('stripR') stripR: ElementRef;
    @ViewChild('stripM') stripM: ElementRef;

    private baseOpacity: number = 0.6;

    constructor() {}

    ngOnInit() {}

    hoverLogo(mouseEnter: boolean, type: string) {
        if (mouseEnter) {
            this.stripL.nativeElement.style.opacity = 1;
            this.stripM.nativeElement.style.opacity = 1;
            this.stripR.nativeElement.style.opacity = 1;
            if (type === 'espresso') {
                this.espresso.nativeElement.style.opacity = 1;
            } else {
                this.coffee.nativeElement.style.opacity = 1;
            }
        } else {
            this.stripL.nativeElement.style.opacity = this.baseOpacity;
            this.stripM.nativeElement.style.opacity = this.baseOpacity;
            this.stripR.nativeElement.style.opacity = this.baseOpacity;
            if (type === 'espresso') {
                this.espresso.nativeElement.style.opacity = this.baseOpacity;
            } else {
                this.coffee.nativeElement.style.opacity = this.baseOpacity;
            }
        }
    }
}
