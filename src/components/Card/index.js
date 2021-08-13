import styles from './Card.module.scss';

function Card({title, price, url}) {
  function handleCardClick() {
    console.log(1111);
  }

  return (
    <div className={styles.card}>
      <div className={styles.favourite}>
        <img src="/img/unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={ url } alt="Sneaker" />
      <h5>{ title }</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{ price } руб.</b>
        </div>
        <button className="button" onClick={handleCardClick}>
          <img width={11} height={11} src="/img/btn-plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;