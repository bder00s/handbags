import React from "react";

function Product({ redLabel, image, titleImage, name, price }) {
  return (
    <article>
      <span>{redLabel}</span>
      <img src={image} alt={titleImage} />
      <p>{name}</p>
      <h4>€{price},-</h4>
    </article>
  );
}

export default Product;