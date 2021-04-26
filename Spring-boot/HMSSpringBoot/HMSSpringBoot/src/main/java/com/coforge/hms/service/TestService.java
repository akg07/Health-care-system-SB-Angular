package com.coforge.hms.service;

import java.util.List;
import java.util.Map;

import com.coforge.hms.dto.TestDTO;

public interface TestService {
	public TestDTO save(TestDTO test);
    public TestDTO update(TestDTO test, long tid) throws Exception;
	public TestDTO getById(long tid) throws Exception;
	public List<TestDTO> getAll();
	public Map<String, Boolean> delete(long tid) throws Exception;
}

