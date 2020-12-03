import axios from 'axios';
import Swal from 'sweetalert2';
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_EXITO,
  DESCARGA_PRODUCTOS_ERROR, 
  OBTENER_PRODUCTO_ELIMINAR,
  PRODUCTO_ELIMINADO_EXITO,
  PRODUCTO_ELIMINADO_ERROR,
  OBTENER_PRODUCTO_EDITAR,
  COMENZAR_EDICION_PRODUCTO,
  PRODUCTO_EDITADO_EXITO,
  PRODUCTO_EDITADO_ERROR
} from '../../types';


export const createNewProductAction = (product) => async (dispatch) => {
  dispatch( {
    type: AGREGAR_PRODUCTO,
    payload: true
  } );

  try {
    await axios.post('http://localhost:4000/products', product);

    dispatch({
      type: AGREGAR_PRODUCTO_EXITO,
      payload: product
    } );
    // Alert
    Swal.fire(
      'Correcto', 
      'El producto se agregó correctamente',
      'success'
    );
  } catch{
    dispatch( addProductError(true) );
    // error alert
    Swal.fire({
      icon: 'error',
      title: 'Hubo un error',
      text: 'Hubo un error, intenta de nuevo'
    })
  }
}

const addProductError = state => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: state
});

export const getProductsAction = () => async (dispatch) => {

  dispatch({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
  });

  try {
    const response = await axios.get('http://localhost:4000/products');
    dispatch({
      type: DESCARGA_PRODUCTOS_EXITO,
      payload: response.data
    })
  } catch (error) {
    dispatch({
      type: DESCARGA_PRODUCTOS_ERROR, 
      payload: true
    })
  }
}

export const deleteProductAction = (id) => async (dispatch) =>  {
  dispatch({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
  });

  try {
    await clientAxios.delete(`/products/${id}`);
    dispatch({type: PRODUCTO_ELIMINADO_EXITO});
    Swal.fire(
        'Eliminado',
        'El producto se eliminó correctamente',
        'success'
    )
  } 
  catch {
    dispatch({
      type: PRODUCTO_ELIMINADO_ERROR,
      payload: true
    });
  }

}

export const getEditProductAction = (product) => (dispatch) => {
  dispatch({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: product
  })
}

export const editProductAction = (product) => async (dispatch) => {

  dispatch({type: COMENZAR_EDICION_PRODUCTO});

  try {
    await axios.put(`http://localhost:4000/products/${product.id}`, product);    
    dispatch({
      type: PRODUCTO_EDITADO_EXITO,
      payload: product
    });
  } 
  catch{
    dispatch({
      type: PRODUCTO_EDITADO_ERROR,
      payload: true
    });
  }
}
