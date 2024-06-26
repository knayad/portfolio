import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import { Worker } from "@react-pdf-viewer/core";
// Import the main component
import { Viewer } from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import pdf from "../assets/pages/NadiaAyad.pdf";

const HireMe = () => {
  return (
    <Container>
      {/* pdf viewer start */}
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl={pdf} />
      </Worker>
      {/* pdf viewer end */}
      <br />
      <Button href={pdf} download="Nadia_Ayad">
        Download
      </Button>{" "}
      <br />
      <br />
    </Container>
  );
};

export default HireMe;
