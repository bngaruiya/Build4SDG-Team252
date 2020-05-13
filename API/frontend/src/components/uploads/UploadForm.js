import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addUpload } from '../../actions/Uploads';

export class Upload_Form extends Component {
    state = {
        image: null,
        // owner: 2
    }

    static propTypes = {
        addUpload: PropTypes.func.isRequired
    }

    onFileChange = e => {
        this.setState({ image: e.target.files[0] })
    };

    onChange = e => {
        this.setState({ 'owner': e.target.defaultValue })
    }

    onSubmit = e => {
        e.preventDefault();
        let upload = new FormData();
        upload.append('image', this.state.image, this.state.image.name);
        upload.append("owner", 2)
        this.props.addUpload(upload)
    }

    render() {
        const { image, owner } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add File for Prediction</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Image File</label>
                        <input 
                            className="form-control"
                            type="file"
                            name="image"
                            required
                            onChange={this.onFileChange}
                            defaultValue={image}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Owner</label>
                        <input 
                            className="form-control"
                            type="int"
                            name="owner"
                            onChange={this.onChange}
                            defaultValue={owner}
                        ></input>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { addUpload })(Upload_Form);

