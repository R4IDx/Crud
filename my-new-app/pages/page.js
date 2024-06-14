import React, { useState, useEffect } from 'react';
import styles from "./page.module.css";
import Navbar from './navbar';

export default function Home() {
  const [data, setData] = useState([]);
  const [editingItem, setEditingItem] = useState({ name: '', zutat1: '', zutat2: '', zutat3: '' });

  useEffect(() => {
    fetch('/api/speisen')
      .then(response => response.json())
      .then(setData);
  }, []);

  const addData = (newData) => {
    fetch('/api/speisen', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then(response => response.json())
      .then(newItem => setData(oldData => [...oldData, newItem]));
  };

  const updateData = (id, updatedData) => {
    fetch(`/api/speisen?id=${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then(response => response.json())
      .then(updatedItem => setData(oldData => oldData.map(item => item.id === id ? updatedItem : item)));
  };
  
  const deleteData = (id) => {
    fetch(`/api/speisen?id=${id}`, {
      method: 'DELETE',
    })
    .then(() => setData(oldData => oldData.filter(item => item.id !== id)));
  };

  const editData = (item) => {
    setEditingItem(item);
  };
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditingItem({ ...editingItem, [name]: value });
  };
  
  const handleSubmit = () => {
    if (editingItem.id) {
      updateData(editingItem.id, editingItem);
    } else {
      addData(editingItem);
    }
   setEditingItem({ name: '', zutat1: '', zutat2: '', zutat3: '' });
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <Navbar />
        </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input name="name" value={editingItem.name} onChange={handleInputChange} placeholder="Name" />
        <input name="zutat1" value={editingItem.zutat1} onChange={handleInputChange} placeholder="Zutat 1" />
        <input name="zutat2" value={editingItem.zutat2} onChange={handleInputChange} placeholder="Zutat 2" />
        <input name="zutat3" value={editingItem.zutat3} onChange={handleInputChange} placeholder="Zutat 3" />
        <button type="submit">{editingItem.id ? 'Update' : 'Add'}</button>
      </form>


        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Zutat1</th>
              <th>Zutat2</th>
              <th>Zutat3</th>
              <th>Aktionen</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.zutat1}</td>
                <td>{item.zutat2}</td>
                <td>{item.zutat3}</td>
                <td>
                  <button onClick={() => editData(item)}>Update</button>
                  <button onClick={() => deleteData(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}