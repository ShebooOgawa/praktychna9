import React from 'react';
import './BlogCard.css'; // Імпортуємо стилі для цього компонента

/**
 * Компонент картки блогу
 * Приймає дані через props
 */
export default function BlogCard({ 
  imageSrc, 
  category, 
  publishDate, 
  title, 
  description, 
  authorAvatarSrc, 
  authorName 
}) {
  return (
    <article className="blog-card">
      <div className="blog-card__image-container">
        <img 
          src={imageSrc} 
          alt="Blog illustration" 
          className="blog-card__image" 
        />
      </div>
      
      <div className="blog-card__content">
        <span className="blog-card__category">{category}</span>
        
        <p className="blog-card__date">{publishDate}</p>
        
        <h2 className="blog-card__title">
          {/* Робимо заголовок посиланням для hover-ефекту */}
          <a href="#">{title}</a>
        </h2>
        
        <p className="blog-card__description">{description}</p>
        
        <div className="blog-card__author">
          <img 
            src={authorAvatarSrc} 
            alt="Author avatar" 
            className="blog-card__author-avatar" 
          />
          <span className="blog-card__author-name">{authorName}</span>
        </div>
      </div>
    </article>
  );
}