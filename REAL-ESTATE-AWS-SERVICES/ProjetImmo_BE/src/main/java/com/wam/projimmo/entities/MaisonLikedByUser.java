package com.wam.projimmo.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@Entity
@AllArgsConstructor
public class MaisonLikedByUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idMaisonLikedByUser;

    @ManyToOne
    private Maison maison;

    @ManyToOne
    private User user;

    public MaisonLikedByUser(User user, Maison maison) {
        this.user = user;
        this.maison = maison;
    }

    public MaisonLikedByUser() {}

    public Long getIdMaisonLikedByUser() {
        return idMaisonLikedByUser;
    }

    public void setIdMaisonLikedByUser(Long idMaisonLikedByUser) {
        this.idMaisonLikedByUser = idMaisonLikedByUser;
    }

    public Maison getMaison() {
        return maison;
    }

    public void setMaison(Maison maison) {
        this.maison = maison;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}