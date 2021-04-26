package com.coforge.hms.dto;

import com.coforge.hms.model.Department;

public class DepartmentDTO {
	
	private long deptId;
	private String deptName;
	
	public long getDeptId() {
		return deptId;
	}
	public void setDeptId(long deptId) {
		this.deptId = deptId;
	}
	public String getDeptName() {
		return deptName;
	}
	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}
	public DepartmentDTO(Department department) {
		
		this.deptId = department.getDeptId();
		this.deptName = department.getDeptName();
	}
	public DepartmentDTO() {
		
		// TODO Auto-generated constructor stub
	}
	
	
}
