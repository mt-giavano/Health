import { Component, OnInit } from '@angular/core';
import { IPatient } from './shared/interfaces';

@Component({
    selector: 'app-patients',
    templateUrl: './patients.component.html'
    
})

export class PatientsComponent implements OnInit {
    title : string;
    people : IPatient[];
    
    // isVisible = true;

    // changeVisibility()
    // {
    //     this.isVisible = !this.isVisible;
    // }

    constructor() {}

    ngOnInit() {
        this.title = 'Patients';
        this.people = [
            { id: 1, name: 'john Doe' },
            { id: 2, name: 'Jane Doe' },
        ];
    }
}