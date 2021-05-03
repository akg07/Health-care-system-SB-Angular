package com.coforge.hms.dto;

import com.coforge.hms.model.Specialization;

public class SpecializationDTO {

	private long specId;
	private String speciality;

	public SpecializationDTO() {
		super();
	}

	public SpecializationDTO(Specialization specialization) {
		super();
		this.specId = specialization.getSpecId();
		this.speciality = specialization.getSpeciality();
	}

	public long getSpecId() {
		return specId;
	}

	public void setSpecId(long specId) {
		this.specId = specId;
	}

	public String getSpeciality() {
		return speciality;
	}

	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}

}
