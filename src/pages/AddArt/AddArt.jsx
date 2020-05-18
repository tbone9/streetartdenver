import React, { Component } from 'react';
import '../formStyles.css';
import app from '../../firebase';
import firebase from '../../firebase';
import { storage } from '../../firebase';

class AddArt extends Component {

    state = {
        title: '',
        artist: '',
        date: '',
        description: '',
        neighborhood: '',
        imageURL: '',
        image: null,
        progress: 0,
        errMsg: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleImageChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            if (image.type === 'image/jpeg') {
                this.setState(() => ({
                    image: image,
                    errMsg: ''
                }));

                this.handleUpload(image);
            } else {
                this.setState({
                    errMsg: 'Upload is not an image!'
                })
            }
        }
    }

    handleUpload = async (image) => {

        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                // progress function ...
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                this.setState({ progress });
            },
            error => {
                // Error function ...
                console.log(error);
            },
            () => {
                // complete function ...
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        this.setState({ imageURL: url });
                    });
            }
        );

    };

    handleSubmit = e => {
        try {
            e.preventDefault();
            firebase
                .firestore()
                .collection('art')
                .add({
                    date: this.state.date,
                    title: this.state.title,
                    description: this.state.description,
                    imageURL: this.state.imageURL
                })
                .then(() =>
                    this.setState({
                        date: '',
                        title: '',
                        description: '',
                        imageURL: ''
                    }))
                .then(console.log('art added!'))

        } catch (error) {
            console.log(error);
        }
    }

    handleLogOut = () => {
        app.auth().signOut();
        this.props.history.push('/');
    }

    render() {
        return (
            <>
                <h2>Add a Piece of Art</h2>
                <div className='formContainer'>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' placeholder='Title' name='title' onChange={this.handleChange} />
                        <input type='text' placeholder='Artist' name='artist' onChange={this.handleChange} />
                        <input type='date' name='date' onChange={this.handleChange} />
                        <input type='text' placeholder='Description' name='description' onChange={this.handleChange} />
                        <select name='neighborhood' onChange={this.handleChange}>
                            <option value='Cherry Creek Trail'>Cherry Creek Trail</option>
                            <option value='Lincoln Park'>Lincoln Park</option>
                            <option value='Baker'>Baker</option>
                            <option value='Speer'>Speer</option>
                            <option value='LoDo'>LoDo</option>
                            <option value='Five Points'>Five Points</option>
                        </select>
                        <input type='file' accept="image/*" onChange={this.handleImageChange} /> <br></br>
                        {this.state.errMsg ? <p>{this.state.errMsg}</p> :
                            <progress value={this.state.progress} max='100' />
                        }

                        <button type='submit'>Add</button>
                    </form>
                </div>
                <button onClick={this.handleLogOut}>Sign Out</button>
            </>
        )
    }
}

export default AddArt;