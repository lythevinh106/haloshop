import { createSlice } from '@reduxjs/toolkit';

import { toast } from "react-toastify";

let currentDate = new Date();

// currentDate.getMinutes() == 30 ? localStorage.setItem('isActiveLayer', JSON.stringify(true)) : localStorage.setItem('isActiveLayer', JSON.stringify(false))


const isActiveLayerLocal = JSON.parse(sessionStorage.getItem('isActiveLayer'));
const setSessionToActiveLayer = () => {
  sessionStorage.setItem('isActiveLayer', JSON.stringify(true))
  return true;
}
const initialState = {
  value: false,
  isActiveLayer: isActiveLayerLocal == undefined ? setSessionToActiveLayer() : isActiveLayerLocal,

}


export const progressSlice = createSlice({
  name: 'counter',
  initialState,

  reducers: {
    activeProgress: (state, action) => {
      state.value = action.payload
    },


    activeLayer: (state, action) => {
      state.isActiveLayer = action.payload
      sessionStorage.setItem('isActiveLayer', JSON.stringify(action.payload));


    },
    activeToast: (state, action) => {
      const toastStatus = action.payload.status || "success";
      const toastMessage = action.payload.message || "rỗng";
      const toastSetting = action.payload.setting || {};
      const style = action.payload.style || {};
      toast[toastStatus](toastMessage, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        ...toastSetting,
        theme: "light",
        style: {
          ...style


        }

      });




    },


  },

})


export const { activeProgress, activeLayer, activeToast } = progressSlice.actions

export default progressSlice