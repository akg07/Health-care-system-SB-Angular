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

import com.coforge.hms.dto.InsuranceDTO;
import com.coforge.hms.service.InsuranceService;

//= > Path -> http:localhost:8080/hms/api/insurance
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping(value = "/api")
public class InsuranceController {

	@Autowired
	private InsuranceService iService;
	
	@PostMapping(value="/insurance",produces = { MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE }, 
			consumes = { MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<InsuranceDTO> addInsurance(@RequestBody InsuranceDTO insurance) {
		
		InsuranceDTO insDTO = iService.save(insurance);	
		return ResponseEntity.ok().body(insDTO);
	}
	
	@PutMapping(value="/insurance/{id}",produces = { MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE }, 
			consumes = { MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<InsuranceDTO> updateInsurance(@RequestBody InsuranceDTO insurance
			,  @PathVariable("id") long iNo) throws Exception {
		
		InsuranceDTO insDTO =  iService.update(insurance, iNo);
		return ResponseEntity.ok().body(insDTO);
	}
	
	@DeleteMapping(value="/insurance/{id}")
	public Map<String, Boolean> deleteInsurance(@PathVariable long id) throws Exception
	{
		return iService.delete(id);
	}

	@GetMapping(value="/insurance/{id}", produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<InsuranceDTO> findById(@PathVariable long id) throws Exception {
		
		InsuranceDTO insDTO =  iService.getById(id);
		return ResponseEntity.ok().body(insDTO);
	}
	
	@GetMapping(value="/insurance")
	public ResponseEntity<List<InsuranceDTO>> listAll()
	{
		List<InsuranceDTO> insList =  iService.getAll();
		return ResponseEntity.ok().body(insList);
	}
}
