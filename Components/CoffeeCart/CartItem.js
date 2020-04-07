import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItem, checkout } from "../../redux/actions";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

// Style
import styles from "./styles";

class CartItem extends Component {
  render() {
    const item = this.props.item;
    return (
      <ListItem style={styles.listStyle}>
        <Left>
          <Text style={styles.drink}> {item.drink} </Text>
          <Text note style={styles.option}>
            {item.option}
          </Text>
        </Left>
        <Body>
          <Text style={styles.quantity}>{item.quantity}</Text>
        </Body>
        <Right>
          <Button transparent>
            <Icon
              name="trash"
              style={styles.removeItem}
              onPress={() => this.props.remove(item)}
            />
          </Button>
        </Right>
      </ListItem>
    );
  }
}
const mapStateToProps = (state) => ({
  items: state.cartReducer.items,
});
const mapDispatchToProps = (dispatch) => {
  return {
    remove: (item) => dispatch(removeItem(item)),
    check: () => dispatch(checkout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
