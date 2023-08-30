import React, {useState, useEffect} from 'react';
import {db} from '../firebase';
import Order from './Order';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      // Fetch orders from Firebase and update the state
      const ordersSnapshot = await db.collection('orders').get();
      const ordersData = ordersSnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setOrders(ordersData);
      setLoading(false);
    };

    fetchOrders();
  }, []);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {loading ? (
          <div>Loading...</div>
        ) : (
          orders.map((order) => <Order key={order.id} order={order} />)
        )}
      </div>
    </div>
  );
}

export default Orders;
