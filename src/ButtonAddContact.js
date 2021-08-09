import React from "react";
import { Button } from "react-bootstrap";
import { PlusIcon } from "@primer/octicons-react";

export default function ButtonAddContact({ handleShowModal }) {
  return (
    <Button
      variant="primary"
      bsPrefix="btn badge bg-primary rounded-circle p-2 position-fixed btn-add shadow"
      onClick={handleShowModal}
    >
      <PlusIcon size={28} />
    </Button>
  );
}
