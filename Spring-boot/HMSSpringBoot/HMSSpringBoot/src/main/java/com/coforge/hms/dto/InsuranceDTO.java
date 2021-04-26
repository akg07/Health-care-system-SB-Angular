package com.coforge.hms.dto;

import com.coforge.hms.model.Insurance;
import com.coforge.hms.model.Patient;

public class InsuranceDTO {

	private long iNo;
	private double iAmt;
	private String iExpiryDate;
	private Patient patient;
	
	public InsuranceDTO() {
		// TODO Auto-generated constructor stub
	}
	
	public InsuranceDTO(Insurance ins) {
		this.iNo = ins.getiNo();
		this.iAmt = ins.getiAmt();
		this.iExpiryDate = ins.getiExpiryDate();
		this.patient = ins.getPatient();
	}
	public long getiNo() {
		return iNo;
	}
	public void setiNo(long iNo) {
		this.iNo = iNo;
	}
	public double getiAmt() {
		return iAmt;
	}
	public void setiAmt(double iAmt) {
		this.iAmt = iAmt;
	}
	public String getiExpiryDate() {
		return iExpiryDate;
	}
	public void setiExpiryDate(String iExpiryDate) {
		this.iExpiryDate = iExpiryDate;
	}
	public Patient getPatient() {
		return patient;
	}
	public void setPatient(Patient patient) {
		this.patient = patient;
	}
	
	
}
