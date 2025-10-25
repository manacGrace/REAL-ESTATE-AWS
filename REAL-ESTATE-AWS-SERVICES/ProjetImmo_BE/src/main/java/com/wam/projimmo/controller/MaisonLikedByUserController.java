package com.wam.projimmo.controller;

import com.wam.projimmo.entities.Maison;
import com.wam.projimmo.services.MaisonLikedByUserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/maisonLiked")
@CrossOrigin
public class MaisonLikedByUserController {

    private final MaisonLikedByUserService maisonLikedByUserService;

    public MaisonLikedByUserController(MaisonLikedByUserService maisonLikedByUserService) {
        this.maisonLikedByUserService = maisonLikedByUserService;
    }

    @GetMapping("/getAllMaisonLiked/{idUser}")
    public List<Maison> getAllMaisonUsedBy(@PathVariable Long idUser) {
        return maisonLikedByUserService.searchAllMaisonLikedByUser(idUser);
    }

    @DeleteMapping("/removeLike/{idUser}/{idMaison}")
    public boolean removeLike(@PathVariable Long idUser, @PathVariable Long idMaison) {
        return maisonLikedByUserService.removeMaisonLikedByUser(idUser, idMaison);
    }

    @PutMapping("/addLike/{idUser}/{idMaison}")
    public boolean addLike(@PathVariable Long idUser, @PathVariable Long idMaison) {
        return maisonLikedByUserService.addMaisonLikedByUser(idUser, idMaison);
    }
}