"use client";
import "../app/global.css";
import { useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import urlApi from "@/config/globals_api";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [fullOrder, setFullOrder] = useState(null);
  
  async function openModal(order) {
    setSelectedOrder(order);
    setIsModalOpen(true);

    try {
      const response = await fetch(urlApi + "/getOrderByFullId/" + order.id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      setFullOrder(data);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(urlApi + "/getOrders", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        let data = await response.json();

        // Filtra las órdenes por el estado 2
        data = data.filter(order => order.status === 2 || order.status === 3 || order.status === 4);

        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrders();
  }, []);

  
  


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
  function getColorClass(status) {
    switch (status) {
      case 2:
        return "bg-yellow-300";
      case 3:
        return "bg-green-300";
      case 4:
        return "bg-red-300";
      default:
        return "";
    }
  }
  function getStatusText(status) {
    switch (status) {
      case 2:
        return "Pendiente";
      case 3:
        return "Aceptado";
      case 4:
        return "Cancelado";
      default:
        return "";
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mb-16">
      {orders.map((order, index) => (
        <div
          key={index}
          className={`grid grid-cols-1 gap-2 border-2 border-gray-300 p-4 mb-4 rounded-lg shadow-md cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105 ${getColorClass(
            order.status
          )}`}
          onClick={() => openModal(order)}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
            {order.name}
          </h2>
          <p className="text-gray-600">{order.details}</p>
          <p className="font-medium text-gray-700">Total: {order.total}</p>
          <p className="text-blue-600">Estado: {getStatusText(order.status)}</p>
        </div>
      ))}
      {fullOrder && (
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
                  {fullOrder && fullOrder.client ? `Order ${fullOrder.client.name}` : "Loading..."}
                </Dialog.Title>

                <div className="mt-2">
                  {/* Aquí puedes agregar más campos de la orden y del cliente como se muestra arriba */}
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
