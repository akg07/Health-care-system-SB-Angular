package com.coforge.hms.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "DOCTOR")
public class Doctor {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "DOC_ID")
	private long doctorId;

	@Column(name = "DOC_NAME")
	private String doctorName;

	@Column(name = "DOC_ADDRESS")
	private String doctorAddress;

	@Column(name = "PHONE_NO")
	private long doctorPhoneNO;

	@OneToOne
	@JoinColumn(name = "DEP_ID")
	private Department department;

	@OneToOne
	@JoinColumn(name = "SPEC_ID")
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

	public Specialization getSepcialization() {
		return specialization;
	}

	public void setSpecialization(Specialization specialization) {
		this.specialization = specialization;
	}

	
}
