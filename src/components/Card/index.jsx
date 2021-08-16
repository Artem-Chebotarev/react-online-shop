import ContentLoader from 'react-content-loader';
import { useShopContext } from '../../context/shopContext';
import styles from './Card.module.scss';

function Card({
  loading,
  id,
  title,
  price,
  imageUrl,
  addToCart,
  addToFavourites,
}) {

  const { isItemAdded, isItemFavourite } = useShopContext();

  const obj = { id, parentId: id, title, price, imageUrl };

  function onClickPlus() {
    addToCart(obj);
  }

  function onClickFavourite() {
    addToFavourites(obj);
  }

  return (
    <div className={styles.card}>
      {
        loading ?
          (<ContentLoader
            speed={2}
            width={155}
            height={250}
            viewBox="0 0 155 265"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
            <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
            <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
            <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
            <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
          </ContentLoader>)
          :
          <>
            {addToFavourites && <div className={styles.favourite}>
              <img
                onClick={onClickFavourite}
                src={isItemFavourite(id) ? "/img/liked.svg" : "/img/unliked.svg"}
                alt="Like" />
            </div>}
            <img width={133} height={112} src={imageUrl} alt="Sneaker" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{price} руб.</b>
              </div>
              {addToCart && <img
                className={styles.plus}
                onClick={onClickPlus}
                src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
                alt="Plus"
              />}
            </div>
          </>
      }
    </div>
  );
}

export default Card;