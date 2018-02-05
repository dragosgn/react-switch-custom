import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import styled from "styled-components"

import Toggle from 'react-toggle'
import "react-toggle/style.css" // for ES6 modules



const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};


const Root = styled.div`
  display: flex;
  align-items: center;
  .react-toggle--checked .react-toggle-track {
    background-color: #ab199f;
  }
  .react-toggle--checked .react-toggle-thumb {
  border-color: #ab199f;
  outline: none;
  }
  .react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: #ab199f;
}
`

const Span = styled.span`
  padding-left: 1rem;
  display: flex;
  align-items: center;
`

// colors to be replaced with custom

class ToogleRender extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      tofuIsReady: false
    }

    this.handleTofuChange = this.handleTofuChange.bind(this)
  }

  handleTofuChange() {
    this.setState({
      tofuIsReady: !this.state.tofuIsReady
    })
  }
  render(){
    return(
      <Root>
          <Toggle
            defaultChecked={this.state.tofuIsReady}
            icons={false}
            onChange={this.handleTofuChange} />
        <Span>{this.state.tofuIsReady ? "Tofu ready" : "Tofu not ready"}</Span>
      </Root>
    )
  }
}

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {'\u2728'}</h2>

    <ToogleRender />
  </div>
);

render(<App />, document.getElementById('root'));
