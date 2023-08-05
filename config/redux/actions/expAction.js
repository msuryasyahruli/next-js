import axios from "axios";
import swal from "sweetalert";

export const updateExpAction = (data, exp_id, setShow) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("stock", data.stock);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("id_category", data.id_category);
    const exp = await axios.put(`http://localhost:2525/exp/${exp_id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const result = exp.data;
    console.log(exp);
    swal({
      title: "Success",
      text: "Experience Updated",
      icon: "success",
      buttons: "Ok",
    })
    .then(()=>{
      window.location.reload()
    });
    setShow(false);
    dispatch({ type: "UPDATE_EXP", payload: result })
  } catch (err) {
    console.log(err);
    alert(err);
    setShow(false);
  }
};

export const deleteExpAction = (exp_id, setShow) => async (dispatch) => {
  try {
    const exp = await axios.delete(`http://localhost:2525/exp/${exp_id}`, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const result = exp.data;
    console.log(result);
    swal({
      title: "Success",
      text: "Experience Deleted",
      icon: "success",
      buttons: "Ok",
    })
    .then(()=>{
      window.location.reload()
    });
    setShow(false);
    dispatch({ type: "DELETE_EXP", payload: result });
  } catch (error) {
    console.log(error);
    alert(error);
    setShow(false);
  }
};

// export const updateExpAction = (exp_id, data, setShow) => async (dispatch) => {
//   try {
//     const exp = await axios.put(
//       `http://localhost:2525/exp/${exp_id}`,
//       data
//     );
//     const result = exp.data.data;
//     setShow(false);
//     dispatch({ type: "UPDATE_EXP", payload: result });
//     window.location.reload();
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// export const deleteExpAction = (exp_id, setShow) => async (dispatch) => {
//   try {
//     const exp = await axios.delete(
//       `http://localhost:2525/exp/${exp_id}`
//     );
//     const result = exp.data.data;
//     setShow(false);
//     dispatch({ type: "DELETE_EXP", payload: result });
//     window.location.reload();
//   } catch (err) {
//     console.log(err.message);
//   }
// };