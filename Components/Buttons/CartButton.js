import React from "react";
import { Icon, Text } from "native-base";
import { connect } from "react-redux";

// Screen Names
import { CART } from "../../Navigation/screenNames";

const CartButton = ({ navigation, items }) => {
  let itemsCount = 0;
  items.forEach((item) => {
    itemsCount += item.quantity;
  });
  return (
    <>
      <Text>{itemsCount}</Text>
      <Icon
        name="shoppingcart"
        type="AntDesign"
        onPress={() => navigation.navigate(CART)}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  items: state.cartReducer.items,
});

export default connect(mapStateToProps)(CartButton);
