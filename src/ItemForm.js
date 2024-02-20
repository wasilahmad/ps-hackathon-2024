import React, { useState } from 'react';
import firebase from './firebase';

const ItemForm = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.firestore().collection('items').add({ title });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter item title"
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;
