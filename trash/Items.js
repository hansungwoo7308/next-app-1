import Link from "next/link";
import { Grid } from "semantic-ui-react";
// import styles from "../../styles/Items.module.css";

const Items = ({ list }) => {
  return (
    <Grid columns={3}>
      <Grid.Row>
        {list.map((item) => (
          <Grid.Column key={item.id}>
            <Link href={`/detail/[id].js`} as={`/detail/${item.id}`}>
              {/* <Link href={`/view/[id].js`} as={`/view/${item.id}`}> */}
              <a>
                <div className={styles.item}>
                  <img src={item.image_link} alt={item.name} />
                  <strong>{item.name}</strong>
                  <span>
                    {item.category} {item.product_type}
                  </span>
                  <strong className={styles.price}>${item.price}</strong>
                </div>
              </a>
            </Link>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
};

export default Items;
