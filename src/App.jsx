import React from 'react';
import BlogCard from './components/BlogCard';

function App() {
  
  // Ця змінна Vite автоматично додасть /my-react-app/
  // під час 'build', але буде '/' під час 'dev'
  const BASE_PATH = import.meta.env.BASE_URL;

  const cardData = {
    // Використовуємо BASE_PATH для побудови правильного шляху
    imageSrc: `${BASE_PATH}assets/Blog Image.png`, // ✅
    category: 'HTML & CSS',
    publishDate: 'Публікація 1 Вересня 2025',
    title: 'Практична №3',
    description: 'Мета практичної роботи полягає в тому, щоб налаштувати середовище розробки VS Code, а також реалізувати картку блогу для вдосконалення фундаментальних навичок з HTML та CSS.',
    authorAvatarSrc: `${BASE_PATH}assets/avatar_male.png`, // ✅
    authorName: 'Шевчук Ярослав' // <-- Я також оновив ім'я
  };

  return (
    <main>
      <BlogCard {...cardData} />
    </main>
  );
}

export default App;