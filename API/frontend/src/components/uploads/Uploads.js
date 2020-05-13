import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUploads } from '../../actions/uploads';

export class Uploads extends Component {
    static propTypes = {
        uploads: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getUploads();
    }

    render() {
        return (
            <Fragment>
                {this.props.uploads.map(upload => (
                    <div key={upload.id} className="card mb-3">
                        <img style={{ height: "200px", width: "50%", display: 'block' }} src={upload.image} alt="Card image" />
                        <div className="card-body">
                            <p className="card-text">The image above is of {upload.prediction} disease.</p>
                        </div>
                        <button className="btn btn-danger btn-sm">Delete</button>
                    </div>
                ))}
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    uploads: state.uploads.uploads
});

export default connect(mapStateToProps, { getUploads })(Uploads);
