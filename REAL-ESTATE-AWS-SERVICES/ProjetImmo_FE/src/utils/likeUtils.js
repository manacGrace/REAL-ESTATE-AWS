import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL } from './config.js';

export const handleLike = async (e, idMaison, navigate) => {
  e.preventDefault();
  const userData = JSON.parse(sessionStorage.getItem('currentUser'));
  if (!userData) {
    toast.error('Connectez-vous d’abord !', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    return;
  } 
  try {
    const response = await axios.put(`${API_URL}/maisonLiked/addLike/${userData.id}/${idMaison}`);
    if (response.data === true) {
    toast.success('Maison ajoutée aux favoris !', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    } else {
      toast.error('Maison déjà  ajoutée aux favoris !', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  } catch (error) {
    toast.error('Erreur lors de l\'ajout aux favoris !', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
}; 