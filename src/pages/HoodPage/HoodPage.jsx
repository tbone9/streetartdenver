import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';
import './styles.css';
import ArtThumb from '../../components/ArtThumb/ArtThumb';

function GetArt(props) {

    const [art, setArt] = useState([]);
    useEffect(() => {
        const hood = props.location.name.hood
        // const unsubscribe =
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
        return
        // () => unsubscribe();

    }, []);

    console.log(art)

    return art;
};


function HoodPage(props) {

    const art = GetArt(props);
    return (
        <div id='hoodPageContainer'>
            <h2>{props.location.name.hood}</h2>
            <div id='hoodInnerContainer'>
                {art.map(piece => (
                    <ArtThumb piece={piece} />

                ))}
            </div>

        </div>
    )
};

export default HoodPage;