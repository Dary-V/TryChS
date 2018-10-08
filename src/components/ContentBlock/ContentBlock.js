import React from 'react';
import PropTypes from 'prop-types'

export class BlockContent extends React.Component {
	render() {
		return (
			<div className={`content-block ${this.props.className}`} id={this.props.id}>
				<h3 className="content-title">This is Title!</h3>
				<div className="container">
					<div className={`col-2 image ${this.props.imgLocation}`}>
            <img
              src="https://www.lifewire.com/thmb/t7iieKO_QKc27AE172qNTgLugO4=/1695x1132/filters:no_upscale():fill(FFCC00,1)/iStock_83681883_MEDIUM-57fbf5e73df78c690f7bc985.jpg"
              alt="some text"
            />
					</div>
				  <p className={`col-2 ${this.props.contentClassName}`}>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
							Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
							penatibus et magnis dis parturient montes, nascetur ridiculus mus.
							Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
							Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
							aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
							venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
							Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
							Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
							eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
							Phasellus viverra nulla ut metus varius laoreet.
							Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
							Curabitur ullamcorper ultricies nisi.
							Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
							condimentum rhoncus, sem quam semper libero,
							sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
							hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero
							venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros
							faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
			      </p>
			    </div>
			</div>
		);
	}
}

BlockContent.defaultType = {
  className: PropTypes.string,
  id: PropTypes.string,
  imgLocation: PropTypes.string,
  contentClassName: PropTypes.string
}

BlockContent.defaultProps = {
  className: '',
  id: '',
  imgLocation: '',
  contentClassName: ''
}

