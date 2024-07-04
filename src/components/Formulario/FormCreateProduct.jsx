import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Button from 'react-bootstrap/Button';
import FormBs from 'react-bootstrap/Form';
import './Formulario.css'
import {axiosInstance} from '../../services/axios.config';

const FormCreateProduct = () => {

  const initialCredentials = {
    name:'',
    description: '',
    image: '',
    price: 0,
    stock: 0,
    category: '',
    date: new Date().toLocaleDateString('es-ES'),
  }

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, 'Nombre demasiado corto')
      .max(20, 'Nombre demasiado largo')
      .required('Campo obligatorio'),
    description: Yup.string()
      .min(10, 'Descripción demasiado corta')
      .max(200, 'Descripción demasiado larga')
      .required('Campo obligatorio'),
    image: Yup.string()
      .required('Campo obligatorio'),
    price: Yup.number()
      .required('Campo obligatorio'),
    stock: Yup.number()
      .required('Campo obligatorio'),
    category: Yup.string()
      .required('Campo obligatorio'),
    
  })

  return (
    <>
    <div className='container'>
      <Formik
        initialValues={initialCredentials}
        validationSchema={formSchema}
        onSubmit={(values, {setSubmitting}) => {
          console.log(values);
          axiosInstance.post('/', values)
          .then(r => {
            if (r.status == 201){ 
                console.log(r)
                setSubmitting(false)
            }else{
              throw new Error(`[${r.status}]Error al cargar el producto`)
            }
          })
          .catch( err => console.log(err))
        }}
      >
        {
          ({values, isSubmitting, errors, touched}) => (
            <Form>
              <FormBs.Group className='mb-3'>
                <label htmlFor="name">Nombre del Producto</label>
                <Field id="name" name="name" type="text" placeholder="Nombre del Producto" className="form-control field-input"/>
                {
                  errors.name && touched.name && (
                    <ErrorMessage name='name' component="div"></ErrorMessage>
                  )
                }
              </FormBs.Group>

              <FormBs.Group className='mb-3'>
                <label htmlFor="category">Categoria</label>
                <Field id="category" name="category" as="select" placeholder="Categoria del Producto" className="form-control field-input">
                <option value="" disabled>Seleccione una categoría</option>
                <option value="Placa de video">Placa de video</option>
                <option value="Procesadores">Procesadores</option>
                <option value="Memoria Ram">Memoria Ram</option>
                <option value="Mothers">Mothers</option>
                <option value="Almacenamiento">Almacenamiento</option>
                <option value="Perifericos">Perifericos</option>
                </Field>
                {
                  errors.description && touched.description && (
                    <ErrorMessage name='category' component="div"></ErrorMessage>
                  )
                }
              </FormBs.Group>

              <FormBs.Group className='mb-3'>
                <label htmlFor="description">Descripcion</label>
                <Field id="description" name="description" type="text" placeholder="Descripcion" className="form-control field-input"/>
                {
                  errors.description && touched.description && (
                    <ErrorMessage name='description' component="div"></ErrorMessage>
                  )
                }
              </FormBs.Group>

              <FormBs.Group className='mb-3'>
                <label htmlFor="image">Imagen</label>
                <Field id="image" name="image" type="text" placeholder="url de la imagen" className="form-control field-input"/>
                {
                  errors.image && touched.image && (
                    <ErrorMessage name='image' component="div"></ErrorMessage>
                  )
                }
              </FormBs.Group>

              <FormBs.Group className='mb-3'>
                <label htmlFor="stock">Numero de Stock</label>
                <Field id="stock" name="stock" type="number" placeholder="Numero de Stock" className="form-control field-input"/>
                {
                  errors.stock && touched.stock && (
                    <ErrorMessage name='stock' component="div"></ErrorMessage>
                  )
                }
              </FormBs.Group>

              <FormBs.Group className='mb-3'>
                <label htmlFor="price">Precio</label>
                <Field id="price" name="price" type="number" placeholder="Precio del Producto" className="form-control field-input"/>
                {
                  errors.price && touched.price && (
                    <ErrorMessage name='price' component="div"></ErrorMessage>
                  )
                }
              </FormBs.Group>
              
              <Button className='btn btn-primary' type="submit">Cargar</Button>
              {
                isSubmitting ? (<p>Producto enviado</p> ) : null
              }

            </Form>
          )



        }

      </Formik>
      </div>
    </>
  
  )
}

export default FormCreateProduct
