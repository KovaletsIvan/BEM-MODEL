import { useState, createContext } from "react";

import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";

import "./App.scss";

export const Context = createContext();

export const ContextEvents = createContext();

function App() {
  const [state, setState] = useState({
    firm: "",
    email: "",
    phone: "",
    text: "",
  });

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify({ ...state }));
    clearForm();
  };

  const clearForm = () => {
    setState({
      firm: "",
      email: "",
      phone: "",
      text: "",
    });
  };

  return (
    <div className="App">
      <Context.Provider value={state}>
        <Header />
        <Content />
        <ContextEvents.Provider value={[handleChange, handleSubmit]}>
          <Footer />
        </ContextEvents.Provider>
      </Context.Provider>
    </div>
  );
}

export default App;
