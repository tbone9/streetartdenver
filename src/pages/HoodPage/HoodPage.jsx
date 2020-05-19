import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';
import './styles.css';
import ArtThumb from '../../components/ArtThumb/ArtThumb';
// import useModal from '../../Hooks/useModal';
// import ArtModal from '../../components/ArtModal/ArtModal';

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
    // const { isShowing, toggle } = useModal();
    return (
        <div id='hoodPageContainer'>
            <h2>{props.location.name.hood}</h2>
            <div id='hoodInnerContainer'>
                {art.map(piece => (
                    <ArtThumb piece={piece} />
                    // <>
                    //     <div key={piece.id} onClick={toggle}>
                    //         <img src={piece.imageURL} alt={piece.description}></img>
                    //         <ArtModal art={piece} isShowing={isShowing} hide={toggle} />
                    //     </div>

                    // </>
                ))}
            </div>

        </div>
    )
};

export default HoodPage;