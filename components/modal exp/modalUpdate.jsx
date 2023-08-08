import axios from "axios";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
// import { updateExpAction } from "../../config/redux/actions/expAction";
// import { useDispatch } from "react-redux";

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
    axios
      .put(`http://localhost:2525/exp/${exp_id}`, data)
      .then((res) => {
        setData(res.data.data[0]);
        // console.log(res.data.data[0]);
        alert("experience updated");
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
      <Button className="m-1" variant="warning" onClick={handleShow}>
        {children}
      </Button>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Update Experience</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <input
              type="text"
              className="form-control mt-3"
              name="position"
              value={data.position}
              onChange={handleChange}
            />
            <input
              type="text"
              className="form-control mt-3"
              name="company_name"
              value={data.company_name}
              onChange={handleChange}
            />
            <input
              type="date"
              className="form-control mt-3"
              name="working_start"
              value={data.working_start}
              onChange={handleChange}
            />
            <input
              type="date"
              className="form-control mt-3"
              name="working_end"
              value={data.working_end}
              onChange={handleChange}
            />
            <input
              type="text"
              className="form-control mt-3"
              name="description"
              value={data.description}
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
    </div>
  );
}

export default ModalUpdate;
