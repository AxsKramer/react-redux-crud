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
  PRODUCTO_EDITADO_EXITO,
  PRODUCTO_EDITADO_ERROR
} from '../types';

const initialState = {
  products: [],
  error: null,
  loading: false, 
  deleteproduct: null,
  editproduct: null
}

export default function(state = initialState, action) {

  switch(action.type) {

    case COMENZAR_DESCARGA_PRODUCTOS:
    case AGREGAR_PRODUCTO: 
			return {
				...state,
				loading: action.payload
			}
        
    case AGREGAR_PRODUCTO_EXITO:
			return {
				...state,
				loading: false,
				products: [...state.products, action.payload]
			}
				
    case AGREGAR_PRODUCTO_ERROR:
    case DESCARGA_PRODUCTOS_ERROR:
    case PRODUCTO_ELIMINADO_ERROR:
    case PRODUCTO_EDITADO_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}
				
    case DESCARGA_PRODUCTOS_EXITO:
			return {
				...state,
				loading: false,
				error: null,
				products: action.payload
			}
				
    case OBTENER_PRODUCTO_ELIMINAR:
			return {
				...state,
				deleteproduct: action.payload
			}
				
    case PRODUCTO_ELIMINADO_EXITO:
			return {
				...state,
				products: state.products.filter( product => product.id !== state.deleteproduct ),
				deleteproduct: null
			}

    case  OBTENER_PRODUCTO_EDITAR:
			return {
				...state,
				editproduct: action.payload
			}

    case PRODUCTO_EDITADO_EXITO:
			return {
				...state,
				editproduct: null,
				products: state.products.map( product => 
					product.id === action.payload.id ? product = action.payload : product
				)
			}

    default:
			return state;
  }
}