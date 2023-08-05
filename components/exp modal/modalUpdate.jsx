// import axios from "axios";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { updateExpAction } from "../../config/redux/actions/expAction";
import { useDispatch } from "react-redux";

function ModalUpdate({
  exp_id,
  position,
  company_name,
  working_start,
  working_end,
  description,
  children,
}) {
  // const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState({
    position,
    company_name,
    working_start,
    working_end,
    description,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const login = localStorage.getItem("worker_id");
    axios
      .put(`http://localhost:2525/worker/${login}`, data)
      .then((res) => {
        setData(res.data.data[0]);
        console.log(res.data.data[0]);
        // alert("Data updated");
        // setShow(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert(err);
        setShow(false);
      });  };

  return (
    <>
      <Button className="m-1" variant="warning" onClick={handleShow}>
        {children}
      </Button>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Update exp</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <input
              type="text"
              className="form-control mt-3"
              placeholder="position"
              name="position"
              value={data.position}
              onChange={handleChange}
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
    </>
  );
}

export default ModalUpdate;
