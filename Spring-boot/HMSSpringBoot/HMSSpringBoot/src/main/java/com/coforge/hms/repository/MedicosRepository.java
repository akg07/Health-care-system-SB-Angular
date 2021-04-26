package com.coforge.hms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.coforge.hms.model.Medicos;

public interface MedicosRepository extends JpaRepository<Medicos, Long>{

	@Query(value = "select * from #{#entityName} m where m.MED_ID=?1", nativeQuery = true)
	public Medicos getById(long mId);
}
