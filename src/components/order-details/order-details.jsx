import styles from "./order-details.module.css";

export default function OrderDetails() {
  return (
    <>
      <p className={`${styles.title} text text_type_digits_large`}>034536</p>
      <p className={`${styles.subtitle} text text_type_digits_medium`}>
        идентификатор заказа
      </p>
      <div className={styles.check}></div>
      <p className={`${styles.text} text text_type_main_default`}>
        Ваш заказ начали готовить
      </p>
      <p
        className={`${styles.text} text text_type_main_default text_color_inactive`}
      >
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
}