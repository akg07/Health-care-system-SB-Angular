import { Insurance } from "../insurance/Insurance";
import { Patient } from "../patient/Patient";

export class Bill{
    bId: number;
    bAmt: number;
    isInsuared: boolean;
    billDate: Date;
    insurance: Insurance = {
        iNo: null,
        iAmt: null,
        iExpiryDate: null,
        patient: null
    };

    patient: Patient = {
        pid: null,
        pName: null,
        pDob: null,
        pAdd: null,
        pMobileNo: null,
        doc: null,
        test: null
    };
}