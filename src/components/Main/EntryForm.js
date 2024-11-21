import React, { useState } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addEntry } from "../../redux/entriesSlice";
import { v4 as uuidv4 } from "uuid";

const EntryForm = () => {
  const [type, setType] = useState("Статья ВАК");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [tag, setTag] = useState("");
  const [link, setLink] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      id: uuidv4(),
      type,
      title,
      date,
      tag,
      link: link || "",
    };
    dispatch(addEntry(newEntry));

    setType("Статья ВАК");
    setTitle("");
    setDate("");
    setTag("");
    setLink("");
  };

  return (
    <Card className="mb-4">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={3}>
              <Form.Group controlId="formType" className="mb-3">
                <Form.Label>Тип записи</Form.Label>
                <Form.Select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  required
                >
                  <option>Статья ВАК</option>
                  <option>Обычная статья</option>
                  <option>Конференция</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="formTitle" className="mb-3">
                <Form.Label>Название</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Введите название"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={2}>
              <Form.Group controlId="formDate" className="mb-3">
                <Form.Label>Дата</Form.Label>
                <Form.Control
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={2}>
              <Form.Group controlId="formTag" className="mb-3">
                <Form.Label>Тег</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Введите тег"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={2}>
              <Form.Group controlId="formLink" className="mb-3">
                <Form.Label>Ссылка (опционально)</Form.Label>
                <Form.Control
                  type="url"
                  placeholder="Введите ссылку"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="success" type="submit">
            Добавить запись
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default EntryForm;
