package com.coforge.hms.dto;

import com.coforge.hms.model.Doctor;
import com.coforge.hms.model.Patient;
import com.coforge.hms.model.Test;

public class PatientDTO {

	private long pid;
	private String pName;
	private String pDob;
	private String pAdd;
	private long pMobileNo;
	private Doctor doc;
	private Test test;

	public PatientDTO() {

	}

	public PatientDTO(Patient patient) {
		this.pid = patient.getPid();
		this.pName =patient.getpName();
		this.pDob = patient.getpDob();
		this.pAdd = patient.getpAdd();
		this.pMobileNo =patient.getpMobileNo(); 
		this.doc =patient.getDoc();
		this.test = patient.getTest();
	}

	public long getPid() {
		return pid;
	}

	public void setPid(long pid) {
		this.pid = pid;
	}

	public String getpName() {
		return pName;
	}

	public void setpName(String pName) {
		this.pName = pName;
	}

	public String getpDob() {
		return pDob;
	}

	public void setpDob(String pDob) {
		this.pDob = pDob;
	}

	public String getpAdd() {
		return pAdd;
	}

	public void setpAdd(String pAdd) {
		this.pAdd = pAdd;
	}

	public long getpMobileNo() {
		return pMobileNo;
	}

	public void setpMobileNo(long pMobileNo) {
		this.pMobileNo = pMobileNo;
	}

	public Doctor getDoc() {
		return doc;
	}

	public void setDoc(Doctor doc) {
		this.doc = doc;
	}

	public Test getTest() {
		return test;
	}

	public void setTest(Test test) {
		this.test = test;
	}

	
}
