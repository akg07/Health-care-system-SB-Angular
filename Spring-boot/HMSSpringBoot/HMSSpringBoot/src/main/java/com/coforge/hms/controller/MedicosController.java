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

import com.coforge.hms.dto.MedicosDTO;
import com.coforge.hms.service.MedicosServiceImpl;

//= > Path -> http:localhost:8080/hms/api/medicos
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping(value = "/api")
public class MedicosController {

	@Autowired
	private MedicosServiceImpl MedService;
	
	@PostMapping(value="/medicos",produces = { MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE },
			consumes = { MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<MedicosDTO> addMedicos(@RequestBody MedicosDTO medicos) {
		
		MedicosDTO medDTO = MedService.save(medicos);	
		return ResponseEntity.ok().body(medDTO);
	}
	
	@PutMapping(value="/medicos/{id}",produces = { MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE }, 
			consumes = { MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<MedicosDTO> updateMedicos(@RequestBody MedicosDTO medicos,
								@PathVariable("id") long mId) throws Exception {
		
		MedicosDTO medDTO =  MedService.update(medicos, mId);
		return ResponseEntity.ok().body(medDTO);
	}
	
	@DeleteMapping(value="/medicos/{id}")
	public Map<String, Boolean> deleteMedicos(@PathVariable long id) throws Exception
	{
		return MedService.delete(id);
	}

	@GetMapping(value="/medicos/{id}", produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<MedicosDTO> findById(@PathVariable long id) throws Exception {
		
		MedicosDTO medDTO =  MedService.getById(id);
		return ResponseEntity.ok().body(medDTO);
	}
	
	@GetMapping(value="/medicos")
	public ResponseEntity<List<MedicosDTO>> listAll()
	{
		List<MedicosDTO> medList =  MedService.getAll();
		return ResponseEntity.ok().body(medList);
	}
}


