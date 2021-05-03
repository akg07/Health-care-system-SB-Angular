package com.coforge.hms.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coforge.hms.dto.DoctorDTO;
import com.coforge.hms.model.Doctor;
import com.coforge.hms.repository.DoctorRepository;

@Service
@Transactional
public class DoctorServiceImpl implements DoctorService{

	@Autowired
	private DoctorRepository dRepo;
	
	private Doctor convertDTOtoModel(DoctorDTO doctorDTO) {
		
		Doctor doctor = new Doctor();
		
		doctor.setDoctorId(doctorDTO.getDoctorId());
		doctor.setDoctorName(doctorDTO.getDoctorName());
		doctor.setDoctorAddress(doctorDTO.getDoctorAddress());
		doctor.setDoctorPhoneNO(doctorDTO.getDoctorPhoneNO());
		doctor.setDepartment(doctorDTO.getDepartment());
		doctor.setSpecialization(doctorDTO.getSpecialization());
		
		return doctor;
	}
	
	/*
	 * Convert Model To DTO
	 */
	private DoctorDTO convertModelToDTO(Doctor doc) {
		return new DoctorDTO(doc);
	}

	@Override
	public DoctorDTO save(DoctorDTO doctor) {
		Doctor doc = convertDTOtoModel(doctor);
		dRepo.save(doc);
		return convertModelToDTO(doc);
	}

	@Override
	public DoctorDTO update(DoctorDTO doctor, long doctorId) throws Exception {
		DoctorDTO cpyDoctor = getById(doctorId);
		
		cpyDoctor.setDoctorName(doctor.getDoctorName());
		cpyDoctor.setDoctorAddress(doctor.getDoctorAddress());
		cpyDoctor.setDoctorPhoneNO(doctor.getDoctorPhoneNO());
		cpyDoctor.setDepartment(doctor.getDepartment());
		cpyDoctor.setSpecialization(doctor.getSpecialization());
		
		Doctor doc = convertDTOtoModel(cpyDoctor);
		dRepo.save(doc);
		return convertModelToDTO(doc);
	}

	@Override
	public DoctorDTO getById(long doctorId) throws Exception {
		Doctor doctor = dRepo.findById(doctorId)
				.orElseThrow(() -> new Exception("ID NOT FOUND EXCEPTION ::::" + doctorId));
		return convertModelToDTO(doctor);
	}

	@Override
	public List<DoctorDTO> getAll() {
		List<Doctor> docList = dRepo.findAll();
		List<DoctorDTO> docDTOList = new ArrayList<>();
		
		for(Doctor doc : docList) {
			docDTOList.add(convertModelToDTO(doc));
		}
		return docDTOList;
	}

	@Override
	public Map<String, Boolean> delete(long doctorId) throws Exception {
		Doctor doc = convertDTOtoModel(getById(doctorId));
		
		dRepo.delete(doc);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Delete", Boolean.TRUE);
		
		return response;
	}

	@Override
	public boolean existsByNumber(DoctorDTO docDto) {
		Doctor doc = dRepo.existsDoctorByDoctorPhoneNO(docDto.getDoctorPhoneNO());
		if(doc != null) {
			return true;
		}
		else {
			return false;
		}
	}
}
