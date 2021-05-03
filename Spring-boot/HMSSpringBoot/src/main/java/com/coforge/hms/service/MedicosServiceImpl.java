package com.coforge.hms.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coforge.hms.dto.MedicosDTO;
import com.coforge.hms.model.Medicos;
import com.coforge.hms.repository.MedicosRepository;

@Service
@Transactional
public class MedicosServiceImpl implements MedicosService {

	@Autowired
	private MedicosRepository mRepo;

	private Medicos convertDTOtoModel(MedicosDTO medDTO) {

		Medicos med = new Medicos();

		med.setmId(medDTO.getmId());
		med.setmRecord(medDTO.getmRecord());
		med.setDate(medDTO.getDate());
		med.setDoctor(medDTO.getDoctor());
		med.setPatient(medDTO.getPatient());
		med.setPrice(medDTO.getPrice());
		med.setQuantity(medDTO.getQuantity());
		med.setTotal(medDTO.getTotal());

		return med;
	}

	private MedicosDTO convertModelToDTO(Medicos med) {
		return new MedicosDTO(med);
	}

	@Override
	public MedicosDTO save(MedicosDTO medicos) {
		medicos.setTotal(medicos.getPrice() * medicos.getQuantity());
		Medicos med = convertDTOtoModel(medicos);
		
		return convertModelToDTO(mRepo.save(med));
	}

	@Override
	public MedicosDTO update(MedicosDTO medicos, long mId) throws Exception {
		MedicosDTO cpyMedicos = getById(mId);

		cpyMedicos.setmRecord(medicos.getmRecord());
		cpyMedicos.setDate(medicos.getDate());
		cpyMedicos.setDoctor(medicos.getDoctor());
		cpyMedicos.setPatient(medicos.getPatient());
		cpyMedicos.setPrice(medicos.getPrice());
		cpyMedicos.setQuantity(medicos.getQuantity());
		cpyMedicos.setTotal(medicos.getPrice() * medicos.getQuantity());

		Medicos med = convertDTOtoModel(cpyMedicos);
		return convertModelToDTO(mRepo.save(med));
	}

	@Override
	public Map<String, Boolean> delete(long mid) throws Exception {
		Medicos med = convertDTOtoModel(getById(mid));
		mRepo.delete(med);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Delete", Boolean.TRUE);
		return response;
	}

	@Override
	public MedicosDTO getById(long mid) throws Exception {
		Medicos med = mRepo.findById(mid).orElseThrow(() -> new Exception("ID NOT FOUND :::: " + mid));
		return convertModelToDTO(med);
	}

	@Override
	public List<MedicosDTO> getAll() {
		List<Medicos> medList = mRepo.findAll();
		List<MedicosDTO> medDTOList = new ArrayList<>();

		for (Medicos med : medList) {
			medDTOList.add(convertModelToDTO(med));
		}
		return medDTOList;
	}

	@Override
	public List<MedicosDTO> getAllByPatientId(long pid) {
		List<Medicos> medList = mRepo.getAllByPatientId(pid);

		List<MedicosDTO> medDTOList = new ArrayList<>();

		for (Medicos med : medList) {
			medDTOList.add(convertModelToDTO(med));
		}
		return medDTOList;
	}

	@Override
	public long getTotal(long id) {
		List<MedicosDTO> list = getAllByPatientId(id);
		long total = 0;
		for(MedicosDTO med : list) {
			total += med.getTotal();
		}
		return total;
	}
}
