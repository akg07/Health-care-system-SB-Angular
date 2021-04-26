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

import com.coforge.hms.dto.TestDTO;
import com.coforge.hms.service.TestServiceImpl;
//= > Path -> http:localhost:8080/hms/api/test
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping(value = "/api")
public class TestController {

	@Autowired
	private TestServiceImpl testImpl;

	@PostMapping(value = "/test",produces = { MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE }, 
			consumes = { MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<TestDTO> addTest(@RequestBody TestDTO test) {

		TestDTO testDTO = testImpl.save(test);
		return ResponseEntity.ok().body(testDTO);

	}

	@PutMapping(value = "/test/{id}",produces = { MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE }, 
			consumes = { MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<TestDTO> updateTest(@RequestBody TestDTO test
			, @PathVariable("id") long tid) throws Exception {

		TestDTO testDTO = testImpl.update(test, tid);
		return ResponseEntity.ok().body(testDTO);
	}

	@DeleteMapping(value = "/test/{id}", produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public Map<String, Boolean> deleteTest(@PathVariable long id) throws Exception {
		return testImpl.delete(id);
	}

	@GetMapping(value = "/test/{id}")
	public ResponseEntity<TestDTO> findById(@PathVariable long id) throws Exception {

		TestDTO testDTO = testImpl.getById(id);
		return ResponseEntity.ok().body(testDTO);
	}

	@GetMapping(value = "/test")
	public ResponseEntity<List<TestDTO>> listAll() {
		List<TestDTO> testDTOList = testImpl.getAll();
		return ResponseEntity.ok().body(testDTOList);
	}
}
