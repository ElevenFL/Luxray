import React from 'react';
import TableBs from 'react-bootstrap/Table';
import ItemTable from '../ItemTable/ItemTable';


const Table = ({items, editItem}) => {
    console.log(items);
    return (
        <TableBs striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th className='text-center'>Fecha</th>
                    <th className='text-center'>#ID</th>
                    <th className='text-center'>Producto</th>
                    <th className='text-center'>Categoria</th>
                    <th className='text-center'>Precio</th>
                    <th className='text-center'>Stock</th>
                    <th className='text-center'>Total</th>
                    <th className='text-center'>Modificar</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, i) => (
                        <ItemTable item={item} key={i} editItem={editItem}/>
                ))}
            </tbody>

        </TableBs>

    );
}

export default Table;