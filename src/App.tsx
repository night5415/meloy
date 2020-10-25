import React, { ChangeEvent, useState } from "react";
import AwesomeTextbox from "./components/AwesomeTextbox";
import AwesomeButton from "./components/AwesomeButton";
import "./App.css";
import * as firebase from "firebase/app";
import "firebase/firebase-database";

interface IUser {
  UserId: number,
  FirstName?: string,
  LastName?: string,
  Email: string
}

function App() {
  const [userId, setUserId] = useState(Number),
    [firstName, setFirstName] = useState<string>(),
    [lastName, setLastName] = useState<string>(),
    [email, setEmail] = useState<string>(),
    pId = (e: ChangeEvent<HTMLInputElement>) => {
      let id = Number.parseInt(e.target.value);
      setUserId(id);
    },
    pFirst = (e: ChangeEvent<HTMLInputElement>) => {
      setFirstName(e.target.value);
    },
    pLast = (e: ChangeEvent<HTMLInputElement>) => {
      setLastName(e.target.value);
    },
    pEmail = (e: ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    onUserDelete = () => {
      firebase.database().ref(`users/${userId}`)
        .remove()
        .then(() => {
          alert('User Deleted');
        })
        .catch(e => {
          console.error(e);
        });
    },
    onUserSave = () => {
      const user: IUser = {
        UserId: userId,
        FirstName: firstName,
        LastName: lastName,
        Email: email!
      };

      if (Number.isNaN(user.UserId) || !user.UserId) {
        alert('Failed to save User');
        return;
      }

      firebase.database().ref(`users/${userId}`).set(user)
        .then((t) => {
          alert('User Saved');
        })
        .catch((e) => {
          alert("Error Saving User");
        });
    };
  return (
    <div className="App">
      <AwesomeTextbox labelFor="User_Id" onValChange={pId} required={true}></AwesomeTextbox>
      <AwesomeTextbox labelFor="First_Name" onValChange={pFirst}></AwesomeTextbox>
      <AwesomeTextbox labelFor="Last_Name" onValChange={pLast}></AwesomeTextbox>
      <AwesomeTextbox labelFor="Email" onValChange={pEmail} required={true}></AwesomeTextbox>
      <AwesomeButton text="Save User" onUserClick={onUserSave}></AwesomeButton>
      <AwesomeButton text="Delete User" onUserClick={onUserDelete}></AwesomeButton>
    </div>
  );
}

export default App;
