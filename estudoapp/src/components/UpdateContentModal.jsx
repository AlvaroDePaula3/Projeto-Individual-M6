import { Modal, Button, Form } from "react-bootstrap";
function UpdateContentModal(props) {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={props.isModalOpen}>
        <Form
          onSubmit={(event) => {
            props.updateContent(event);
          }}
        >
          <Modal.Header closeButton onClick={props.handleClose}>
            <Modal.Title>Atualizar Conteúdo</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group controlId="nome">
              <Form.Label>nome</Form.Label>
              <Form.Control defaultValue={props.content.nome} type="text" />
            </Form.Group>

            <Form.Group controlId="autor">
              <Form.Label>autor</Form.Label>
              <Form.Control defaultValue={props.content.autor} type="text" />
            </Form.Group>

            <Form.Group controlId="popularidade">
              <Form.Label>popularidade</Form.Label>
              <Form.Control
                defaultValue={props.content.popularidade}
                type="number"
              />
              <Form.Group controlId="editora">
                <Form.Label>editora</Form.Label>
                <Form.Control
                  defaultValue={props.content.editora}
                  type="text"
                />
              </Form.Group>
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              fechar
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

export default UpdateContentModal;
