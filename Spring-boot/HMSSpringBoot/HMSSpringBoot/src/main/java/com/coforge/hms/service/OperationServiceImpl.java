package com.coforge.hms.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coforge.hms.dto.OperationDTO;
import com.coforge.hms.model.Operation;
import com.coforge.hms.repository.OperationRepository;

@Service
@Transactional
public class OperationServiceImpl implements OperationService {

	@Autowired
	private OperationRepository oRepo;

	private Operation convertDTOtoModel(OperationDTO OperationDTO) {

		Operation operation = new Operation();

		operation.setOid(OperationDTO.getOid());
		operation.setoName(OperationDTO.getoName());
		operation.setDoctor(OperationDTO.getDoctor());
		operation.setPatient(OperationDTO.getPatient());

		return operation;
	}

	private OperationDTO convertModelToDTO(Operation operation) {
		return new OperationDTO(operation);
	}

	@Override
	public OperationDTO save(OperationDTO operationDTO) {
		Operation operation = convertDTOtoModel(operationDTO); // convert dto to model for database interaction
		oRepo.save(operation);
		return convertModelToDTO(operation); // return DTO
	}

	@Override
	public OperationDTO update(OperationDTO operation, long oid) throws Exception {
		OperationDTO cpy = getById(oid);

		cpy.setoName(operation.getoName());
		cpy.setDoctor(operation.getDoctor());
		cpy.setPatient(operation.getPatient());

		// step 1
		Operation op = convertDTOtoModel(cpy);

		// step 2
		oRepo.save(op);

		// step 3
		return convertModelToDTO(op);
	}

	@Override
	public OperationDTO getById(long oid) throws Exception {
		Operation operation = oRepo.findById(oid)
				.orElseThrow(() -> new Exception("ID NOT FOUND EXCEPTION :::: " + oid));
		return convertModelToDTO(operation);
	}

	@Override
	public List<OperationDTO> getAll() {
		// TODO Auto-generated method stub
		List<Operation> operationList = oRepo.findAll();
		List<OperationDTO> operationDTOList = new ArrayList<>();
		
		for(Operation operation : operationList) {
			operationDTOList.add(convertModelToDTO(operation));
		}
		
		return operationDTOList;
	}

	@Override
	public Map<String, Boolean> delete(long oid) throws Exception {
		Operation operation = convertDTOtoModel(getById(oid));
		oRepo.delete(operation);
		Map<String, Boolean> response = new HashMap<>();
		
		response.put("Delete", Boolean.TRUE);
		
		return response;
	}

}
