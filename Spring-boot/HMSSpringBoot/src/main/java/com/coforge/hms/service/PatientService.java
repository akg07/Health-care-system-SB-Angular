package com.coforge.hms.service;

import java.util.List;
import java.util.Map;

import com.coforge.hms.dto.PatientDTO;

public interface PatientService {

	public PatientDTO save(PatientDTO patient);
    public PatientDTO update(PatientDTO patient,  long pid) throws Exception;
	public PatientDTO getById(long pid) throws Exception;
	public List<PatientDTO> getAll();
	public Map<String, Boolean> delete(long pid) throws Exception;
	public boolean existsByNumber(PatientDTO patient);
}
