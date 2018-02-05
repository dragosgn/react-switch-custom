import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import styled from "styled-components"
import Switch from 'rc-switch';
import 'rc-switch/assets/index.css';



import "react-toggle/style.css" // for ES6 modules


import { Field } from 'redux-form'
import { Provider } from "react-redux"
import { reduxForm } from 'redux-form'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'



const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};


const Root = styled.div`
  display: flex;
  align-items: center;
  .rc-switch.rc-switch-checked {
    border: 1px solid #9dc217;
    background-color: #9dc217;
  }
`

const Values = styled.div`
  display:flex;
`

class ToogleRender extends React.Component{
  render(){
    return(
      <Root>
        <Switch
          onChange={this.props.input.onChange}
          value={this.props.input.value}
        />
        <Values>Value: {this.props.input.value}</Values>
      </Root>
    )
  }
}


let SwitchForm = props => {
  const { handleSubmit } = props
  return <form onSumbit={handleSubmit} >
    <Field name="status" component={ToogleRender} type="text" />
  </form >
}

SwitchForm = reduxForm({
  // a unique name for the form
  form: 'switch'
})(SwitchForm)

const rootReducer = combineReducers({
  form: formReducer
})

const store = createStore(rootReducer)

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
    <SwitchForm />
  </div>
);

render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
