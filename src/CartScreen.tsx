import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../redux/store';

const CartScreen = () => {
  const cart = useSelector((state:any) => state.ecommerce.cart);
  const dispatch = useDispatch();

  const calculateTotal = () =>
    cart.reduce((total:any, item:any) => total + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text>{item.name}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <Text>${item.price * item.quantity}</Text>
            <View style={styles.buttons}>
              <Button title="+" onPress={() => dispatch(incrementQuantity(item.id))} />
              <Button title="-" onPress={() => dispatch(decrementQuantity(item.id))} />
              <Button title="Remove" onPress={() => dispatch(removeFromCart(item.id))} />
            </View>
          </View>
        )}
      />
      <Text style={styles.total}>Total: ${calculateTotal()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cartItem: {
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default CartScreen;
