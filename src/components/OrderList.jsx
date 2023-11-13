"use client";
import "../app/global.css";
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const OrderList = () => {
  const [orders, setOrders] = useState([
    {
      name: "Pedido 1",
      details: "Detalles del pedido 1",
      total: 100,
      status: "En proceso",
    },
    {
      name: "Pedido 1",
      details: "Detalles del pedido 1",
      total: 100,
      status: "En proceso",
    },
    {
      name: "Pedido 1",
      details: "Detalles del pedido 1",
      total: 100,
      status: "En proceso",
    },
    {
      name: "Pedido 1",
      details: "Detalles del pedido 1",
      total: 100,
      status: "En proceso",
    },
    // ... más pedidos ...
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const openModal = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const acceptOrder = () => {
    // Aquí puedes agregar el código para aceptar la orden
    closeModal();
  };

  const askQuestion = () => {
    // Aquí puedes agregar el código para hacer una pregunta
    closeModal();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mb-16">
      {orders.map((order, index) => (
        <div
          key={index}
          className="grid grid-cols-1 gap-2 border-2 border-gray-300 p-4 mb-4 rounded-lg shadow-md cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105"
          onClick={() => openModal(order)}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
            {order.name}
          </h2>
          <p className="text-gray-600">{order.details}</p>
          <p className="font-medium text-gray-700">Total: {order.total}</p>
          <p className="text-blue-600">Estado: {order.status}</p>
        </div>
        
      ))}
      {selectedOrder && (
        <Transition appear show={isModalOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={closeModal}
          >
            <div className="min-h-screen px-4 text-center">
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg md:text-xl font-medium leading-6 text-gray-900"
                >
                  {selectedOrder.name}
                </Dialog.Title>

                <div className="mt-2">
                  <p className="text-gray-600">{selectedOrder.details}</p>
                  <p className="mt-2 font-medium text-gray-700">
                    Total: {selectedOrder.total}
                  </p>
                  <p className="mt-2 text-blue-600">
                    Estado: {selectedOrder.status}
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={acceptOrder}
                  >
                    Aceptar orden
                  </button>
                  <button
                    type="button"
                    className="ml-4 inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                    onClick={askQuestion}
                  >
                    Preguntar
                  </button>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </div>
  );
};

export default OrderList;
