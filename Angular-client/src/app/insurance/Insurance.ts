// import { Patient } from "../patient/Patient";

// export class Insurance{
//     iNo: number;
//     iAmt: number;
//     iExpiryDate: string;
//     patient: Patient;
// }

import { Patient } from "../patient/Patient";

export class Insurance{
    iNo: number;
    iAmt: number;
    iExpiryDate: string;
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