import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editProductAction } from '../redux/actions/productActions';

const EditProduct = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  const [ product, setProduct] = useState({ name: '', price: '' });

  const editProduct = useSelector(state => state.products.editproduct);

  const onChangeForm = e => setProduct({ ...product, [e.target.name] : e.target.value});

  // llenar el state automaticamente
  useEffect( () => setProduct(editProduct), [editProduct]);

  const { name, price} = product;

  const submitEditProduct = e => {
    e.preventDefault();
    dispatch( editProductAction(product) );
    history.push('/');
  }

  return ( 
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>
            <form onSubmit={submitEditProduct} >
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre Producto"
                    name="name"
                    value={name}
                    onChange={onChangeForm}
                />
              </div>

              <div className="form-group">
                <label>Precio Producto</label>
                <input
                    type="number"
                    className="form-control"
                    placeholder="Precio Producto"
                    name="price"
                    value={price}
                    onChange={onChangeForm}
                />
              </div>
              <button 
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >Guardar Cambios</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default EditProduct;