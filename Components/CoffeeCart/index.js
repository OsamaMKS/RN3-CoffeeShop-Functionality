import React from "react";
import { connect } from "react-redux";
import { checkout } from "../../redux/actions";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";

const CoffeeCart = (props) => {
  const items = props.items;

  const cartItems = items.map((item) => (
    <CartItem item={item} key={`${item.drink} ${item.option}`} />
  ));

  return (
    <List>
      {cartItems}
      <Button full danger onPress={() => props.check()}>
        <Text>Checkout</Text>
      </Button>
    </List>
  );
};
const mapStateToProps = (state) => ({
  items: state.cartReducer.items,
});

const mapDispatchToProps = (dispatch) => {
  return {
    check: () => dispatch(checkout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeCart);
