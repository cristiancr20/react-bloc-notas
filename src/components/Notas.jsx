import React from 'react';
import { Link } from 'react-router-dom';
import './Notas.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from 'reactstrap';

const data = [{ id: 1, titulo: 'Deberes', motivo: 'Hacer un bloc de notas' }];

class Notas extends React.Component {

  state = {
    data: data,
    form: {
      id: '',
      titulo: '',
      motivo: '',
    },
    modalInsertar: false,
    modalEditar: false,
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  /* Modal insertar */
  mostrarModal = () => {
    this.setState({ modalInsertar: true });
  };

  ocultarModal = () => {
    this.setState({ modalInsertar: false });
  };

  /* Modal Editar */
  mostrarModalEditar = (registro) => {
    this.setState({ modalEditar: true, form: registro });
  };

  ocultarModalEditar = () => {
    this.setState({ modalEditar: false });
  };

  insertar = () => {
    var valorNuevo = { ...this.state.form };
    valorNuevo.id = this.state.data.length + 1;
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({ data: lista, modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var lista = this.state.data;
    lista.map((registro) => {
      if (dato.id === registro.id) {
        lista[contador].titulo = dato.titulo;
        lista[contador].motivo = dato.motivo;
      }
      contador++;
    });
    this.setState({ data: lista, modalEditar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm('Deseas eliminar la nota ' + dato.id);
    if (opcion) {
      var contador = 0;
      var lista = this.state.data;
      lista.map((registro) => {
        if (registro.id === dato.id) {
          lista.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: lista });
    }
  };

  render() {
    return (
      <>
        <Container>

          <Link to="/"> <Button color="primary">Volver al login</Button> </Link>

          <br />
          <Button color="secondary" onClick={() => this.mostrarModal()}>
            Nueva Nota!!
          </Button>
          <br />
          <br />

          <div className="contenedor">
            {this.state.data.map((elemento) => (

              <div className="cardnota">
                <h5 >Titulo</h5>
                <p >{elemento.titulo}</p>
                <h5 >Motivo</h5>
                <p>{elemento.motivo}</p>

                <button
                  href="#"
                  class="btn btn-primary"
                  onClick={() => this.mostrarModalEditar(elemento)}
                >
                  Editar
                </button>
                {'  '}
                <button
                  href="#"
                  class="btn btn-danger"
                  onClick={() => this.eliminar(elemento)}
                >
                  Eliminar
                </button>
                <br />
              </div>
            ))}
          </div>
        </Container>

        {/* Modal para insertar nota */}
        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div>
              <h3>Ingrese Nota</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>ID</label>
              <input
                type="text"
                className="form-control"
                name="id"
                readOnly
                value={this.state.data.length + 1}
              />
            </FormGroup>

            <FormGroup>
              <label>Titulo</label>
              <input
                type="text"
                className="form-control"
                name="titulo"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Motivo</label>
              <input
                type="text"
                className="form-control"
                name="motivo"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.insertar()}>
              Insertar
            </Button>
            <Button color="danger" onClick={() => this.ocultarModal()}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        {/* modal para editar nota */}

        <Modal isOpen={this.state.modalEditar}>
          <ModalHeader>
            <div>
              <h3>Editar Nota</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>ID</label>
              <input
                type="text"
                className="form-control"
                name="titulo"
                readOnly
                value={this.state.form.id}
              />
            </FormGroup>

            <FormGroup>
              <label>Titulo</label>
              <input
                type="text"
                className="form-control"
                name="titulo"
                onChange={this.handleChange}
                value={this.state.form.titulo}
              />
            </FormGroup>

            <FormGroup>
              <label>Motivo</label>
              <input
                type="text"
                className="form-control"
                name="motivo"
                onChange={this.handleChange}
                value={this.state.form.motivo}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button color="danger" onClick={() => this.ocultarModalEditar()}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default Notas;
