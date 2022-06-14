import React from "react";
import { CurrencyIcon, Button, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../order-details/order-details";
import styles from "./burger-constructor.module.css";
import { ArrayPropTypes } from "../../utils/proptypes";
import Modal from "../modal/modal";

export default function BurgerConstructor({ data }) {
  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = React.useState(false);

  const openModal = () => {
    setIsOrderDetailsOpened(true);
  };

  const closeAllModals = () => {
    setIsOrderDetailsOpened(false);
  };

  const handleEscKeydown = (event) => {
    event.key === "Escape" && closeAllModals();
  };

  const mainArr = data.filter((el) => el.type === "main");
  const ingredients = Array.from(mainArr);
  const bunName = Array.from(data.filter((el) => el.type === "bun"))[0].name;

  return (
    <>
      <div className={styles.components}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={bunName + " (верх)"}
          price={data[0].price}
          thumbnail={data[0].image}
        />
        <ul className={styles.componentlist}>
          {ingredients.map((item, index) => (
            <li key={index}>
              <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image}
                isLocked={false}
              />
            </li>
          ))}
        </ul>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={bunName + " (низ)"}
          price={data[0].price}
          thumbnail={data[0].image}
        />
        <div className={styles.total}>
          <div className={styles.text}>
            <p className="text text_type_digits-medium">5772</p>
          </div>
          <CurrencyIcon type="primary" />
          <div className={styles.button}>
            <Button type="primary" size="medium" onClick={openModal}>
              Оформить заказ
            </Button>
          </div>
        </div>
        {isOrderDetailsOpened && (
          <Modal
            onOverlayClick={closeAllModals}
            onEscKeyDown={handleEscKeydown}
          >
            <OrderDetails />
          </Modal>
        )}
      </div>
    </>
  );
}

BurgerConstructor.propTypes = {
  data: ArrayPropTypes,
};