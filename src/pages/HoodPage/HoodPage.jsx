import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';
import './styles.css';

function GetArt() {
    const [art, setArt] = useState([]);

    useEffect(() => {

        const unsubscribe =
            firebase
                .firestore()
                .collection('art')
                .onSnapshot((snapshot) => {
                    const newArt = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }))
                    setArt(newArt);
                })
        return () => unsubscribe();
    }, []);

    console.log(art)

    return art;
};

function HoodPage(props) {
    const art = GetArt();
    // console.log(tate.art, 'art');
    return (
        <div>
            <h2>{props.location.name.hood}</h2>
            {art.map(piece => (
                <div key={piece.id}>
                    <h3>{piece.title}</h3>
                    <img src={piece.imageURL} alt={piece.description}></img>
                </div>

            ))}
        </div>
    )
};

export default HoodPage;