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
@Table(name = "PATIENT")
public class Patient {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "pid")
	private long pid;

	@Column(name = "pname")
	private String pName;

	@Column(name = "pdob")
	private String pDob;

	@Column(name = "padd")
	private String pAdd;

	@Column(name = "pmobile")
	private long pMobileNo;

	@OneToOne
	@JoinColumn(name = "DOC_ID")
	private Doctor doc;

	@OneToOne
	@JoinColumn(name = "tid") // change this to oneToMany
	private Test test;

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
