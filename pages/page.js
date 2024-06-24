import React, { useState, useEffect } from 'react';
import styles from "./page.module.css";
import Navbar from './navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Importiere die FontAwesome CSS-Datei
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faPenToSquare);
library.add(faTrash);


export default function Home() {
  const [data, setData] = useState([]);
  const [editingItem, setEditingItem] = useState({ name: '', carbs: '', protein: '', fat: '' });

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
   setEditingItem({ name: '', carbs: '', protein: '', fat: '' });
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.container1}>
          <h1 className={styles.title}>Food Database</h1>
          <h2 className={styles.infobox}>Willkommen bei unserer Lebensmittel Datenbank, hier kannst du Nährwerte zu verschiedensten Lebsnmitteln durchstöbern oder selbst welche hinzufügen!</h2>
       </div>

       <div className={styles.container2}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input name="name" value={editingItem.name} onChange={handleInputChange} placeholder="Name" />
        <input name="carbs" value={editingItem.carbs} onChange={handleInputChange} placeholder="Carbs" />
        <input name="protein" value={editingItem.protein} onChange={handleInputChange} placeholder="Protein" />
        <input name="fat" value={editingItem.fat} onChange={handleInputChange} placeholder="Fat" />
        <button type="submit">{editingItem.id ? 'Update' : 'Add'}</button>
      </form>


        <table className={styles.table}>
          <thead>
            <tr>
              <th>Lebensmittel</th>
              <th>Kohlenhydrate</th>
              <th>Protein</th>
              <th>Fett</th>
              <th>bearbeiten/löschen</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.carbs}</td>
                <td>{item.protein}</td>
                <td>{item.fat}</td>
                <td>
                <button onClick={() => editData(item)} className={styles.editButton}>
                <FontAwesomeIcon icon={faPenToSquare} /> 
                </button>
                <button onClick={() => deleteData(item.id)} className={styles.deleteButton}>
                <FontAwesomeIcon icon={faTrash} /> 
                 </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <div>
          <Navbar />
        </div>
      </div>
    </main>
  );
}