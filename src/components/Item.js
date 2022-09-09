// import { Button } from "semantic-ui-react";
// import styles from "../../styles/Item.module.css";

const Item = ({ item }) => {
  // console.log("item : ", item);
  const {
    name,
    image_link,
    price,
    description,
    updated_at,
    category,
    product_type,
    product_link,
  } = item;

  return (
    <div>
      <div className={styles.item_top}>
        <img src={image_link} alt="" />
        <div className={styles.item_top_info}>
          <strong>{name}</strong>
          <strong>{price}</strong>
          {/* <Button nodeRef={nodeRef}>Buy</Button> */}
          <span>
            {category}
            {product_type}
          </span>
          <div>
            <button>Buy</button>
          </div>
        </div>
      </div>
      <div className={styles.item_bottom}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Item;
