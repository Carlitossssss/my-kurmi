"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import urlApi from '@/config/globals_api';

const ListProducer = () => {
    const [producer, setProducer] = useState([]);
    const [loading, setLoading] = useState(true);

  


    useEffect(() => {
        const getProducer = async () => {
            const response = await fetch(urlApi + '/getProducer', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            const producer = await response.json();
            setProducer(producer);
            setLoading(false);
        };
        getProducer();
    }, []);

    console.log(producer); // para verificar que producer no es null o undefined
    console.log(producer.id); 

    return (
      <div className="flex justify-center bg-transparent mb-16">
        <table className="table-auto bg-green-500 rounded-lg shadow-lg w-3/6 m-0">
          <thead>
            <tr>
              <th className="px-3 py-2 ">Nombre Completo</th>
              <th className="px-4 py-2 ">Email</th>
              <th className="px-4 py-2 ">detalles </th>
            </tr>
          </thead>
          <tbody>
            {producer.map((producer) => (
              <tr key={producer._id}>
                <td className=" px-4 py-2 text-center">
                  {producer.name} {producer.last_names}
                </td>
                <td className=" px-4 py-2 text-center">
                  {producer.email}, {producer.id}
                </td>
                <td className="flex justify-center items-center py-2">
                  <Link
                    className="mb-4"
                    href={`/admin/details_producer/${producer._id}`}
                  >
                    <span className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">
                      ver{" "}
                    </span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default ListProducer;