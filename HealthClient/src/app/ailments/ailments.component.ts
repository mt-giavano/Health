import { Component, OnInit } from '@angular/core';
import { IAilment, IPatient } from '../shared/interfaces';
import { DataService } from '../core/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ailments',
  templateUrl: './ailments.component.html',
  styleUrls: ['./ailments.component.css']
})
export class AilmentsComponent implements OnInit {

  ailments: IPatient[] = [];
  patient: IPatient;

  // orders: IOrder[] = [];
  // customer: ICustomer;

  constructor(private dataService: DataService, 
              private route: ActivatedRoute) { }

  ngOnInit() {

    let patientId = +this.route.snapshot.paramMap.get('patientId');
  //let id = +this.route.snapshot.paramMap.get('id');

    this.dataService.getAilments(patientId).subscribe((ailments:IPatient[])=> {
      this.ailments = ailments;
    });
//   this.dataService.getOrders(id).subscribe((orders: IOrder[]) => {
  //     this.orders = orders;
  //   });

    this.dataService.getPatient(patientId).subscribe((patient: IPatient) => {
      this.patient = patient;
    });
  }
  //   this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
  //     this.customer = customer;
  //   });
  // }

}
