package com.coforge.hms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.coforge.hms.model.Test;

public interface TestRepository extends JpaRepository<Test, Long> {

	@Query(value = "select * from #{#entityName} t where t.tid=?1", nativeQuery = true)
	public Test getById(long tid);
}
