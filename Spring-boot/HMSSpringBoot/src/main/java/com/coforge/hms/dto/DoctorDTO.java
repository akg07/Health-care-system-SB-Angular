package com.coforge.hms.dto;

import com.coforge.hms.model.Department;
import com.coforge.hms.model.Doctor;
import com.coforge.hms.model.Specialization;

public class DoctorDTO {
	private long doctorId;
	private String doctorName;
	private String doctorAddress;
	private long doctorPhoneNO;
	private Department department;
	private Specialization specialization;
	
	public long getDoctorId() {
		return doctorId;
	}
	public void setDoctorId(long doctorId) {
		this.doctorId = doctorId;
	}
	public String getDoctorName() {
		return doctorName;
	}
	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}
	public String getDoctorAddress() {
		return doctorAddress;
	}
	public void setDoctorAddress(String doctorAddress) {
		this.doctorAddress = doctorAddress;
	}
	public long getDoctorPhoneNO() {
		return doctorPhoneNO;
	}
	public void setDoctorPhoneNO(long doctorPhoneNO) {
		this.doctorPhoneNO = doctorPhoneNO;
	}
	
	public Department getDepartment() {
		return department;
	}
	public void setDepartment(Department department) {
		this.department = department;
	}
	public Specialization getSpecialization() {
		return specialization;
	}
	
	public void setSpecialization(Specialization specialization) {
		this.specialization = specialization;
	}
	public DoctorDTO(Doctor doctor) {
		
		this.doctorId = doctor.getDoctorId();
		this.doctorName = doctor.getDoctorName();
		this.doctorAddress = doctor.getDoctorAddress();
		this.doctorPhoneNO = doctor.getDoctorPhoneNO();
		this.department = doctor.getDepartment();
		this.specialization = doctor.getSepcialization();
	}
	public DoctorDTO() {
		
		// TODO Auto-generated constructor stub
	}
	

}
