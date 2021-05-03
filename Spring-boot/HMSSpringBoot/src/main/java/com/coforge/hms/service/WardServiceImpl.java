package com.coforge.hms.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coforge.hms.dto.WardDTO;
import com.coforge.hms.model.Ward;
import com.coforge.hms.repository.WardRepository;

@Service
@Transactional
public class WardServiceImpl implements WardService{

	@Autowired
	private WardRepository wRepo;

	private Ward convertDTOtoModel(WardDTO wardDTO) {

		Ward ward = new Ward();

		ward.setWid(wardDTO.getWid());
		ward.setWardName(wardDTO.getWardName());
		ward.setPatients(wardDTO.getPatient());
		ward.setDoctor(wardDTO.getDoctor());
		
		return ward;
	}

	private WardDTO convertModelToDTO(Ward ward) {
		return new WardDTO(ward);
	}
	
	@Override
	public WardDTO save(WardDTO wardDTO) {
		Ward ward = convertDTOtoModel(wardDTO);
		wRepo.save(ward);
		return convertModelToDTO(ward);
	}

	@Override
	public WardDTO update(WardDTO wardDTO, long wid)  throws Exception{
		WardDTO copyward=getById(wid);
		
		copyward.setWardName(wardDTO.getWardName());
		copyward.setDoctor(wardDTO.getDoctor());
		copyward.setPatient(wardDTO.getPatient());
		
		Ward ward = convertDTOtoModel(copyward);
		wRepo.save(ward);
		return convertModelToDTO(ward);
	}

	@Override
	public WardDTO getById(long wid) throws Exception{
		Ward ward = wRepo.findById(wid)
				.orElseThrow(() -> new Exception("ID NOT FOUND EXCEPTION :::: " + wid));
		return convertModelToDTO(ward);
	}

	@Override
	public List<WardDTO> getAll() {
		List<Ward> wardlList = wRepo.findAll();
		List<WardDTO> wardDTOList = new ArrayList<>();
		
		for(Ward ward : wardlList) {
			wardDTOList.add(convertModelToDTO(ward));
		}
		
		return wardDTOList;
	}

	@Override
	public Map<String, Boolean> delete(long wid)  throws Exception{
		Ward ward = convertDTOtoModel(getById(wid));
		wRepo.delete(ward);
		Map<String, Boolean> response = new HashMap<>();
		
		response.put("Delete", Boolean.TRUE);
		
		return response;
	}
	
	
}
