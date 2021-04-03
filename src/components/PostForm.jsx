import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from "../actions/postAction";

function PostForm(props) {

    const { createPost } = props;

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    function handleSubmit(e){
        e.preventDefault();
       createPost({title, body});
       setTitle('');
       setBody('');
    }

    return ( 
        <div>
            <h1>Add Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        id="title" 
                        type="text" 
                        name="title" 
                        className="form-control" 
                        value={title} 
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="body">Body</label>
                    <textarea 
                        name="body" 
                        id="body" 
                        cols="100" 
                        rows="10" 
                        className="form-control" 
                        value={body}
                        onChange={e => setBody(e.target.value)}
                    />
                </div>

                <input 
                    type="submit" 
                    value="submit" 
                    className="btn btn-danger btn-block"
                />
            </form>
        </div>
    )
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired,
}

export default connect(null, { createPost })(PostForm);
