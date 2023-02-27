import { Modal, Button, Form } from "react-bootstrap";
function CreateContentModal(props) {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={props.isModalOpen}>
        <Form
          onSubmit={(event) => {
            props.createContent(event);
          }}
        >
          <Modal.Header closeButton onClick={props.handleClose}>
            <Modal.Title>Criar Conteúdo</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group controlId="nome">
              <Form.Label>nome</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="autor">
              <Form.Label>autor</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="popularidade">
              <Form.Label>popularidade</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Modal.Body>
          <Form.Group controlId="editora">
            <Form.Label>editora</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Salvar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default CreateContentModal;
