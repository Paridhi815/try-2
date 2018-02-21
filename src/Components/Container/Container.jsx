import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Header from '../Header/Header';
import Body from '../Body/Body';
import store from '../../Redux/Store/store';
import SideBar from '../SideBar/SideBar';

class Container extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <div className="Container-div">
        {/* <SideBar /> */}
        <div className="Container-right">
          <Header headerText="The Book Shelf" />
          <Body />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root'),
);
