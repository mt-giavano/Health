
export interface IPatient {
    id: number;
    name: string;
}

export interface IAilment {
    patientid: number;
    name : string;
}

export interface IMedication {
    patientid: number;
    name : string;
    doses : string;
}