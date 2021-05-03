package com.coforge.hms.model;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "WARD")
public class Ward {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "WARD_ID")
	private long wid;
	
	@Column(name = "WARD_NAME")
	private String wardName;

	@OneToOne
	@JoinColumn(name = "pid")  // change this to One to Many
	private Patient patient;

	@OneToOne
	@JoinColumn(name = "DOC_ID")  
	private Doctor doctor;

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

	public void setPatients(Patient patient) {
		this.patient = patient;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	@Override
	public String toString() {
		return "Ward [wid=" + wid + ", wardName=" + wardName + ", patient= ?" + ", doctor=" + doctor.getDoctorName()
				+ "]";
	}

}
