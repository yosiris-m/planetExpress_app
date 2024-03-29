import Button from "../../../components/Button";
import formatter from "../../../helpers/formatter";
import styles from "./CartSummary.module.scss";

function CartSummary({ cart, onDeleteToCart }) {
  const shippingCosts = 4;
  const articlesPrice = cart.reduce((acc, current) => acc + current.price, 0);
  const totalPrice = shippingCosts + articlesPrice;
  const totalWeight = cart.reduce((acc, current) => acc + current.weight, 0);

  const onclickDeleteToCart = () => {
    onDeleteToCart("");
  };

  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>Resumen del carrito</h3>

      <div className={styles.table}>
        <div>
          Número de paquetes: <span>{cart.length}</span>
        </div>
        <div>
          Peso total: <span>{totalWeight} gr</span>
        </div>
        <div>
          Precio de artículos: <span>{formatter.format(articlesPrice)}</span>
        </div>
        <div>
          Gastos de envio: <span>{formatter.format(shippingCosts)}</span>
        </div>
        <div>
          Total (IVA incluido):
          <span className={styles.table_total}>
            {formatter.format(totalPrice)}
          </span>
        </div>
      </div>
      <div>
        <Button label="Eliminar " onClick={onclickDeleteToCart} />
      </div>
    </section>
  );
}

export default CartSummary;
