import React from "react";

const History = ({ orders }) => {

  function getTotal(orderDetails) {
    return (
      orderDetails.reduce((acc, order) => acc + order.product.price * order.quantity, 0) / 100
    ).toFixed(2);
  }

  return (
    <div style={{ fontFamily: "ClashDisplay-Medium" }} className='mt-6 text-xl'>
      <div className='flex flex-col sm:flex-row text-center'>
        <div className='sm:w-1/2 px-15 py-2 font-bold bg-[#222421] text-[#9F948B]'>
          N°
        </div>
        <div className='sm:w-1/2 px-8 py-2 font-bold bg-[#222421] text-[#9F948B]'>
          Items
        </div>
        <div className='sm:w-1/2 px-5 py-2 font-bold bg-[#222421] text-[#9F948B]'>
          Date
        </div>
        <div className='sm:w-1/2 px-2 py-2 font-bold bg-[#222421] text-[#9F948B]'>
          {" "}
          Total
        </div>
      </div>
      {orders &&
        orders.map((order) => (
          <div key={order.id} className='flex flex-col sm:flex-row'>
            <div className='sm:w-1/2 px-10 py-2'>#{order.id}</div>
            <div className='sm:w-1/2 px-5 py-2'>
              {order.orderDetails.length}
            </div>
            <div className='sm:w-1/2 px-10 py-2'>15/03/2023</div>
            <div className='sm:w-1/2 px-10 py-2'>
              {getTotal(order.orderDetails)}$
            </div>
          </div>
        ))}
    </div>
  );
};

export default History;
