import React, { useContext } from "react";

import { Context, ContextEvents } from "../../App";

import "./form.scss";

const Form = () => {
  const { firm, email, phone, text } = useContext(Context);
  const [handleChange, handleSubmit] = useContext(ContextEvents);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input organisation"
        type="text"
        name="firm"
        placeholder="firma/organisation"
        required
        value={firm}
        onChange={handleChange}
      />
      <div className="pesonal-data">
        <input
          className="input pesronal-email"
          type="email"
          name="email"
          placeholder="E-mail"
          required
          value={email}
          onChange={handleChange}
        />
        <input
          className="input personal-phone"
          type="phone"
          name="phone"
          placeholder="Telefon"
          required
          value={phone}
          onChange={handleChange}
        />
      </div>
      <textarea
        className="input textarea"
        placeholder="Was ist ihr anliegen?"
        name="text"
        cols="30"
        rows="10"
        required
        value={text}
        onChange={handleChange}
      ></textarea>
      <button className="btn" type="submit">
        senden
      </button>
    </form>
  );
};

export default Form;
