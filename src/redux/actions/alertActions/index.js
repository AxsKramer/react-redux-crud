import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../../types';

export const showAlertAction = (alert) => (dispatch) => {
  dispatch({
    type: MOSTRAR_ALERTA,
    payload: alert
  })
}

export const hideAlertAction = () => (dispatch) => {
  dispatch({
    type: OCULTAR_ALERTA
  })
}