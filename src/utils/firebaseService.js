import firebase from '../firebase';

// getAllArt gets all the art in the database. This function is used for class components

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

const updateArt = async (id, art) => {
    const docToUpdate = await firebase.firestore().collection('art').doc(id).update({
        artist: art.artist,
        title: art.title,
        description: art.description,
        date: art.date,
        imageURL: art.imageURL,
        neighborhood: art.neighborhood
    })

    return docToUpdate;
}

export default {
    getAllArt,
    updateArt
}

