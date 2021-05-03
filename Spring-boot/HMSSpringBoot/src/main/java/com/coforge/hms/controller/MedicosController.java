package com.coforge.hms.controller;

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

import com.coforge.hms.dto.MedicosDTO;
import com.coforge.hms.service.MedicosServiceImpl;

//= > Path -> http:localhost:8080/hms/api/medicos
//@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping(value = "/api")
public class MedicosController {

	@Autowired
	private MedicosServiceImpl medService;
	
	@PostMapping(value="/medicos",produces = { MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE },
			consumes = { MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<MedicosDTO> addMedicos(@RequestBody MedicosDTO medicos) {
		
		MedicosDTO medDTO = medService.save(medicos);	
		return ResponseEntity.ok().body(medDTO);
	}
	
	@PutMapping(value="/medicos/{id}",produces = { MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE }, 
			consumes = { MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<MedicosDTO> updateMedicos(@RequestBody MedicosDTO medicos,
								@PathVariable("id") long mId) throws Exception {
		
		MedicosDTO medDTO =  medService.update(medicos, mId);
		return ResponseEntity.ok().body(medDTO);
	}
	
	@DeleteMapping(value="/medicos/{id}")
	public Map<String, Boolean> deleteMedicos(@PathVariable long id) throws Exception
	{
		return medService.delete(id);
	}

	@GetMapping(value="/medicos/{id}", produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<MedicosDTO> findById(@PathVariable long id) throws Exception {
		
		MedicosDTO medDTO =  medService.getById(id);
		return ResponseEntity.ok().body(medDTO);
	}
	
	@GetMapping(value="/medicos")
	public ResponseEntity<List<MedicosDTO>> listAll()
	{
		List<MedicosDTO> medList =  medService.getAll();
		return ResponseEntity.ok().body(medList);
	}
	
	@GetMapping(value = "/medicos/pat/{id}")
	public ResponseEntity<List<MedicosDTO>> findByPatientId(@PathVariable long id) {
		List<MedicosDTO> list = medService.getAllByPatientId(id);
		
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping(value = "/medicos/total/{id}")
	public ResponseEntity<Long> getTotal(@PathVariable long id) {
		long total = medService.getTotal(id);
		
		return ResponseEntity.ok().body(total);
	}
}


