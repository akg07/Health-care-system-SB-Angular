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

import com.coforge.hms.dto.BillDTO;
import com.coforge.hms.service.BillService;

//= > Path -> http:localhost:8080/hms/api/bill
//@CrossOrigin("http://localhost:4200") // -> Making connection with Angular via running Port
@RestController //-> Rest full --> 
@RequestMapping(value = "/api") //-> Id
public class BillController {

	@Autowired //-> Init Interface, Class, Object
	private BillService billService;
	
//	For insertion
	@PostMapping(value="/bill",produces = { MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE }, 
			consumes = { MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<BillDTO> addBill(@RequestBody BillDTO billDTO) {
		BillDTO bill = billService.save(billDTO);
		return ResponseEntity.ok().body(bill);
	}
	
//	for Updation
	@PutMapping(value="/bill/{id}",produces = { MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE }, 
			consumes = { MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<BillDTO> updateBill(@RequestBody BillDTO billDTO,
								@PathVariable("id") long bid) throws Exception {
		
		BillDTO bill = billService.update(billDTO, bid);
		return ResponseEntity.ok().body(bill);
	}
	
//	for delete
	@DeleteMapping(value="/bill/{id}")
	public Map<String, Boolean> deleteBill(@PathVariable long id) throws Exception
	{
		return billService.delete(id);
	}

//	for retrieval by id
	@GetMapping(value="/bill/{id}", produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<BillDTO> findById(@PathVariable long id) throws Exception {
		
		BillDTO bill =  billService.getById(id);
		return ResponseEntity.ok().body(bill);
	}
	
//	for retrieval by All
	@GetMapping(value="/bill")
	public ResponseEntity<List<BillDTO>> listAll()
	{
		List<BillDTO> billList = billService.getAll();
		return ResponseEntity.ok().body(billList);
	}
}
