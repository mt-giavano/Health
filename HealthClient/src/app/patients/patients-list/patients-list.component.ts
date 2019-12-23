import { Component, OnInit, Input } from '@angular/core';
import { IPatient } from '../shared/interfaces';

@Component({
    selector: 'app-patients-list',
    templateUrl: './patients-list.component.html'
    
})

export class PatientsListComponent implements OnInit {
    
    private _patients: IPatient[] = [];

    @Input() get patients() : IPatient[]{
        return this._patients;
    }

    set patients(value:IPatient[]) {
        if (value){
            this.filteredPatients = this._patients = value;
        }
    }


    filteredPatients : IPatient[] = [];

    constructor() {}

    ngOnInit() {
    //    this.filteredPatients = [
    //     { id: 1, name: 'john Doe' },
    //     { id: 2, name: 'Jane Doe' },
    //     { id: 3, name: 'gia vano' },
    // ];

    }


    filter(data: string) {
        if (data) {
            this.filteredPatients = this.patients.filter((patient: IPatient) => {
                return patient.id.toString().indexOf(data.toLowerCase()) > -1 ||
                    patient.name.toLowerCase().indexOf(data.toLowerCase()) > -1;
            });
        } else {
            this.filteredPatients = this.patients;
        }
    }

    sort(prop: string)
    {
        
    }
}