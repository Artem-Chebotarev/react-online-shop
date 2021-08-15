import { useEffect, useState } from 'react';
import styles from './Card.module.scss';

function Card({ id, title, price, imageUrl, addToCart, addToFavourites, isInFavourites = false}) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavourite, setIsFavourite] = useState(isInFavourites);

  function onClickPlus() {
    addToCart({ title, price, imageUrl });
    setIsAdded(!isAdded);
  }

  function onClickFavourite() {
    addToFavourites({ id, title, price, imageUrl });
    setIsFavourite(!isFavourite);
  }

  return (
    <div className={styles.card}>
      <div className={styles.favourite}>
        <img
          onClick={onClickFavourite}
          src={isFavourite ? "/img/liked.svg" : "/img/unliked.svg"}
          alt="Like" />
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