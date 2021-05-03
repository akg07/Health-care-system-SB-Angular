package com.coforge.hms.dto;

import com.coforge.hms.model.Doctor;
import com.coforge.hms.model.Operation;
import com.coforge.hms.model.Patient;

public class OperationDTO {

	private long oid;
	private String oName;
	private Patient patient;
	private Doctor doctor;

	public OperationDTO() {
	}

	public OperationDTO(Operation operation) {
		super();
		this.oid = operation.getOid();
		this.oName = operation.getoName();
		this.patient = operation.getPatient();
		this.doctor = operation.getDoctor();
	}

	public long getOid() {
		return oid;
	}

	public void setOid(long oid) {
		this.oid = oid;
	}

	public String getoName() {
		return oName;
	}

	public void setoName(String oName) {
		this.oName = oName;
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
