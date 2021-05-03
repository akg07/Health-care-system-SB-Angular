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

import com.coforge.hms.dto.OperationDTO;
import com.coforge.hms.service.OperationServiceImpl;

//= > Path -> http:localhost:8080/hms/api/operation
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping(value = "/api")
public class OperationController {

	@Autowired
	private OperationServiceImpl opService;

	@PostMapping(value = "/operation", produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE }, consumes = { MediaType.APPLICATION_JSON_VALUE,
					MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<OperationDTO> addOperation(@RequestBody OperationDTO operation) {

		OperationDTO operDTO = opService.save(operation);
		return ResponseEntity.ok().body(operDTO);
	}

	@PutMapping(value = "/operation/{id}", produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE }, consumes = { MediaType.APPLICATION_JSON_VALUE,
					MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<OperationDTO> updateOperation(@RequestBody OperationDTO operation,
			@PathVariable("id") long oId) throws Exception {

		OperationDTO operDTO = opService.update(operation, oId);
		return ResponseEntity.ok().body(operDTO);
	}

	@DeleteMapping(value = "/operation/{id}")
	public Map<String, Boolean> deleteOperation(@PathVariable long id) throws Exception {
		return opService.delete(id);
	}

	@GetMapping(value = "/operation/{id}", produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<OperationDTO> findById(@PathVariable long id) throws Exception {

		OperationDTO operDTO = opService.getById(id);
		return ResponseEntity.ok().body(operDTO);
	}

	@GetMapping(value = "/operation")
	public ResponseEntity<List<OperationDTO>> listAll() {
		List<OperationDTO> operDTO = opService.getAll();
		return ResponseEntity.ok().body(operDTO);
	}
}
