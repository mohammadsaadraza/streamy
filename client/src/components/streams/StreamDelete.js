import React, { Component } from "react";
import { fetchStream, deleteStream } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import history from "../../history";
import Modal from "../Modal";

class StreamDelete extends Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	onDeleteStream = () => {
		this.props.deleteStream(this.props.match.params.id);
	};

	renderActions = () => {
		return (
			<React.Fragment>
				<button onClick={this.onDeleteStream} className="ui button negative">
					Delete
				</button>
				<Link to="/" className="ui button">
					Cancel
				</Link>
			</React.Fragment>
		);
	};

	onDismiss = () => {
		history.push("/");
	};

	render() {
		if (!this.props.stream) {
			return <div>Loading...</div>;
		}
		return (
			<Modal
				title={`Delete Stream: "${this.props.stream.title}"`}
				content="Are you sure you want to delete this stream?"
				actions={this.renderActions()}
				onDismiss={this.onDismiss}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id],
	};
};

export default connect(mapStateToProps, {
	fetchStream,
	deleteStream,
})(StreamDelete);
