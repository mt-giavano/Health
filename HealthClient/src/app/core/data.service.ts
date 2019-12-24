import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

import { IPatient, IAilment, IMedication } from '../shared/interfaces';

@Injectable()
export class DataService {

    baseUrl: string = 'https://localhost:5001/api/';

    // baseUrl : string ='assets/';

    constructor(private http: HttpClient) { }

    getPatients() : Observable<IPatient[]>{
        return this.http.get<IPatient[]>(this.baseUrl + 'patients')
            .pipe(
              catchError(this.handleError)
            );
    }

    // getPatient(id: number) : Observable<IPatient> {
    //   return this.http.get<IPatient[]>(this.baseUrl + 'patients')
    //     .pipe(
    //       map(patients => {
    //         let patient = patients.filter((cust: IPatient) => cust.id === id);
    //         return (patient && patient.length) ? patient[0] : null;
    //       }),
    //       catchError(this.handleError)
    //     )
    // }

    // getAilment(id: number) : Observable<IAilment[]> {
    //   return this.http.get<IAilment[]>(this.baseUrl + 'patients')
    //     .pipe(
    //       map(ailments => {
    //         let patientAilments = ailments.filter((ailment: IAilment) => ailment.patientid === id);
    //         return patientAilments;
    //       }),
    //       catchError(this.handleError)
    //     );
    // }



    private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
      }
      return Observable.throw(error || 'Node.js server error');
    }

}