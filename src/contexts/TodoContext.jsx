import React from 'react';
import firebase from '../firebase';
  
export const TodoContext = React.createContext();
export const ref =  firebase.firestore().collection('todos');