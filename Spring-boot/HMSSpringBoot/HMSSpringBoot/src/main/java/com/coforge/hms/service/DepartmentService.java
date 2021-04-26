package com.coforge.hms.service;

import java.util.List;
import java.util.Map;

import com.coforge.hms.dto.DepartmentDTO;

public interface DepartmentService {

	public DepartmentDTO save(DepartmentDTO department);
    public DepartmentDTO update(DepartmentDTO department, long deptid) throws Exception;
	public DepartmentDTO getById(long deptid) throws Exception;
	public List<DepartmentDTO> getAll();
	public Map<String, Boolean> delete(long deptid) throws Exception;

}
