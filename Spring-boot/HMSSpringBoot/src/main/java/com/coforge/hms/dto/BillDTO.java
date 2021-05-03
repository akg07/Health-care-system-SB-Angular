package com.coforge.hms.dto;

import java.util.Date;

import com.coforge.hms.model.Bill;
import com.coforge.hms.model.Insurance;
import com.coforge.hms.model.Patient;

public class BillDTO {

	private long bId;
	private double bAmt;
	private boolean isInsuared;
	private Insurance insurance;
	private Patient patient;
	private Date billDate;

	public long getbId() {
		return bId;
	}

	public void setbId(long bId) {
		this.bId = bId;
	}

	public double getbAmt() {
		return bAmt;
	}

	public void setbAmt(double bAmt) {
		this.bAmt = bAmt;
	}

	public boolean getIsInsuared() {
		return isInsuared;
	}

	public void setIsInsuared(boolean isInsuared) {
		this.isInsuared = isInsuared;
	}

	public Insurance getInsurance() {
		return insurance;
	}

	public void setInsurance(Insurance insurance) {
		this.insurance = insurance;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}
	
	

	public Date getBillDate() {
		return billDate;
	}

	public void setBillDate(Date billDate) {
		this.billDate = billDate;
	}

	public void setInsuared(boolean isInsuared) {
		this.isInsuared = isInsuared;
	}

	public BillDTO(Bill bill) {

		this.bId = bill.getbId();
		this.bAmt = bill.getbAmt();
		this.isInsuared = bill.getIsInsuared();
		this.insurance = bill.getInsurance();
		this.patient = bill.getPatient();
		this.billDate = bill.getBillDate();
	}

	public BillDTO() {
	}
}
