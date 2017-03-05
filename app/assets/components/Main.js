require('normalize.css/normalize.css');
require('styles/App.scss'); 


// 获取图片相关的数据
var imageDatas = require('../data/imageDatas.json')
import React, { Component} from 'react';
import { Menu, Segment, Button } from 'semantic-ui-react';


class AppComponent extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    let segment =  <Segment>
     an stretched grid column. This segment will always match the tab height
    </Segment>;
    if(activeItem == "home"){
    	segment = <Segment>
        home
        </Segment>;
    }
    return (
    		 <div>
    	        <Menu pointing secondary>
    	          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
    	          <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
    	          <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
    	          <Menu.Menu position='right'>
    	            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
    	          </Menu.Menu>
    	        </Menu>
    	       {segment}
    	      </div>
    	      
    	      
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
