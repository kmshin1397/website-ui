import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
    constructor(private ResumeService: ResumeService) {}

    ngOnInit() {}
}
