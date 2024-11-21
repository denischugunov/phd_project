import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }
    if (name.trim() === "") {
      setError("Имя не может быть пустым");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: name,
      });
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container style={{ maxWidth: "500px", marginTop: "50px" }}>
      <h2>Регистрация</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName" className="mb-3">
          <Form.Label>Имя</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail" className="mb-3">
          <Form.Label>Email адрес</Form.Label>
          <Form.Control
            type="email"
            placeholder="Введите email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mb-3">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword" className="mb-3">
          <Form.Label>Подтверждение пароля</Form.Label>
          <Form.Control
            type="password"
            placeholder="Подтвердите пароль"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Зарегистрироваться
        </Button>
      </Form>
      <div className="mt-3">
        Уже есть аккаунт? <Link to="/login">Войдите</Link>
      </div>
    </Container>
  );
};

export default Register;
