import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {updateUser} from "./redux/action";

function App(props) {
  console.log("props in App : " , props);
  return (
    <div className="App">
      <p>DEMO_Redux</p>
      <p>{props.user}</p>
      <button onClick={() => props.updateUser("KIM SOOYOUNG")}>액션 디스패치!!!</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products : state.products ,
  user : state.user,
});

const mapActionToProps = (dispatch) => ({
  updateUser : (name) => dispatch(updateUser(name)),
  }
);

export default connect(mapStateToProps , mapActionToProps)(App);
