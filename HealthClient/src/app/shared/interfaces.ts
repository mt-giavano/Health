
export interface IPatient {
    patientId: number;
    name: string;
    ailments: IAilment[];
}

export interface IAilment {
    patientId: number;
    name : string;
}

// export interface IMedication {
//     patientId: number;
//     name : string;
//     doses : string;
// }