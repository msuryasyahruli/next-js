import axios from "axios";
import React, { useState } from "react";
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

const UploadPhoto = (worker_id, photo) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [image, setImage] = useState(null);
  const handleUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", image);
    // const user = localStorage.getItem("user_id");
    axios
      .put(`${process.env.NEXT_PUBLIC_API}/worker/photo/${worker_id.worker_id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        Toast.fire({
          icon: "success",
          title: "photo updated",
        });
        setShow(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert(err);
        setShow(false);
      });
  };
  
  return (
    <div>
      <Button className="m-2" onClick={handleShow}>
      <i className="bi bi-pencil-square"></i>
      </Button>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Update Photo</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <input
              className="border"
              type="file"
              name="image"
              onChange={handleUpload}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button type="submit" className="btn btn-warning">
              Update
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default UploadPhoto;
