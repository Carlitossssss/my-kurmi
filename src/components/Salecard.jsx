"use client";
import Image from "next/image";
import Link from "next/link";
import urlApi from '@/config/globals_api'
import { useState, useEffect } from 'react'

export default function ProductCard(props) {

    const [sales, setSales] = useState([])

    useEffect(() => {
        fetch(urlApi + '/getSalesByProducer', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setSales(data))
            .catch(error => console.error('Error ->', error))
    }, [])

    return (
        <div className="table w-full rounded-lg shadow-2xl shadow-lime-900/50">
            <div className="table-header-group">
                <div className="table-row font-bold ">
                    <div className="table-cell text-left p-3">Fecha del Pedido</div>
                    <div className="table-cell text-left p-3 text-center">Total</div>
                    <div className="table-cell text-left p-3 text-center">Estado</div>
                    <div className="table-cell text-left"></div>
                </div>
            </div>
            <div className="table-row-group">
                {sales.map((order) => (
                    <div className="table-row" key={order._id}>
                        <div className="table-cell p-3 bg-lime-200">{order.date_order}</div>
                        <div className="table-cell p-3 text-center">Bs. {order.total}.00</div>
                        <div className="table-cell p-3 text-center">{order.status}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}