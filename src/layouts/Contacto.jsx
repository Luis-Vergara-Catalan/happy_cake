import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contacto = () => {
  return (
    <div className='contContact'>
    <h1 className='titulo'>Cuentanos, ¿en que te podemos ayudar?</h1>
    <Form>
      <Form.Group className="mb-3 Caja" controlId="formBasicEmail">
        <Form.Label >Correo:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3 Caja" controlId="formBasicPassword">
        <Form.Label >Descripción:</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Button className='boton' variant="danger" type="submit">
        Enviar
      </Button>
    </Form>
    </div>
  )
}

export default Contacto