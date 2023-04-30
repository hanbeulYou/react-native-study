import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {Order} from '../slices/order';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import EachOrder from '../components/EachOrder';

function Orders() {
  const orders = useSelector((state: RootState) => state.order.orders);
  const renderItem = useCallback(({item}: {item: Order}) => {
    return <EachOrder item={item} />;
  }, []);

  return (
    <View>
      <FlatList
        data={orders}
        // key의 역할(함수)
        keyExtractor={item => item.orderId}
        // 랜더할 내용
        renderItem={renderItem}
      />
    </View>
  );
}

export default Orders;
