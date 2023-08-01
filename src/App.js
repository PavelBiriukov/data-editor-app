import React, { useState } from 'react';
import './App.css';

const initialData = [
  {
    name: 'foo1',
    value: 'bar1',
  },
  {
    name: 'foo2',
    value: 'bar2',
  },
  // Добавьте другие элементы здесь
];

function App() {
  const [data, setData] = useState(initialData);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(data[index]);
  };

  const handleValueChange = (event) => {
    const { value } = event.target;
    setSelectedItem((prevSelectedItem) => ({
      ...prevSelectedItem,
      value,
    }));
  };

  const handleSave = () => {
    const updatedData = [...data];
    const selectedItemIndex = data.findIndex((item) => item.name === selectedItem.name);
    updatedData[selectedItemIndex] = selectedItem;
    setData(updatedData);
    setSelectedItem(null);
  };

  return (
    <div className="App">
      <h1 className="title">Редактор структуры данных</h1>
      <div className="container">
        <div className="list">
          <ul>
            {data.map((item, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(index)}
                className={selectedItem?.name === item.name ? 'active' : ''}
              >
                {item.value}
              </li>
            ))}
          </ul>
        </div>
        <div className="editor">
          <h2>Редактировать элемент</h2>
          {selectedItem ? (
            <>
              <label htmlFor="valueInput">Значение:</label>
              <input
                type="text"
                id="valueInput"
                value={selectedItem.value}
                onChange={handleValueChange}
              />
              <button onClick={handleSave} className="saveButton">Сохранить</button>
            </>
          ) : (
            <p>Выберите элемент для редактирования.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
