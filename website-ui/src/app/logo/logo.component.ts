import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.css'],
})
export class LogoComponent implements OnInit {
    private espresso: boolean = false;
    private coffee: boolean = false;
    private profile: boolean = false;

    @Input()
    set type(type: string) {
        if (type === 'espresso') {
            this.espresso = true;
        } else if (type === 'coffee') {
            this.coffee = true;
        } else if (type === 'profile') {
            this.profile = true;
        }
    }

    @Input()
    size: number = 0;

    @Output() hovered = new EventEmitter<boolean>();

    constructor() {}

    ngOnInit() {}

    mouseEnter() {
        this.hovered.emit(true);
    }

    mouseLeave() {
        this.hovered.emit(false);
    }
}
