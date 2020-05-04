import React, { Component } from 'react';
import '../formStyles.css';
import app from '../../firebase';

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
            if (image.type === 'image/jpeg' && image.size < 2100000) {
                this.setState(() => ({
                    image: image,
                    errMsg: ''
                }));

                this.handleUpload(image);
            } else {
                this.setState({
                    errMsg: 'Upload is either too big or not an image!'
                })
            }
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
                    <form>
                        <input type='text' placeholder='Title' name='title' onChange={this.handleChange} />
                        <input type='text' placeholder='Artist' name='artist' onChange={this.handleChange} />
                        <input type='date' name='date' onChange={this.handleChange} />
                        <input type='text' placeholder='Description' name='description' onChange={this.handleChange} />
                        <select name='neighborhood' onChange={this.handleChange}>
                            <option value='Cherry Creek Path'>Cherry Creek Path</option>
                            <option value='Lincoln Park'>Lincoln Park</option>
                            <option value='Baker'>Baker</option>
                            <option value='Speer'>Speer</option>
                            <option value='LoDo'>LoDo</option>
                            <option value='Five Points'>Five Points</option>
                        </select>
                        <input type='file' accept="image/*" onChange={this.handleImageChange} />
                        <button type='submit'>Add</button>
                    </form>
                </div>
                <button onClick={this.handleLogOut}>Sign Out</button>
            </>
        )
    }
}

export default AddArt;