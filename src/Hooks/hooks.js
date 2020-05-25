import { useState, useEffect } from 'react';
import firebase from '../firebase';

// useModal mounts and unmounts the artModal, which displays each piece of art

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    function toggle() {
        setIsShowing(!isShowing);
    }

    return {
        isShowing,
        toggle,
    }
};

// getArt fetches all the art belonging to each region (hood), from firestore

const GetArt = (hood) => {
    const [art, setArt] = useState([]);

    useEffect(() => {
        const unsubscribe =
            firebase
                .firestore()
                .collection('art')
                .where('neighborhood', '==', hood)
                .onSnapshot((snapshot) => {
                    const newArt = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }))
                    setArt(newArt);
                })
        return () => unsubscribe();

    }, []);

    return art;
};

export default {
    useModal,
    GetArt
};