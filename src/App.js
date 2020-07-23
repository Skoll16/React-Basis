import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Message from './components/Message'
import FucntionClick from './components/FuncionClick'
import FunctionClick from './components/FuncionClick';
import ClassClick from './components/ClassClick';
import Event from './components/Event'
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet'
import Form from './components/Form'
import FragmentDemo from './components/FragmentDemo';
import Refs from './components/Refs';
import PortalDemo from './components/PortalDemo';
const fname="zeher"
function App() {
  return (
    <div className="App">
    <PortalDemo/>
    {/* <Refs/> */}
    {/* <FragmentDemo/> */}
    {/* <Form></Form> */}
    {/* <StyleSheet property={true}/> */}
    {/* <NameList/> */}
    {/* <UserGreeting></UserGreeting> */}
    {/* <ParentComponent/> */}
    {/* <FunctionClick></FunctionClick>

    <ClassClick></ClassClick>

    <Event></Event> */}
    {/* <Message></Message> */}
    {/* <Greet name="skoll 1" fname={fname}>
      <p>This is Skoll1 parah</p>
    </Greet>
    <Greet name="skoll 2" fname="suraj">
      <button>hey</button>
    </Greet>
    <Greet name="skoll 3" fname="suraj"/>
    {/* <Greet/>
    <Greet/> */}
    {/* <Welcome name="skoll 1" fname={fname}/> */} 
    </div>
  );
}

export default App;
