import React from "react";
import PropTypes from "prop-types";

export default function ContactItem({ fullname, phone_number }) {
  return (
    <div className="d-flex bg-body p-3 py-md-4 px-md-5 border border-light">
      <div className="flex-shrink-1">
        <img
          src={`https://ui-avatars.com/api/?name=${fullname}&background=random&size=80`}
          alt={fullname}
          className="img-fluid rounded-circle"
        />
      </div>
      <div className="d-flex flex-column w-100 mx-3">
        <h5 className="fw-bold fullname">{fullname}</h5>
        <h6 className="text-secondary phone-number">{phone_number}</h6>
      </div>
    </div>
  );
}

ContactItem.propTypes = {
  fullname: PropTypes.string.isRequired,
  phone_number: PropTypes.string.isRequired,
};
