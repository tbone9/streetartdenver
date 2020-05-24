import firebase from '../firebase';

const getAllArt = async (hood) => {
    let artStuff;
    await firebase.firestore().collection('art').get().then((querySnapshot) => {
        const tempDoc = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
        })
        artStuff = tempDoc;
    })
    return artStuff;
}

export default {
    getAllArt
}

