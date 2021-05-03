package com.coforge.hms.dto;



import com.coforge.hms.model.Doctor;
import com.coforge.hms.model.Patient;
import com.coforge.hms.model.Ward;

public class WardDTO {

	private long wid;
	private String wardName;
	private Patient patient;
	private Doctor doctor;
	
	public WardDTO() {

	}

	public WardDTO(Ward ward) {
		super();
		this.wid = ward.getWid();
		this.wardName = ward.getWardName();
		this.patient = ward.getPatient();
		this.doctor = ward.getDoctor();
	}

	public long getWid() {
		return wid;
	}

	public void setWid(long wid) {
		this.wid = wid;
	}

	public String getWardName() {
		return wardName;
	}

	public void setWardName(String wardName) {
		this.wardName = wardName;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}
	
	
}
