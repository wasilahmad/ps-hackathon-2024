import React, { useEffect, useState } from 'react';
import firebase from './firebase';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => console.log(json))

    const unsubscribe = firebase
      .firestore()
      .collection('items')
      .onSnapshot((snapshot) => {
        const updatedItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(updatedItems);
      });

    return () => unsubscribe();
  }, []);

  const handleDelete = (id) => {
    firebase.firestore().collection('items').doc(id).delete();
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.title}
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
