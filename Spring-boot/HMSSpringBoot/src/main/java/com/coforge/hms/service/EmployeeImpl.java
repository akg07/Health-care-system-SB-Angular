package com.coforge.hms.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coforge.hms.dto.EmployeeDTO;
import com.coforge.hms.model.Employee;
import com.coforge.hms.repository.EmployeeRepository;

@Service
@Transactional
public class EmployeeImpl implements EmployeeService {

	@Autowired
	private EmployeeRepository eRepo;

	private Employee convertDTOtoModel(EmployeeDTO empDTO) {

		Employee emp = new Employee();

		emp.setEmpId(empDTO.getEmpId());
		emp.setEmpName(empDTO.getEmpName());
		emp.setEmpAdd(empDTO.getEmpAdd());
		emp.setEmpMobileNo(empDTO.getEmpMobileNo());
		emp.setDepartment(empDTO.getDepartment());

		return emp;
	}

	private EmployeeDTO convertModelToDTO(Employee emp) {
		return new EmployeeDTO(emp);
	}

	@Override
	public EmployeeDTO save(EmployeeDTO employee) {
		Employee emp = convertDTOtoModel(employee);
		eRepo.save(emp);
		return convertModelToDTO(emp);
	}

	@Override
	public EmployeeDTO update(EmployeeDTO employee, long empId) throws Exception {
		EmployeeDTO copyemployee = getById(empId);
		
		copyemployee.setEmpMobileNo(employee.getEmpMobileNo());
		copyemployee.setEmpAdd(employee.getEmpAdd());
		copyemployee.setEmpName(employee.getEmpName());
		copyemployee.setDepartment(employee.getDepartment());

		Employee emp = convertDTOtoModel(copyemployee);
		eRepo.save(emp);
		return convertModelToDTO(emp);
	}

	@Override
	public EmployeeDTO getById(long empId) throws Exception {
		Employee emp = eRepo.findById(empId)
				.orElseThrow(() -> new Exception("ID NOT FOUND :::: " + empId));
		return convertModelToDTO(emp);
	}

	@Override
	public List<EmployeeDTO> getAll() {
		List<Employee> empList = eRepo.findAll(); 
		List<EmployeeDTO> empDtoList = new ArrayList<>();
		
		for(Employee emp : empList) {
			empDtoList.add(convertModelToDTO(emp));
		}
		return empDtoList;
	}

	@Override
	public Map<String, Boolean> delete(long empId) throws Exception {
		Employee emp = convertDTOtoModel(getById(empId));
		
		eRepo.delete(emp);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("Delete", Boolean.TRUE);
		return response;

	}

	@Override
	public boolean isExists(EmployeeDTO empDto) {
		Employee emp = eRepo.existsEmployeeByEmpMobileNo(empDto.getEmpMobileNo());
		if(emp != null) {
			return true;
		}else {			
			return false;
		}
	}

}
