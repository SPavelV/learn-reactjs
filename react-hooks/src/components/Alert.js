import React from "react";

export const Alert = ({ alert }) => {
  return (
    <div>
      <div
        className={`alert alert-${alert.type || 'secondary'} alert-dismissible`}
        role="alert"
      >
        {alert.text}
        <button
          type="button"
          className="close"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
};
