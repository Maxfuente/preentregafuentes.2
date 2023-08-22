import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { useState } from "react"



const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div className="container-form">
            <Form onSubmit={handleConfirm} className="form">
                <Form.Group className="mb-3">
                    <Form.Label className="label">
                        Nombre
                        <Form.Control className="input" type="text" value={name} onChange={({ target }) => setName(target.value)} />
                    </Form.Label>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="label">
                        Telefono
                        <Form.Control className="input" type="text" value={phone} onChange={({ target }) => setPhone(target.value)} />
                    </Form.Label>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="label">
                        Email
                        <Form.Control className="input" type="text" value={email} onChange={({ target }) => setEmail(target.value)} />
                    </Form.Label>
                </Form.Group>
                <div>
                    <Button variant="btn btn-primary" type="submit">Crear Orden Compra</Button>
                </div>
            </Form>
        </div>
    )
}
export default CheckoutForm