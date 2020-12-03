import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { deleteProductAction, getEditProductAction } from '../redux/actions/productActions';

const Product = ({product}) => {
  const { name, price, id } = product;

  const dispatch = useDispatch();
  const history = useHistory();

  const confirmDeleteProduct = id => {
    //Ask user
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Un producto que se elimina no se puede recuperar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        dispatch( deleteProductAction(id) );
      }
    });
  }

  const redirectEdtionMode = product => {
    dispatch( getEditProductAction(product) );
    history.push(`/products/edit/${product.id}`)
  }

  return ( 
    <tr>
      <td>{name}</td>
      <td><span className="font-weight-bold">$ {price}</span></td>
      <td className="acciones">
        <button 
          type="button"
          onClick={() => redirectEdtionMode(product) }
          className="btn btn-primary mr-2">
          Editar
        </button>
        <button 
          type="button"
          className="btn btn-danger"
          onClick={() => confirmDeleteProduct(id)}
        >Eliminar 
        </button>
      </td>
    </tr>
  );
}
 
export default Product;