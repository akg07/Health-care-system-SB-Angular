package com.coforge.hms.dto;

import java.util.Date;

import com.coforge.hms.model.Doctor;
import com.coforge.hms.model.Medicos;
import com.coforge.hms.model.Patient;

public class MedicosDTO {

	private long mId;
	private String mRecord;
	private Date date;
	private int price;
	private int quantity;
	private long total;
	private Doctor doctor;
	private Patient patient;

	public MedicosDTO() {

	}

	public MedicosDTO(Medicos medicos) {
		this.mId = medicos.getmId();
		this.mRecord = medicos.getmRecord();
		this.date = medicos.getDate();
		this.doctor = medicos.getDoctor();
		this.patient = medicos.getPatient();
		this.price = medicos.getPrice();
		this.quantity = medicos.getQuantity();
		this.total = medicos.getTotal();
	}

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

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public long getTotal() {
		return total;
	}

	public void setTotal(long total) {
		this.total = total;
	}

}
