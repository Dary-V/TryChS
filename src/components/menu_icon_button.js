import React from 'react';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class MenuButton extends React.Component {
	render() {
		return (
			<div>
				<FontAwesomeIcon icon="bars" />
			</div>
		);
	}
}