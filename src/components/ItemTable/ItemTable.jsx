import React, { useState } from 'react'
import Modal from '../Modal/Modal.jsx';
import axiosInstance from '../../services/axios.config.js';

const ItemTable = ({ item, editItem }) => {
    const { name, price, stock, id, category, date } = item;
    const [modalShow, setModalShow] = useState(false);

    const handleDelete = (id) => {
        axiosInstance.delete(`/${id}`)
            .then(r => {
                if(r.status === 200){
                }
            })
    }

    return (
        <>
            <tr>
                <td>{date}</td>
                <td>{id}</td>
                <td>{name}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td>{stock}</td>
                <td>{price * stock}</td>
                <td className='text-center'>
                    <i style={{ cursor: "pointer" }} className="ms-1 px-2 bi bi-pencil-square" onClick={() => setModalShow(true)}></i>
                    <i style={{ cursor: "pointer" }} className="px-2 bi bi-trash3-fill" onClick={() => handleDelete(id)}></i> 
                </td>
            </tr>

            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                item={item}
                onSubmit={editItem}
            />
        </>
    );
}

export default ItemTable;

