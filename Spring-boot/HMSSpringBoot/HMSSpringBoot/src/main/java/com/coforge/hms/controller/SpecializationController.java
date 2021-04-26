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

import com.coforge.hms.dto.SpecializationDTO;
import com.coforge.hms.service.SpecializationServiceImpl;
//= > Path -> http:localhost:8080/hms/api/spec
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping(value = "/api")
public class SpecializationController {

	@Autowired
	private SpecializationServiceImpl specService;

	@PostMapping(value = "/spec", produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE }, consumes = { MediaType.APPLICATION_JSON_VALUE,
					MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<SpecializationDTO> addSpecialization(@RequestBody SpecializationDTO specialization) {

		SpecializationDTO specDTO = specService.save(specialization);
		return ResponseEntity.ok().body(specDTO);
	}

	@PutMapping(value = "/spec/{id}", produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE }, consumes = { MediaType.APPLICATION_JSON_VALUE,
					MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<SpecializationDTO> updateSpecialization(@RequestBody SpecializationDTO specialization,
			@PathVariable long id) throws Exception {

		SpecializationDTO specDTO = specService.update(specialization, id);
		return ResponseEntity.ok().body(specDTO);
	}

	@DeleteMapping(value = "/spec/{id}")
	public Map<String, Boolean> deleteSpecialization(@PathVariable long id) throws Exception {
		return specService.delete(id);
	}

	@GetMapping(value = "/spec/{id}", produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<SpecializationDTO> findById(@PathVariable long id) throws Exception {

		SpecializationDTO specDTO = specService.getById(id);
		return ResponseEntity.ok().body(specDTO);
	}

	@GetMapping(value = "/spec")
	public ResponseEntity<List<SpecializationDTO>> listAll() {
		List<SpecializationDTO> specDTO = specService.getAll();
		return ResponseEntity.ok().body(specDTO);
	}
}
