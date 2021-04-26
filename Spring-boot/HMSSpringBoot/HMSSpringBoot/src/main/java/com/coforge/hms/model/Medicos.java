package com.coforge.hms.model;


import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "MEDICOS")
public class Medicos {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "MED_ID")
	private long mId;
	
	@Column(name = "MED_RECORD")
	private String mRecord;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "MED_DATE")
	private Date date;

	@OneToOne
	@JoinColumn(name = "DOC_ID")
	private Doctor doctor;
	
	@OneToOne
	@JoinColumn(name = "pid")
	private Patient patient;

	public long getmId() {
		return mId;
	}

	public void setmId(long mId) {
		this.mId = mId;
	}

	public String getmRecord() {
		return mRecord;
	}

	public void setmRecord(String mRecord) {
		this.mRecord = mRecord;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	
	
	
	
}
