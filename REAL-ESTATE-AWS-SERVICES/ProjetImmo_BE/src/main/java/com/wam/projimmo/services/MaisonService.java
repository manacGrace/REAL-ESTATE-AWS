package com.wam.projimmo.services;

import com.wam.projimmo.entities.Maison;
import com.wam.projimmo.repositories.MaisonRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MaisonService {

    private final MaisonRepository maisonRepository;

    public MaisonService(MaisonRepository maisonRepository) {
        this.maisonRepository = maisonRepository;
    }

    public List<Maison> searchAllMaisons() {
        return maisonRepository.findAll();
    }

    public Maison searchMaisonById(Long idMaison) {
        return maisonRepository.findMaisonByIdMaison(idMaison);
    }

    public List<Maison> searchMaisonsByAdresse(String adresse) {
        return maisonRepository.findMaisonByAdresse(adresse);
    }

    public List<Maison> searchMaisonByArea(Integer area) {
        return maisonRepository.findMaisonByArea(area);
    }

    public List<Maison> searchMaisonByNbRoom(Integer nbRoom) {
        return maisonRepository.findMaisonByNbRoom(nbRoom);
    }

    public List<Maison> searchMaisonByNbBedRoom(Integer nbBedRoom) {
        return maisonRepository.findMaisonByBedRoom(nbBedRoom);
    }

    public List<Maison> searchMaisonByToilet(Integer nbToilet) {
        return maisonRepository.findMaisonByNbToilet(nbToilet);
    }

    public List<Maison> searchMaisonByPrice(Integer price) {
        return maisonRepository.findMaisonByPrice(price);
    }
}