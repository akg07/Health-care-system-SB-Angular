import { Doctor } from "../doctor/Doctor";

export class Test{
    tid: number;
    tName: string;
    tDate: string;
    doctor: Doctor = {
        doctorId: null,
        doctorName: '',
        doctorPhoneNO: null,
        doctorAddress: '',
        department: null,
        specialization: null
    };
}