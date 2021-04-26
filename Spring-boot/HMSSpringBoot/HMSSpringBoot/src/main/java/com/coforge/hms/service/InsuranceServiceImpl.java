package com.coforge.hms.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coforge.hms.dto.InsuranceDTO;
import com.coforge.hms.model.Insurance;
import com.coforge.hms.repository.InsuranceRepository;

@Service
@Transactional
public class InsuranceServiceImpl implements InsuranceService{

	@Autowired
	private InsuranceRepository iRepo;
	
	private Insurance convertDTOtoModel(InsuranceDTO insDTO) {

		Insurance ins = new Insurance();

		ins.setiNo(insDTO.getiNo());
		ins.setiAmt(insDTO.getiAmt());
		ins.setiExpiryDate(insDTO.getiExpiryDate());
		ins.setPatient(insDTO.getPatient());

		return ins;
	}

	private InsuranceDTO convertModelToDTO(Insurance ins) {
		return new InsuranceDTO(ins);
	}
	
	@Override
	public InsuranceDTO save(InsuranceDTO insurance) {
		Insurance ins = convertDTOtoModel(insurance);
		iRepo.save(ins);
		return convertModelToDTO(ins);
	}

	@Override
	public InsuranceDTO update(InsuranceDTO insurance, long iNo) throws Exception{
		InsuranceDTO copyins=getById(iNo);
		
		copyins.setiAmt(insurance.getiAmt());
		copyins.setiExpiryDate(insurance.getiExpiryDate());
		copyins.setPatient(insurance.getPatient());
		
		Insurance ins = convertDTOtoModel(copyins);
		iRepo.save(ins);
		return convertModelToDTO(ins);
	}

	@Override
	public InsuranceDTO getById(long iNo) throws Exception{
		Insurance ins =iRepo.findById(iNo)
				.orElseThrow(() -> new Exception("ID NOT FOUND :::: " + iNo));
		return convertModelToDTO(ins);
	}

	@Override
	public List<InsuranceDTO> getAll() {
		List<Insurance> insList = iRepo.findAll(); 
		List<InsuranceDTO> insDTOList = new ArrayList<>();
		for(Insurance ins : insList) {
			insDTOList.add(convertModelToDTO(ins));
		}
		return insDTOList;
	}

	@Override
	public Map<String, Boolean> delete(long iNo) throws Exception{
		Insurance ins = convertDTOtoModel(getById(iNo));
		iRepo.delete(ins);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("Delete", Boolean.TRUE);
		
		return response;
		
	}
}
