import React, { Component } from "react";
import NumericInput from "react-native-numeric-input";
import { connect } from "react-redux";
import { addItem, removeItem } from "../../redux/actions";

// NativeBase Components
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Thumbnail,
  Left,
  Picker,
  Right,
  Text,
} from "native-base";

// Style
import styles from "./styles";

class CoffeeDetail extends Component {
  state = {
    drink: "",
    option: "",
    quantity: 1,
  };

  Add = () => {
    let newItem = {
      drink: this.state.drink,
      option: this.state.option,
      quantity: this.state.quantity,
    };
    console.log(newItem);

    this.props.add(newItem);
  };

  render() {
    const { coffeeshop } = this.props.route.params;
    return (
      <Container>
        <Content>
          <Card transparent style={styles.card}>
            <CardItem>
              <Left>
                <Text style={styles.text}>
                  {coffeeshop.name + "\n"}
                  <Text note>{coffeeshop.location}</Text>
                </Text>
              </Left>
              <Body />
              <Right>
                <Thumbnail bordered source={coffeeshop.img} />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Picker
                  note
                  mode="dropdown"
                  style={styles.picker}
                  selectedValue={this.state.drink}
                  onValueChange={(drink) => this.setState({ drink })}
                  placeholder="Choose Drink"
                >
                  <Picker.Item label="Cappuccino" value="Cappuccino" />
                  <Picker.Item label="Latte" value="Latte" />
                  <Picker.Item label="Espresso" value="Espresso" />
                </Picker>
              </Left>
              <Body>
                <Picker
                  note
                  mode="dropdown"
                  style={styles.picker}
                  selectedValue={this.state.option}
                  onValueChange={(option) => this.setState({ option })}
                  placeholder="Choose Option"
                >
                  <Picker.Item label="Small" value="Small" />
                  <Picker.Item label="Medium" value="Medium" />
                  <Picker.Item label="Large" value="Large" />
                </Picker>
              </Body>
            </CardItem>
            <CardItem>
              <Body style={styles.numericInput}>
                <NumericInput
                  value={this.state.quantity}
                  onChange={(quantity) => this.setState({ quantity })}
                  initValue={this.state.quantity}
                />
              </Body>

              <Right>
                <Button full style={styles.addButton} onPress={this.Add}>
                  <Text>Add</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  items: state.cartReducer,
});
const mapDispatchToProps = (dispatch) => {
  return {
    add: (newItem) => dispatch(addItem(newItem)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeDetail);
