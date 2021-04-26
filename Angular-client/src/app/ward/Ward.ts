import { Doctor } from "../doctor/Doctor";
import { Patient } from "../patient/Patient";

export class Ward{
    wid: number;
    wardName: string;
    doctor: Doctor = {
        doctorId: null,
        doctorName: '',
        doctorPhoneNO: null,
        doctorAddress: '',
        department: null,
        specialization: null
    };
    patient: Patient ={
        pid: null,
        pName: '',
        pMobileNo: null,
        pAdd: '',
        pDob: null,
        doc: null,
        test: null,
    };
}