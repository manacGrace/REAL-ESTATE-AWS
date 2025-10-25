package com.wam.projimmo.controller;

import com.wam.projimmo.entities.Maison;
import com.wam.projimmo.services.MaisonService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/maisons")
@CrossOrigin
public class MaisonController {

    private final MaisonService maisonService;

    public MaisonController(MaisonService maisonService) {
        this.maisonService = maisonService;
    }

    @GetMapping("/getAll")
    public List<Maison> getAllMaison() {
        return maisonService.searchAllMaisons();
    }

    // HIDE  CROSS ORIGIN POUR PAS QUE ON VOIT ID
    @GetMapping("/getById/{idMaison}")
    public Maison getAllMaisonById(@PathVariable Long idMaison) {
        return maisonService.searchMaisonById(idMaison);
    }

    @GetMapping("/getByAdresse/{adresse}")
    public List<Maison> getAllMaisonByAdresse(@PathVariable String adresse) {
        return maisonService.searchMaisonsByAdresse(adresse);
    }

    @GetMapping("/getByArea/{area}")
    public List<Maison> getAllMaisonByArea(@PathVariable Integer area) {
        return maisonService.searchMaisonByArea(area);
    }

    @GetMapping("/getByNbRoom/{nbRoom}")
    public List<Maison> getAllMaisonByRoom(@PathVariable Integer nbRoom) {
        return maisonService.searchMaisonByNbRoom(nbRoom);
    }

    @GetMapping("/getByNbBedRoom/{nbBedRoom}")
    public List<Maison> getAllMaisonByBedRoom(@PathVariable Integer nbBedRoom) {
        return maisonService.searchMaisonByNbBedRoom(nbBedRoom);
    }

    @GetMapping("/getByToilet/{nbToilet}")
    public List<Maison> getAllMaisonByToilet(@PathVariable Integer nbToilet) {
        return maisonService.searchMaisonByToilet(nbToilet);
    }

    @GetMapping("/getByPrice/{price}")
    public List<Maison> getAllMaisonByPrice(@PathVariable Integer price) {
        return maisonService.searchMaisonByPrice(price);
    }
}