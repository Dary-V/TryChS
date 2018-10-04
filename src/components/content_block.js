import React from 'react';
import '../App.scss';

export class BlockContent extends React.Component {
	render() {
		return (
			<div className={this.props.className} id={this.props.id}>
				<h2 className="content-title">This is Title!</h2>
				<div className="inline-div">
				  <img src="https://www.lifewire.com/thmb/t7iieKO_QKc27AE172qNTgLugO4=/1695x1132/filters:no_upscale():fill(FFCC00,1)/iStock_83681883_MEDIUM-57fbf5e73df78c690f7bc985.jpg" alt="some text" className={this.props.imgLocation}/>
				  <p className={this.props.contentClassName}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br/>
				    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque <br/>
			    	penatibus et magnis dis parturient montes, nascetur ridiculus mus. <br/>
			    	Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. <br/>
			    	Nulla consequat massa quis enim. Donec pede justo, fringilla vel, <br/>
			    	aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, <br/>
			    	venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. <br/>
			    	Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. <br/>
			    	Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, <br/>
			    	eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. <br/>
			    	Phasellus viverra nulla ut metus varius laoreet. <br/>
			    	Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. <br/>
			    	Curabitur ullamcorper ultricies nisi. <br/>
			    	Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget <br/>
			    	condimentum rhoncus, sem quam semper libero, <br/>
			    	sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, <br/>
			    	hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero <br/>
			        venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros <br/>
			        faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. 
			      </p>
			    </div>
			</div>
		);
	}
}