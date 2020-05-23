import firebase from '../firebase';

const getHoodArt = async (hood) => {
    let artStuff;
    await firebase.firestore().collection('art').where('neighborhood', '==', hood).get().then((querySnapshot) => {
        const tempDoc = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
        })
        console.log(tempDoc, 'tempdoc')
        artStuff = tempDoc;
    })
    return artStuff;
}

export default {
    getHoodArt
}

