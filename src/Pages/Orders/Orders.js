
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import OrderRow from './OrderRow';

const Orders = () => {
    useTitle('Orders')
    const { user, logOut } = useContext(AuthContext)
    // console.log(user)
    const [orders, setOrders] = useState([])





    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order')
     if(proceed) {
    fetch(`https://genius-car-server-alpha-red.vercel.app/orders/${id}`, {
        method: 'DELETE',
        headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.deletedCount > 0){
            alert('Deleted Successfully');
            const remaining = orders.filter(odr => odr._id !== id)
            setOrders(remaining)
        }
    })
}
}
const handleStatusUpdate = id => {
        fetch(`https://genius-car-server-alpha-red.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data => {console.log(data)
                if(data.modifiedCount>0){
                        // const remaining = orders.filter(odr => odr._id !== id)
                        const approving = orders.find(odr => orders._id ===id)
                        approving.status = 'Approved'
                        const newOrders = [ approving , ...approving]
                        setOrders(newOrders)

                }}
        )
}




    useEffect(() => {
        fetch(`https://genius-car-server-alpha-red.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                   return logOut()
                }

               return  res.json()})
            .then(data => {

                // console.log('received', data)
                setOrders(data)})

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
                        orders?.map( order => <OrderRow
                            key={order._id}
                            order={order}
                            handleDelete= {handleDelete}
                            handleStatusUpdate= {handleStatusUpdate}


                            ></OrderRow>)
                       }




                    </tbody>
                    {/* <!-- foot --> */}


                </table>
            </div>
        </div>
    );
};

export default Orders;
