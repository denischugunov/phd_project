import React from "react";
import { Table, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeEntry } from "../../redux/entriesSlice";

const EntryTable = () => {
  const entries = useSelector((state) => state.entries);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeEntry(id));
  };

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Дата</th>
          <th>Название</th>
          <th>Тип</th>
          <th>Тег</th>
          <th>Ссылка</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry) => (
          <tr key={entry.id}>
            <td>{entry.date}</td>
            <td>{entry.title}</td>
            <td>{entry.type}</td>
            <td>{entry.tag}</td>
            <td>
              {entry.link ? (
                <a href={entry.link} target="_blank" rel="noopener noreferrer">
                  Перейти
                </a>
              ) : (
                "—"
              )}
            </td>
            <td>
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleDelete(entry.id)}
              >
                Удалить
              </Button>
            </td>
          </tr>
        ))}
        {entries.length === 0 && (
          <tr>
            <td colSpan="6" className="text-center">
              Нет записей
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default EntryTable;
