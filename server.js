const express = require('express');
const app = express();
const port = 8000;

// Корневой маршрут
app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

// Маршрут /about
app.get('/about', (req, res) => {
  res.json({
    name: 'Eleonora', // Замени "Eleonora" на своё имя
    age: 16, // Пример: добавь другие данные, если нужно
    hobby: 'Art and Game Design'
  });
});

// Маршрут /datetime (дополнительное задание)
app.get('/datetime', (req, res) => {
  const currentDateTime = new Date().toISOString();
  res.send(currentDateTime);
});

// Обработка неизвестных маршрутов
app.use((req, res) => {
  res.status(404).send('404: Page not found');
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
