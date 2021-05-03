package com.coforge.hms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.coforge.hms.model.Operation;

public interface OperationRepository extends JpaRepository<Operation, Long> {

	@Query(value = "select * from #{#entityName} o where o.oid=?1", nativeQuery = true)
	public Operation getById(long oid);
	
}
