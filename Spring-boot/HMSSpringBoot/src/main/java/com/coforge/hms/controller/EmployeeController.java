package com.coforge.hms.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coforge.hms.dto.EmployeeDTO;
import com.coforge.hms.service.EmployeeImpl;

//= > Path -> http:localhost:8080/hms/api/employee
//@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping(value = "/api")
//@PreAuthorize("hasRole('ADMIN')")
public class EmployeeController{	
	@Autowired
	private EmployeeImpl employeeImpl;
	
	@PostMapping(value="/employee",produces = { MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE }, 
			consumes = { MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<EmployeeDTO> addEmployee(@RequestBody EmployeeDTO employee) {
		
		EmployeeDTO empDTO = employeeImpl.save(employee);	
		return ResponseEntity.ok().body(empDTO);
	}
	
	@PutMapping(value="/employee/{id}",produces = { MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE }, 
			consumes = { MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<EmployeeDTO> updateEmployee(@RequestBody EmployeeDTO employee
			,  @PathVariable("id") long empId) throws Exception {
		
		EmployeeDTO empDTO = employeeImpl.update(employee, empId);
		return ResponseEntity.ok().body(empDTO);
	}
	
	@DeleteMapping(value="/employee/{id}")
	public Map<String, Boolean> deleteEmployee(@PathVariable long id) throws Exception{
		return employeeImpl.delete(id);
	}

	@GetMapping(value="/employee/{id}", produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<EmployeeDTO> findById(@PathVariable long id) throws Exception {
		
		EmployeeDTO empDTO = employeeImpl.getById(id);
		return ResponseEntity.ok().body(empDTO);
	}
	
	@GetMapping(value="/employee")
	public ResponseEntity<List<EmployeeDTO>> listAll()
	{
		List<EmployeeDTO> empDTO = employeeImpl.getAll();
		return ResponseEntity.ok().body(empDTO);
	}
	
	@PostMapping(value="/employee/check")
	public ResponseEntity<Map<String, Boolean>> isExists(@RequestBody EmployeeDTO empDTO){
		Map<String, Boolean> res = new HashMap<>();
		if(employeeImpl.isExists(empDTO)) {
			res.put("available", Boolean.TRUE);
		}else {
			res.put("available", Boolean.FALSE);
		}
		
		return ResponseEntity.ok().body(res);
	}
	
}
