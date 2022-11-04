import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user } = useContext(AuthContext)
    // console.log(user)
    const [orders, setOrders] = useState([])
   

    useEffect(() => {
        fetch(`http://localhost:9000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [user?.email])

    return (
        <div>
            <h2 className="text-5xl">You have {orders.length} orders</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                       {
                        orders?.map( order => <OrderRow key={order._id} order={order} ></OrderRow>)
                       }
                
                        
                       
                  
                    </tbody>
                    {/* <!-- foot --> */}
                  

                </table>
            </div>
        </div>
    );
};

export default Orders;