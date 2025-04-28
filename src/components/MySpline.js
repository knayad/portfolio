import React, { Suspense } from "react";
import Container from "react-bootstrap/Container";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function MySpline() {
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/YzEy5lMIH75ywh5S/scene.splinecode" />
      </Suspense>
    </Container>
  );
}
