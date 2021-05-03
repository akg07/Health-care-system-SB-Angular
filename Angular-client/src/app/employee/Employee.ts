import { Department } from "../department/Department";

export class Employee{
    empId: number;
    empName: string;
    empMobileNo: number;
    empAdd: string;
    department: Department={
        deptId:null,
        deptName: '',
    };
}