import React from "react";
import { useDispatch } from "react-redux";
import { setNameTrainerGlobal } from "../store/slices/nameTrainer.slice";
import "./styles/Home.css";

const Home = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(setNameTrainerGlobal(nameTrainer));
  };

  return (
    <main className="home_principal">
      <section className="home">
        <div className="home__img">
          <img src="/images/pokedex.png" alt="" />
        </div>
        <h2 className="home__title">Hello Trainer!</h2>
        <p className="home__message">Give me your name to start</p>
        <form onSubmit={handleSubmit} className="home__content">
          <input type="text" id="nameTrainer" placeholder="Your Name" />
          <button>Start</button>
        </form>
      </section>
      <footer className="footer">
        <div className="footer__red"></div>
        <div className="footer__black">
          <div className="footer__pokeball"></div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
