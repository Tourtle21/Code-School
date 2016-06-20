"use strict";

var React = require("react");

var TextInput = React.createClass({
	render: function() {
		return (
			<div className="form-group">
				<label htmlFor={this.props.name}>{this.props.name}</label>
				<div className="field">
					<input 
						name={this.props.name}
						className="form-control"
						placeholder={this.props.placeholder}
						ref={this.props.name}
						value={this.props.value}
						onChange={this.props.saveTodoState}
					/>		
				</div>
			</div>
		);
	}
});
module.exports = TextInput;