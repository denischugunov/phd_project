import React from "react";
import { Container, Button } from "react-bootstrap";
import EntryForm from "./EntryForm";
import EntryTable from "./EntryTable";
import { useSelector } from "react-redux";
import {
  Document,
  Paragraph,
  TextRun,
  HeadingLevel,
  Packer,
  AlignmentType,
  Indent,
} from "docx";
import { saveAs } from "file-saver";

const Dashboard = () => {
  const entries = useSelector((state) => state.entries);

  const generateReport = () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              text: "Отчет о проделанной работе",
              heading: "Heading1",
            }),
            ...entries.map(
              (entry) =>
                new Paragraph({
                  children: [
                    new TextRun({ text: `Дата: ${entry.date}`, bold: true }),
                    new TextRun({ text: `\nНазвание: ${entry.title}` }),
                    new TextRun({ text: `\nТип: ${entry.type}` }),
                    entry.link &&
                      new TextRun({ text: `\nСсылка: ${entry.link}` }),
                  ],
                })
            ),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "Отчет.docx");
    });
  };

  return (
    <Container className="mt-4">
      <h2>Что я сделал?😉</h2>
      <EntryForm />
      <EntryTable />
      <Button variant="primary" className="mt-3 mb-3" onClick={generateReport}>
        Сгенерировать отчет!📚
      </Button>
    </Container>
  );
};

export default Dashboard;
