import React, { ChangeEvent, useState } from "react";
import Widget from "./components/widget";
import "./App.css";
import * as firebase from "firebase/app";
import "firebase/firebase-database";

function App() {
  const [firstName, setFirstName] = useState(""),
    [lastName, setLastName] = useState(""),
    first = (e: ChangeEvent<HTMLInputElement>) => {
      setFirstName(e.target.value);
    },
    last = (e: ChangeEvent<HTMLInputElement>) => {
      setLastName(e.target.value);
    },
    onSave = () => {
      var x = {
        FirstName: firstName,
        LastName: lastName,
      };
      firebase.database().ref("users/2").set(x);
    };
  return (
    <div className="App">
      <Widget labelFor="First_Name" onValChange={first}></Widget>
      <Widget labelFor="Last_Name" onValChange={last}></Widget>
      <input type="button" value="Click" onClick={onSave} />
    </div>
  );
}

export default App;
