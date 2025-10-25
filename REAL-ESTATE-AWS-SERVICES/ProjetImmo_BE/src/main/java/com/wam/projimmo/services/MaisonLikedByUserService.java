package com.wam.projimmo.services;

import com.wam.projimmo.entities.Maison;
import com.wam.projimmo.entities.MaisonLikedByUser;
import com.wam.projimmo.repositories.MaisonLikedByUserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MaisonLikedByUserService {

    private final MaisonLikedByUserRepository maisonLikedByUserRepository;

    private final MaisonService maisonService;

    private final UserService userService;

    public MaisonLikedByUserService(MaisonLikedByUserRepository maisonLikedByUserRepository, MaisonService maisonService, UserService userService) {
        this.maisonLikedByUserRepository = maisonLikedByUserRepository;
        this.maisonService = maisonService;
        this.userService = userService;
    }

    public List<Maison> searchAllMaisonLikedByUser(Long id) {
        return maisonLikedByUserRepository.findMaisonIdByUserId(id)
                .stream()
                .map((index) -> maisonService.searchMaisonById(index))
                .toList();
    }

    public boolean addMaisonLikedByUser(Long idUser, Long idMaison) {
        if (idUser != null && idMaison != null && maisonLikedByUserRepository.findSpecificMaisonLikedByUser(idMaison, idUser) == null) {
            maisonLikedByUserRepository.save(new MaisonLikedByUser(
                    userService.searchUserById(idUser),
                    maisonService.searchMaisonById(idMaison)
            ));
            return true;
        } else {
            return false;
        }
    }

    public boolean removeMaisonLikedByUser(Long idUser, Long idMaison) {
        return (maisonLikedByUserRepository.deleteMaisonLikedByUser(idMaison, idUser) > 0);
    }
}