import NavStyles from './Card.module.css';

function truncateTitle(title) {
  const titleLength = 40;
  return title.length > titleLength
    ? `${title.substring(0, titleLength)}...`
    : title;
}

function getId(productId) {
  console.log(productId);
}

function Card({ product, onAddToCart, inCart = false }) {
  return (
    <a
      onClick={() => {
        getId(product.id);
      }}
      href='#'
      className={`${NavStyles['product-item']}`}
    >
      <div className={`${NavStyles['product-img-container']}`}>
        <img className={`${NavStyles['item-img']}`} src={product.image}></img>
      </div>
      <h2 className={`${NavStyles['product-title']}`}>
        {truncateTitle(product.title)}
      </h2>
      {!inCart && (
        <div className={`${NavStyles['product-extra-info']}`}>
          <div className={`${NavStyles['btn-container']}`}>
            <button
              onClick={onAddToCart}
              className={`${NavStyles['add-to-cart-btn']}`}
            >
              <ion-icon name='cart'></ion-icon>
              <span>Add to cart</span>
            </button>
          </div>
          <h4 className={`${NavStyles['product-price']}`}>${product.price}</h4>
        </div>
      )}
      {inCart && (
        <div className={`${NavStyles['product-extra-info']}`}>
          <div className={`${NavStyles['btn-container']}`}>
            <button
              onClick={onAddToCart}
              className={`${NavStyles['remove-from-cart-btn']}`}
            >
              <ion-icon name='trash'></ion-icon>
            </button>
          </div>
          <h4 className={`${NavStyles['product-price']}`}>${product.price}</h4>
        </div>
      )}

      {/* <p>{product.description}</p> */}
      {/* <p>{product.category}</p> */}
      {/* <h3>Rating</h3> */}
      {/* <span>{product.rating.rate}</span>zs */}
      {/* <span>{product.rating.count}</span> */}
    </a>
  );
}

export default Card;
