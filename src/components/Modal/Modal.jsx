import React from 'react'
import Button from 'react-bootstrap/Button';
import ModalBs from 'react-bootstrap/Modal';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import FormBs from 'react-bootstrap/Form';


const Modal = (props) => {

    const initialCredentials = {
        name: props.item.name || '',
        description: props.item.description ||'',
        image: props.item.image ||'',
        price: props.item.price || 0,
        stock: props.item.stock || 0
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
        
    })




    return (

    <ModalBs
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <ModalBs.Header closeButton className='bg-dark'>
            <ModalBs.Title id="contained-modal-title-vcenter">
                Modal heading
            </ModalBs.Title>
        </ModalBs.Header>
        <ModalBs.Body className='bg-dark'>
            
        <Formik
        initialValues={initialCredentials}
        validationSchema={formSchema}
        onSubmit={ async (values, {setSubmitting}) => {
        console.log(values);
        await props.onSubmit(props.item.id, values)
        setSubmitting(false);
        props.onHide();
            

        }}
    >
        {
        ({values, isSubmitting, errors, touched, handleChange}) => (
            <Form>
            <FormBs.Group className='mb-3'>
                <label htmlFor="name"> Nombre del Producto</label>
                <Field id="name" name="name" type="text" placeholder="Nombre del Producto" className="form-control field-input" onChange={handleChange}/>
                {
                errors.name && touched.name && (
                    <ErrorMessage name='name' component="div"></ErrorMessage>
                )
                }
            </FormBs.Group>

            <FormBs.Group className='mb-3'>
                <label htmlFor="description">Descripcion</label>
                <Field id="description" name="description" type="text" placeholder="Descripcion" className="form-control field-input" onChange={handleChange}/>
                {
                errors.description && touched.description && (
                    <ErrorMessage name='description' component="div"></ErrorMessage>
                )
                }
            </FormBs.Group>

            <FormBs.Group className='mb-3'>
                <label htmlFor="image">Imagen</label>
                <Field id="image" name="image" type="text" placeholder="url de la imagen" className="form-control field-input" onChange={handleChange}/>
                {
                errors.image && touched.image && (
                    <ErrorMessage name='image' component="div"></ErrorMessage>
                )
                }
            </FormBs.Group>

            <FormBs.Group className='mb-3'>
                <label htmlFor="stock">Numero de Stock</label>
                <Field id="stock" name="stock" type="number" placeholder="Numero de Stock" className="form-control field-input" onChange={handleChange}/>
                {
                errors.stock && touched.stock && (
                    <ErrorMessage name='stock' component="div"></ErrorMessage>
                )
                }
            </FormBs.Group>

            <FormBs.Group className='mb-3'>
                <label htmlFor="price">Precio</label>
                <Field id="price" name="price" type="number" placeholder="Precio del Producto" className="form-control field-input" onChange={handleChange}/>
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


        </ModalBs.Body>
        <ModalBs.Footer className='bg-dark'>
            <Button onClick={props.onHide}>close</Button>
        </ModalBs.Footer>

    </ModalBs>

    );
}

export default Modal;
