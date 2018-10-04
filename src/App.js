import React from 'react';

import './App.scss';
import { HeaderButton } from './components/header_button.js';
import { ButtonBar } from './components/header_button_bar.js';
import { MenuButton } from './components/menu_icon_button.js';
import { BlockContent } from './components/content_block.js';

import Button from '@material-ui/core/Button';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="header-container">
          <Button className="with-main-left">
            <MenuButton />
          </Button>
          <h1 className="main-header">
            Challenge<span className="soft-word">Soft</span>
          </h1>
          <div className="with-main">
            <ButtonBar />
          </div>
        </div>
        <div>
          <BlockContent className="right-content" contentClassName="right-text" imgLocation="img-left" id="about"/>
        </div>
        <div>
          <BlockContent className="left-content" contentClassName="left-text" imgLocation="img-right" id="technologies"/>
        </div>
        <div>
          <BlockContent className="right-content" contentClassName="right-text" imgLocation="img-left" id="team"/>
        </div>
        <div>
          <BlockContent className="left-content" contentClassName="left-text" imgLocation="img-right" id="clients"/>
        </div>
        <Button>Click</Button>
      </div>
    );
  }
}

export default App;
