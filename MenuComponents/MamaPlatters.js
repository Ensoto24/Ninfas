import styles from "../styles/menu.module.css";

export default function MamaPlatters() {
  return (
    <div className={styles.container}>
      <hr />
      <h2>Mama's Pechuga Platters</h2>

      <h5>
        Served with Mexican Rice, Charra Beans, Pico de Gallo, Guacamole, and
        Sour Cream
      </h5>

      <div className={styles.itemContainer}>
        <div className={styles.item}>
          <hr />
          <h2>Pechuga a la Guera</h2>
          <p>
            Chicken breast stuffed with baby shrimp and jack cheese. Sauteed
            with mushrooms in a garlic butter sauce
          </p>
          <h3>Reg. $23</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Pechuga a la ninfa</h2>
          <p>
            Chicken breast topped with sauteed onions, tomatoes and
            jalapenos(spicy).
          </p>
          <h3>Reg. $18</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Pechuga Chihuahua</h2>
          <p>
            Charbroiled chicken breast topped with jack cheese, poblano peppers,
            bacon, and mushrooms.
          </p>
          <h3>Reg. $18</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Pechuga Acapulcco</h2>
          <p>
            Breaded and golden fried chicken topped with ranchero sauce and
            monterey jack cheese.
          </p>
          <h3>Reg. $19</h3>
        </div>
        <div className={styles.item}>
          <hr />
          <h2>Pechuga Gratinada</h2>
          <p>
            Charbroiled chicken breat topped with jack cheese, sauteed
            mushrooms, onions, and bell peppers.
          </p>
          <h3>Reg. $18</h3>
        </div>
      </div>
    </div>
  );
}
