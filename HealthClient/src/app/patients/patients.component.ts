import { Component, OnInit } from '@angular/core';
import { IPatient } from '../shared/interfaces';

import { DataService } from '../core/data.service';

@Component({
    selector: 'app-patients',
    templateUrl: './patients.component.html'
    
})

export class PatientsComponent implements OnInit {
    
    title : string;
    // people : IPatient[];
    people : any[];
    
    // isVisible = true;

    // changeVisibility()
    // {
    //     this.isVisible = !this.isVisible;
    // }

    constructor(private dataService : DataService) {}

    ngOnInit() {
        
        this.title = 'Patients';

        this.dataService.getPatients()
            .subscribe((patients : IPatient[]) => this.people = patients);


        // this.people = [
        //     { id: 1, name: 'john Doe' },
        //     { id: 2, name: 'Jane Doe' },
        //     { id: 3, name: 'gia vano' }
        // ];
    }
}