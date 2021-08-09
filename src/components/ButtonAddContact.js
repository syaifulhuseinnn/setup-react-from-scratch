import React from "react";
import { Button } from "react-bootstrap";
import { PlusIcon } from "@primer/octicons-react";
import PropTypes from "prop-types";

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

ButtonAddContact.propTypes = {
  handleShowModal: PropTypes.func.isRequired,
};
