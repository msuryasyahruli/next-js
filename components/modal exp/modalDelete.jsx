import axios from "axios";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

function ModalDelete({exp_id,children}) {
  // const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .delete(`${process.env.NEXT_PUBLIC_API}/exp/${exp_id}`, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        // console.log(res);
        Toast.fire({
          icon: "success",
          title: "Experience created",
        });
        setTimeout(function () {
          window.location.reload();
        }, 1000);
        setShow(false);
        // window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert(err);
        setShow(false);
      });
  };

  return (
    <div>
      <Button className="m-1" variant="danger" onClick={handleShow}>
        {children}
      </Button>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Delete Experience</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <h4 className="text-center">Are you sure wannna delete this Experience?</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default ModalDelete;
