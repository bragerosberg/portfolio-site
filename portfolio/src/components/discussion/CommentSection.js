import React, { useRef, useState } from 'react';
import './styles/chat.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import ChatInfo from './ChatInfo';

const fbconfig = require("./FIREBASE_CONFIG.json");

firebase.initializeApp(fbconfig);
firebase.analytics();

const auth = firebase.auth();
const firestore = firebase.firestore();

function Chat() {

  const [user] = useAuthState(auth);

  return (
    <div className="chat">
      <header>
        <h1>Comments</h1>
        {user ? <SignOut /> : <SignIn />}
      </header>

      <section>
        {user ? <ChatRoom /> : <ChatInfo />}
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="signIn chatButton" onClick={signInWithGoogle}>Sign In with Google</button>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="signOut chatButton" onClick={() => auth.signOut()}>Sign Out</button>
  )
}


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});
  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main className="chatBoard"> 

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form className="enterMessage" onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Enter your message ..." />

      <button className="sendMessage chatButton" type="submit" disabled={!formValue}>Send</button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img className="profilePhoto" src={photoURL} alt="usersPhoto" />
      <p className="messageText">{text}</p>
    </div>
  </>)
}


export default Chat;