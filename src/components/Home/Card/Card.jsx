function Card({ product }) {
  return (
    <>
      <h2>{product.title}</h2>
      <h4>{product.price}</h4>
      <p>{product.description}</p>
      <p>{product.category}</p>
      {/* <img src={product.image}></img> */}
      <h3>Rating</h3>
      <span>{product.rating.rate}</span>
      <span>{product.rating.count}</span>
    </>
  );
}

export default Card;
