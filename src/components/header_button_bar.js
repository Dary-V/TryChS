import React from 'react';
import Button from '@material-ui/core/Button';
import '../App.scss';

export class ButtonBar extends React.Component {
	render() {
		return (
			<div>
				<a href="#about" className="no-decoration-link">
				  <Button>
				    <span className="button-bar">About</span>
				  </Button>
				</a>
				<a href="#technologies" className="no-decoration-link">
				  <Button>
				    <span className="button-bar">Technologies</span>
				  </Button>
				</a>
				<a href="#team" className="no-decoration-link">
				  <Button>
				    <span className="button-bar">Our Team</span>
				  </Button>
				</a>
				<a href="#clients" className="no-decoration-link">
				  <Button>
				    <span className="button-bar">Our Clients</span>
				  </Button>
				</a>
				<a href="#contacts" className="no-decoration-link">
				  <Button>
				    <span className="button-bar">Contacts</span>
				  </Button>
				</a>
			</div>

			);
	}
}