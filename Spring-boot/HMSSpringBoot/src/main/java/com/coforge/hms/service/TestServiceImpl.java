package com.coforge.hms.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coforge.hms.dto.TestDTO;
import com.coforge.hms.model.Test;
import com.coforge.hms.repository.TestRepository;

@Service
@Transactional
public class TestServiceImpl implements TestService{

	@Autowired
	private TestRepository tRepo;
	
	private Test convertDTOtoModel(TestDTO testDTO) {

		Test test = new Test();

		test.setTid(testDTO.getTid());
		test.settName(testDTO.gettName());
		test.settDate(testDTO.gettDate());
		test.setDoctor(testDTO.getDoctor());

		return test;
	}

	private TestDTO convertModelToDTO(Test test) {
		return new TestDTO(test);
	}
	
	@Override
	public TestDTO save(TestDTO testDTO) {
//		testDTO.settDate(new Date());
		Test test = convertDTOtoModel(testDTO);
		tRepo.save(test);
		return convertModelToDTO(test);
	}

	@Override
	public TestDTO update(TestDTO testDTO, long tid) throws Exception {
		TestDTO copytest=getById(tid);
		copytest.settDate(testDTO.gettDate());
		copytest.settName(testDTO.gettName());
		copytest.setDoctor(testDTO.getDoctor());
		Test test = convertDTOtoModel(copytest);
		tRepo.save(test);
		return convertModelToDTO(test);
	}

	@Override
	public TestDTO getById(long tid) throws Exception {
		Test test = tRepo.findById(tid)
				.orElseThrow(() -> new Exception("ID NOT FOUND EXCEPTION :::: " + tid));
		 return convertModelToDTO(test);
	}

	@Override
	public List<TestDTO> getAll() {
		List<Test> testList = tRepo.findAll();
		List<TestDTO> testDTOList = new ArrayList<>();
		
		for(Test test : testList) {
			testDTOList.add(convertModelToDTO(test));
		}
		return testDTOList;
	}

	@Override
	public Map<String, Boolean> delete(long tid) throws Exception {
		Test test = convertDTOtoModel(getById(tid));
		tRepo.delete(test);
		Map<String, Boolean> response = new HashMap<>();
		
		response.put("Delete", Boolean.TRUE);
		
		return response;
	}
}
