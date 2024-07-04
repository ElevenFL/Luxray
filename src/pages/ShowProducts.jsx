import React, {useEffect, useState} from 'react';
import axiosInstance from '../services/axios.config';
import Table from '../components/Table/Table';


const ShowProducts = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    axiosInstance.get('/')
      .then(r => {
        if(r.status === 200){
          console.log("Datos recibidos:",r.data)
          setItems(r.data)
      }else{
        throw new Error(`[${r.status}]Error en la solicitud`)
      }
    })
    .catch(err => console.log(err))
    }, []);


    const editItem = (id, data) => {
      console.log("editando producto");
      axiosInstance.put(`/${id}`, data)
        .then(r => {
          if(r.status === 200){
            axiosInstance.get("/")
            .then(r => {
              if(r.status === 200){
                setItems(r.data)
            }else{
              throw new Error(`Error [${r.status}]Error en la solicitud`)
            }

            })
            .catch(err => console.log(err))
          }else{
            throw new Error(`Error [${r.status}]Error en la solicitud`)
          }
          
    })
        .catch(err => console.log(err))

    }



  return (
    
    <div>
      <h1 className='text-center py-5'>Productos</h1>
      <div className='container'>
        {
          items.length > 0 ?
            <Table items={items} editItem={editItem}/>
            : 
              <p>No hay productos en la base de datos</p>
        }
      </div>
    </div>
  );
};

export default ShowProducts;
