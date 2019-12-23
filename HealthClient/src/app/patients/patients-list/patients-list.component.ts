import { Component, OnInit } from '@angular/core';
import { IPatient } from '../shared/interfaces';

@Component({
    selector: 'app-patients-list',
    templateUrl: './patients-list.component.html'
    
})

export class PatientsListComponent implements OnInit {
    
    filteredPatients : IPatient[] = [];
    // customersOrderTotal: number;
    // currencyCode: string = 'USD';

    constructor() {}

    ngOnInit() {
       
    }

    // calculateOrders() {
    //     this.customersOrderTotal = 0;
    //     this.filteredCustomers.forEach((cust: ICustomer) => {
    //         this.customersOrderTotal += cust.orderTotal;
    //     });
    // }
}