package com.coforge.hms.dto;

import com.coforge.hms.model.Department;
import com.coforge.hms.model.Employee;

public class EmployeeDTO {

	private long empId;
    private String empName;
	private long empMobileNo;
	private String empAdd;
	private Department department;
	
	public EmployeeDTO() {}
	
	public EmployeeDTO(Employee emp) {
		this.empId = emp.getEmpId();
		this.empName = emp.getEmpName();
		this.empMobileNo = emp.getEmpMobileNo();
		this.empAdd = emp.getEmpAdd();
		this.department = emp.getDepartment();
	}

	public long getEmpId() {
		return empId;
	}

	public void setEmpId(long empId) {
		this.empId = empId;
	}

	public String getEmpName() {
		return empName;
	}

	public void setEmpName(String empName) {
		this.empName = empName;
	}

	public long getEmpMobileNo() {
		return empMobileNo;
	}

	public void setEmpMobileNo(long empMobileNo) {
		this.empMobileNo = empMobileNo;
	}

	public String getEmpAdd() {
		return empAdd;
	}

	public void setEmpAdd(String empAdd) {
		this.empAdd = empAdd;
	}

	public Department getDepartment() {
		return department;
	}

	public void setDepartment(Department department) {
		this.department = department;
	}
	
	
}
