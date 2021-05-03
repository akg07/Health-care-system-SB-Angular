package com.coforge.hms.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coforge.hms.dto.PatientDTO;
import com.coforge.hms.model.Patient;
import com.coforge.hms.repository.PatientRepository;

@Service
@Transactional
public class PatientServiceImpl implements PatientService {

	@Autowired
	private PatientRepository pRepo;

	private Patient convertDTOtoModel(PatientDTO patientDTO) {

		Patient patient = new Patient();

		patient.setPid(patientDTO.getPid());
		patient.setpName(patientDTO.getpName());
		patient.setpDob(patientDTO.getpDob());
		patient.setpMobileNo(patientDTO.getpMobileNo());
		patient.setpAdd(patientDTO.getpAdd());
		patient.setDoc(patientDTO.getDoc());
		patient.setTest(patientDTO.getTest());

		return patient;
	}

	private PatientDTO convertModelToDTO(Patient patient) {
		return new PatientDTO(patient);
	}

	@Override
	public PatientDTO save(PatientDTO patientDTO) {
		Patient patient = convertDTOtoModel(patientDTO); // convert dto to model for database interaction
		pRepo.save(patient);
		return convertModelToDTO(patient); // return DTO
	}

	@Override
	public PatientDTO update(PatientDTO patient, long pid) throws Exception {
		PatientDTO cpyPat = getById(pid);

		cpyPat.setpName(patient.getpName());
		cpyPat.setpAdd(patient.getpAdd());
		cpyPat.setpDob(patient.getpDob());
		cpyPat.setpMobileNo(patient.getpMobileNo());

		cpyPat.setDoc(patient.getDoc());
		cpyPat.setTest(patient.getTest());

		Patient pat = convertDTOtoModel(cpyPat);

		// step 2
		pRepo.save(pat);

//		step 3
		return convertModelToDTO(pat);
	}

	@Override
	public PatientDTO getById(long pid) throws Exception {
		Patient  patient = pRepo.findById(pid)
				.orElseThrow(() -> new Exception("ID NOT FOUND EXCEPTION :::: " + pid));
		return convertModelToDTO(patient);
	}

	@Override
	public List<PatientDTO> getAll() {
		List<Patient> patientList = pRepo.findAll();
		List<PatientDTO> patientDTOList = new ArrayList<>();
		
		for(Patient patient : patientList) {
			patientDTOList.add(convertModelToDTO(patient));
		}
		
		return patientDTOList;
	}

	@Override
	public Map<String, Boolean> delete(long pid) throws Exception {
		Patient patient = convertDTOtoModel(getById(pid));
		pRepo.delete(patient);
		Map<String, Boolean> response = new HashMap<>();
		
		response.put("Delete", Boolean.TRUE);
		
		return response;
	}

	@Override
	public boolean existsByNumber(PatientDTO patient) {
		Patient pat = pRepo.existsPatientByPMobileNo(patient.getpMobileNo());
		
		if(pat != null) {
			return true;
		}
		else {
			return false;
		}
	}

}
