import React, {useEffect, useState} from 'react';
import axiosInstance from '../services/axios.config';
import Products from '../components/Products/Products.jsx';
import ItemTable from '../components/ItemTable/ItemTable.jsx';


const Home = () => {

  const [items] = useState([])

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


  return (

    <>
    <div>
      <Products items={items}/>
    </div>

    </>

  )
}

export default Home;
