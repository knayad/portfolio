import React, { Suspense } from "react";
import Container from "react-bootstrap/Container";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function MySpline() {
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/ZNyJhP2VOpsqXjre/scene.splinecode" />
      </Suspense>
    </Container>
  );
}
