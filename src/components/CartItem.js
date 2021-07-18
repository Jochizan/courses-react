const CartItem = ({ data, deleteFromCart }) => {
  let { id, name, price } = data;

  return (
    <div style={{ borderBottom: 'thin solid gray' }}>
      <h4>{name}</h4>
      <h5>${price}.00</h5>
      <button>Eliminar Uno</button>
      <button>Eliminar Todos</button>
    </div>
  );
};

export default CartItem;
