import axios from "axios";
import { API_URL } from "./config.js";

export const getAllHouses = async () => {
    try {
        const result = await axios.get(`${API_URL}/maisons/getAll`);
        return Array.isArray(result.data) ? result.data : [];
    } catch (err) {
        console.error(err)
    }
    return [];
};


export const loadAllMaisonsLike = async () => {
    const userData = JSON.parse(sessionStorage.getItem('currentUser'));
    if (!userData) return;
    try {
        const result = await axios.get(`${API_URL}/maisonLiked/getAllMaisonLiked/${userData.id}`);
        return result.data
    } catch (err) {
        console.error(err)
    }
    return null;
};

export const deleteLike = async (idMaison, userId) => {
    try {
        await axios.delete(`${API_URL}/maisonLiked/removeLike/${userId}/${idMaison}`);
    } catch (error) {
        console.error("Erreur enlever like:", error);
    }
};

export const loadMaison = async (idMaison) => {
    try {
        const result = await axios.get(`${API_URL}/maisons/getById/${idMaison}`);
        return result.data;
    } catch (err) {
        console.error(err)
    }
    return null;
};

export const getUser = async (id) => {
    try {
        const result = await axios.get(`${API_URL}/user/getById/${id}`);
        return result.data;
    } catch (err) {
        console.error(err)
    }
    return null;
}

export const signIn = async (credentials) => {
    try {
        const result = await axios.post(
            `${API_URL}/user/signIn`, credentials
        );
        return result.data
    } catch (err) {
        console.error(err)
    }
    return null;
}

export const signUp = async (user) => {
    try {
        const result = await axios.post(
            `${API_URL}/user/signUp`, user
        );
        return result.data
    } catch (err) {
        console.error(err)
    }
    return null;
}

