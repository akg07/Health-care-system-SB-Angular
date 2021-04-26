import { Doctor } from "../doctor/Doctor";
import { Test } from "../test/Test";

export class Patient{
    pid: number;
    pName: string;
    pMobileNo: number;
    pAdd: string;
    pDob: Date;
    doc: Doctor = {
        doctorId: null,
        doctorName: '',
        doctorPhoneNO: null,
        doctorAddress: '',
        department: null,
        specialization: null
    };
    test: Test ={
        tid: null,
        tName: '',
        tDate: '',
        doctor: null
    }
}