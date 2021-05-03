package com.coforge.hms.service;

import java.util.List;
import java.util.Map;

import com.coforge.hms.dto.DoctorDTO;

public interface DoctorService {
	
	public DoctorDTO save(DoctorDTO doctor);
    public DoctorDTO update(DoctorDTO doctor, long docId) throws Exception;
	public DoctorDTO getById(long doctorId) throws Exception;
	public List<DoctorDTO> getAll();
	public Map<String, Boolean> delete(long doctorId) throws Exception;
	public boolean existsByNumber(DoctorDTO doc);

}
