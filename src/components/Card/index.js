import { useState } from 'react';
import styles from './Card.module.scss';

function Card({ title, price, imageUrl, addToCart }) {
  const [isAdded, setIsAdded] = useState(false);

  function onClickPlus() {
    addToCart({ title, price, imageUrl });
    setIsAdded(!isAdded);
  }

  return (
    <div className={styles.card}>
      <div className={styles.favourite}>
        <img src="/img/unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneaker" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;