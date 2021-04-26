package com.coforge.hms.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coforge.hms.dto.DepartmentDTO;
import com.coforge.hms.service.DepartmentImpl;

//= > Path -> http:localhost:8080/hms/api/department
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping(value = "/api")
//@PreAuthorize("hasRole('ADMIN')")
public class DepartmentController {
	
	@Autowired
	private DepartmentImpl departmentImpl;
	
	@PostMapping(value="/department",produces = { MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE }, 
			consumes = { MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<DepartmentDTO> addDepartment(@RequestBody DepartmentDTO department) {
		DepartmentDTO deptDTO = departmentImpl.save(department);
		return ResponseEntity.ok().body(deptDTO);
	}
	
	@PutMapping(value="/department/{id}",produces = { MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE }, 
			consumes = { MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<DepartmentDTO> updateDepartment(@RequestBody DepartmentDTO department
			, @PathVariable long id) throws Exception {
		DepartmentDTO deptDTO =  departmentImpl.update(department, id);
		return ResponseEntity.ok().body(deptDTO);
	}
	
	@DeleteMapping(value="/department/{id}")
	public Map<String, Boolean> deleteDepartment(@PathVariable long id) throws Exception
	{
		return departmentImpl.delete(id);
	}

	@GetMapping(value="/department/{id}", produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<DepartmentDTO> findById(@PathVariable long id) throws Exception {
		
		DepartmentDTO deptDTO =  departmentImpl.getById(id);
		return ResponseEntity.ok().body(deptDTO);
	}
	
	@GetMapping(value="/department")
	public ResponseEntity<List<DepartmentDTO>> listAll()
	{
		List<DepartmentDTO> deptList =  departmentImpl.getAll();
		return ResponseEntity.ok().body(deptList);
	}
	
}
