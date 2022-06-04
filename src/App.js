import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';

const data = [
  {id:1, titulo: "", motivo: "" }
]

class App extends React.Component {

  state = {
    data: data,
    form: {
      id:'',
      titulo: '',
      motivo: '',
    },
    modalInsertar: false,
    modalEditar:false,
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    });
  }

  
  mostrarModal=()=>{
    this.setState({modalInsertar: true});
  }

  ocultarModal=()=>{
    this.setState({modalInsertar: false});
  }

  
  mostrarModalEditar=(registro)=>{
    this.setState({modalEditar: true, form: registro});
  }

  ocultarModalEditar=()=>{
    this.setState({modalEditar: false});
  }

  insertar=()=>{
    var valorNuevo={...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista=this.state.data;
    lista.push(valorNuevo);
    this.setState({data: lista, modalInsertar:false});
  }

  editar=(dato)=>{
    var contador =0;
    var lista =this.state.data;
    lista.map((registro) => {
      if(dato.id === registro.id){
        lista[contador].titulo=dato.titulo;
        lista[contador].motivo=dato.motivo;
      }
      contador++;
    });
    this.setState({data: lista, modalEditar: false});
  };

  eliminar =(dato)=>{
    var opcion = window.confirm("Deseas eliminar est nota "+dato.id);
    if(opcion){
      var contador =0;
      var lista =this.state.data;
      lista.map((registro) => {
        if(registro.id===dato.id){
          lista.splice(contador,1);
        }
        contador++;
      });
      this.setState({data: lista});
    }
  }

  render() {
    return (
      <>
        <Container>
          <br />
          <Button color="success" onClick={()=>this.mostrarModal()}>
            Nueva Nota!!
          </Button>
          <br />
          <Table>
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Motivo</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.data.map((elemento) => (
                  <tr>
                    <td>{elemento.titulo}</td>
                    <td>{elemento.motivo}</td>
                    <td>
                      <Button color='primary' onClick={()=>this.mostrarModalEditar(elemento)}>Editar</Button>
                      {"  "}
                      <Button color='danger' onClick={()=>this.eliminar(elemento)}>Eliminar</Button>
                    </td>
                  </tr>
                ))
              }

            </tbody>
          </Table>
        </Container>
        <Modal isOpen = {this.state.modalInsertar}>
          <ModalHeader>
            <div>
              <h3>Ingrese Nota</h3>
            </div>
          </ModalHeader>

          <ModalBody>

            <FormGroup>  
              <label >ID</label>
              <input type="text" className='form-control' name="titulo" readOnly value={this.state.data.length+1}/>
            </FormGroup>

            <FormGroup>
              <label >Titulo</label>
              <input type="text" className='form-control' name="titulo" onChange={this.handleChange}/>
            </FormGroup>

            <FormGroup>
              <label >Motivo</label>
              <input type="text" className='form-control' name="motivo"  onChange={this.handleChange}/>
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color='primary'onClick={()=>this.insertar()}>Insertar</Button>
            <Button color='danger' onClick={()=> this.ocultarModal()}>Cancelar</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen = {this.state.modalEditar}>
          <ModalHeader>
            <div>
              <h3>Editar Nota</h3>
            </div>
          </ModalHeader>

          <ModalBody>

            <FormGroup>  
              <label >ID</label>
              <input type="text" className='form-control' name="titulo" readOnly value={this.state.form.id}/>
            </FormGroup>
          
            <FormGroup>
              <label >Titulo</label>
              <input type="text" className='form-control' name="titulo" onChange={this.handleChange} value={this.state.form.titulo}/>
            </FormGroup>

            <FormGroup>
              <label >Motivo</label>
              <input type="text" className='form-control' name="motivo"  onChange={this.handleChange} value={this.state.form.motivo}/>
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color='primary' onClick={()=> this.editar(this.state.form)}>Editar</Button>
            <Button color='danger' onClick={()=> this.ocultarModalEditar()}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }

}

export default App;
