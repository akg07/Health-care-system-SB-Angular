package com.coforge.hms.model;

import java.util.Date;

import javax.persistence.CascadeType;
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

@Entity // -> Init Database, Create a table
@Table(name = "BILL") // -> Give a name to specific entity
public class Bill {

	@Id  // -> Primary Key
	@GeneratedValue(strategy = GenerationType.IDENTITY) // -> Auto Increment
	@Column(name = "bill_Id") // -> Give a specific name to a column
	private long bId;
	
	@Column(name = "bill_amount")
	private double bAmt;
	
	@Column(name = "bill_ins")
	private boolean isInsuared;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "bill_date")
	private Date billDate;
	
	@OneToOne  // -> One to one mapping
	@JoinColumn(name = "INS_NO") // -> Which column has to be join 
	private Insurance insurance;
	
	@OneToOne
	@JoinColumn(name = "pid")
	private Patient patient;

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
	
	
}
