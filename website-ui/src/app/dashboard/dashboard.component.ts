import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    @ViewChild('espresso') espresso: ElementRef;
    @ViewChild('coffee') coffee: ElementRef;
    @ViewChild('espressoText') espressoText: ElementRef;
    @ViewChild('coffeeText') coffeeText: ElementRef;
    @ViewChild('introText') introText: ElementRef;
    @ViewChild('stripL') stripL: ElementRef;
    @ViewChild('stripR') stripR: ElementRef;
    @ViewChild('stripM') stripM: ElementRef;
    @ViewChild('stripM2') stripM2: ElementRef;

    constructor() {}

    ngOnInit() {}

    hoverLogo(mouseEnter: boolean, type: string) {
        if (mouseEnter) {
            this.stripL.nativeElement.classList.toggle('active');
            this.stripM.nativeElement.classList.toggle('active');
            this.stripM2.nativeElement.classList.toggle('active');
            this.stripR.nativeElement.classList.toggle('active');
            this.introText.nativeElement.classList.toggle('active');
            if (type === 'espresso') {
                this.espresso.nativeElement.classList.toggle('active');
                this.espressoText.nativeElement.classList.toggle('active');
            } else {
                this.coffee.nativeElement.classList.toggle('active');
                this.coffeeText.nativeElement.classList.toggle('active');
            }
        } else {
            this.stripL.nativeElement.classList.toggle('active');
            this.stripM.nativeElement.classList.toggle('active');
            this.stripM2.nativeElement.classList.toggle('active');
            this.stripR.nativeElement.classList.toggle('active');
            this.introText.nativeElement.classList.toggle('active');
            if (type === 'espresso') {
                this.espresso.nativeElement.classList.toggle('active');
                this.espressoText.nativeElement.classList.toggle('active');
            } else {
                this.coffee.nativeElement.classList.toggle('active');
                this.coffeeText.nativeElement.classList.toggle('active');
            }
        }
    }
}
