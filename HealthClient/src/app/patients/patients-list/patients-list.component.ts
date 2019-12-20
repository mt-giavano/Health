import { Component, OnInit } from '@angular/core';

import { IPatient } from '../shared/interfaces';

@Component({
    selector: 'app-patients-list',
    templateUrl: './patients-list.component.html'
    
})

export class PatientsListComponent implements OnInit {
    
    filteredPatients : IPatient[] = [];

    constructor() {}

    ngOnInit() {
       
    }
}