package com.wam.projimmo.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Maison implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idMaison;
    private String address;
    private String postalCode;
    private Integer area;
    private Integer nbRoom;
    private Integer nbBedroom;
    private Integer nbToilet;
    private Integer price;
    private String linkImage;
    private double latitude;
    private double longitude;

    @ManyToOne
    private Region region;

    public Long getIdMaison() {
        return idMaison;
    }

    public void setIdMaison(Long idMaison) {
        this.idMaison = idMaison;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public Integer getArea() {
        return area;
    }

    public void setArea(Integer area) {
        this.area = area;
    }

    public Integer getNbRoom() {
        return nbRoom;
    }

    public void setNbRoom(Integer nbRoom) {
        this.nbRoom = nbRoom;
    }

    public Integer getNbBedroom() {
        return nbBedroom;
    }

    public void setNbBedroom(Integer nbBedroom) {
        this.nbBedroom = nbBedroom;
    }

    public Integer getNbToilet() {
        return nbToilet;
    }

    public void setNbToilet(Integer nbToilet) {
        this.nbToilet = nbToilet;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getLinkImage() {
        return linkImage;
    }

    public void setLinkImage(String linkImage) {
        this.linkImage = linkImage;
    }

    public Region getRegion() {
        return region;
    }

    public void setRegion(Region region) {
        this.region = region;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    @Override
    public String toString() {
        return "Maison{" +
                "idMaison=" + idMaison +
                ", address='" + address + '\'' +
                ", postalCode='" + postalCode + '\'' +
                ", area=" + area +
                ", nbRoom=" + nbRoom +
                ", nbBedroom=" + nbBedroom +
                ", nbToilet=" + nbToilet +
                ", price=" + price +
                ", linkImage='" + linkImage + '\'' +
                ", region=" + region +
                ", latitude=" + latitude +
                ", longitude=" + longitude +
                '}';
    }
}