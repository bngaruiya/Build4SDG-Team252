import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props
        if(error !== prevProps.error) {
            if (error.msg.ImageFile) alert.error(`ImageFile: ${error.msg.image.join()}`)
        }
        if (message !== prevProps.message) {
            if (message.deleteUpload) alert.success(message.deleteUpload);
            if (message.addUpload) alert.success(message.addUpload);
        }
    }

    render() {
        return (
            <Fragment />
        )
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
})

export default connect(mapStateToProps)(withAlert()(Alerts));
