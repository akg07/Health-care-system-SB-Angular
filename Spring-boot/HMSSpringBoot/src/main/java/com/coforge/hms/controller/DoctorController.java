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

import com.coforge.hms.dto.DoctorDTO;
import com.coforge.hms.service.DoctorServiceImpl;

//= > Path -> http:localhost:8080/hms/api/doctor
//@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping(value = "/api")
public class DoctorController {

	@Autowired
	private DoctorServiceImpl docService;

	@PostMapping(value = "/doctor", produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE }, consumes = { MediaType.APPLICATION_JSON_VALUE,
					MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<DoctorDTO> addDoctor(@RequestBody DoctorDTO doctor) {

		DoctorDTO doc = docService.save(doctor);
		return ResponseEntity.ok().body(doc);
	}

	@PutMapping(value = "/doctor/{id}", produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE }, consumes = { MediaType.APPLICATION_JSON_VALUE,
					MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<DoctorDTO> updateDoctor(@RequestBody DoctorDTO doctor, @PathVariable("id") long docId)
			throws Exception {

		DoctorDTO doc = docService.update(doctor, docId);
		return ResponseEntity.ok().body(doc);
	}

	@DeleteMapping(value = "/doctor/{id}")
	public Map<String, Boolean> deleteDoctor(@PathVariable long id) throws Exception {
		return docService.delete(id);
	}

	@GetMapping(value = "/doctor/{id}", produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<DoctorDTO> findById(@PathVariable long id) throws Exception {

		DoctorDTO doc = docService.getById(id);
		return ResponseEntity.ok().body(doc);
	}

	@GetMapping(value = "/doctor")
	public ResponseEntity<List<DoctorDTO>> listAll() {
		List<DoctorDTO> doc = docService.getAll();
		return ResponseEntity.ok().body(doc);
	}
	
	@PostMapping(value = "/doctor/check")
	public ResponseEntity<Map<String, Boolean>> existsByContactNo(@RequestBody DoctorDTO doc){
		Map<String, Boolean> res = new HashMap<>();
		boolean present = docService.existsByNumber(doc);
		if(present) {
			res.put("available", Boolean.TRUE);
		}else {
			res.put("available", Boolean.FALSE);
		}
		return ResponseEntity.ok().body(res);
	}
}
