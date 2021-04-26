// import { Department } from "../department/Department";
// import { Specialization } from "../specialization/Specialization";

// export class Doctor{
//     doctorId:number;
//     doctorName: string;
//     doctorPhoneNO: number;
//     doctorAddress: string;

//     department: Department;
//     specialization: Specialization;
// }
import { Department } from "../department/Department";
import { Specialization } from "../specialization/Specialization";

export class Doctor{
    doctorId:number;
    doctorName: string;
    doctorPhoneNO: number;
    doctorAddress: string;

    department: Department={
        deptId:null,
        deptName:''
    }
    specialization: Specialization={
        specId: null,
        speciality: ''
    }
}