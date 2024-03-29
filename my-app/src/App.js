import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import { NewsList } from "./components/Main/NewsList/NewsList";
import { TrendsList } from "./components/Main/Trends/TrendsList";
import { SideSectionPosts } from "./components/Main/SideColumn/SideSectionPosts/SideSectionPosts";
import { TagsList } from "./components/Main/SideColumn/Tags/TagsList";
import { ThemesList } from "./components/Main/SideColumn/Themes/ThemesList";
import { ProductsList } from "./components/Main/ProductsList/ProductsList";
import { TagsContext } from "./context/TagsContext";
import Footer from "./components/Footer/Footer";
import closeIcon from "./svg/form-x.svg";
import SideBar from "./components/SideBar/SideBar";
// import styled from "@emotion/styled";

// const TestDiv = styled.div`
//   background: ${(props) => (props.isBlack ? "black" : "yellow")};
//   width: 100px;
//   height: 100px;
// `;//!!!!!!!!!!!Следующие уроки by OLeg

const App = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [visibleFeedbackModal, setVisibleFeedbackModal] = useState(false);
  const [isVisibleSidebar, setIsVisibleSidebar] = useState(false);

  // const isBlack = false;
  return (
    <>
      {isVisibleSidebar && (
        <SideBar setIsVisibleSidebar={setIsVisibleSidebar} />
      )}
      <TagsContext.Provider value={{ selectedTags, setSelectedTags }}>
        {/*<TestDiv isBlack={isBlack}>TESTETSTE</TestDiv>*/}
        <Header
          setVisibleFeedbackModal={setVisibleFeedbackModal}
          setIsVisibleSidebar={setIsVisibleSidebar}
        />

        <main className="page">
          {visibleFeedbackModal && (
            <div className="pop__up ">
              <div className="pop__up__container">
                <div className="feedback">
                  <h2 className="section__title">Ваш фидбэк</h2>
                  <form className="feedback__form">
                    <div className="form__row">
                      <label
                        className="form__label"
                        htmlFor="question__select__id"
                      >
                        Как часто вы заходите на сайт?
                      </label>
                      <select
                        id="question__select__id"
                        className="question__select"
                        form="question__select__id"
                      >
                        <option selected>Почти каждый день</option>
                        <option>Раз в несколько дней</option>
                        <option>Раз в несколько недель</option>
                        <option>Несколько раз в год</option>
                      </select>
                    </div>
                    <div className="form__row">
                      <span className="form__hint">
                        Вы подписаны на e-mail рассылку?
                      </span>
                      <label className="radio__group">
                        <input
                          type="radio"
                          className="radio"
                          name="radio__group"
                          checked
                        />
                        <span className="radio__group__text">Да</span>
                      </label>
                      <label className="radio__group">
                        <input
                          type="radio"
                          className="radio"
                          name="radio__group"
                        />
                        <span className="radio__group__text">Нет</span>
                      </label>
                    </div>
                    <div className="form__row">
                      <label className="form__label">
                        Расскажите, какой контент вы хотели бы видеть на нашем
                        сайте?
                        <textarea className="form__textarea">
                          Может, больше рецептов?
                        </textarea>
                      </label>
                    </div>
                    <button className="send__btn" type="button">
                      Отправить
                    </button>
                  </form>
                </div>
                <button
                  className="btn__close"
                  type="button"
                  onClick={() => {
                    setVisibleFeedbackModal(false);
                  }}
                >
                  <img src={closeIcon} alt="Закрыть окно" />
                </button>
              </div>
            </div>
          )}
          <section className="trends">
            <h2 className="section__title">Сейчас в тренде</h2>
            <div className="trends__wrapper">
              <TrendsList />
            </div>
          </section>
          <div className="wrapper__page__container container">
            <div className="main">
              <NewsList />
            </div>
            <aside className="side__column">
              <section className="side__sections">
                <h2 className="side__title">Новые посты</h2>
                <SideSectionPosts />
              </section>
              <section className="side__sections">
                <form className="search__form" action="/">
                  <label className="visually__hidden" htmlFor="search">
                    поиск
                  </label>
                  <div className="search__form__row">
                    <input
                      className="search__input"
                      type="search"
                      placeholder="Найти..."
                      id="search"
                      required
                    />
                    <button className="search__button">
                      <span className="visually__hidden">Найти</span>
                    </button>
                  </div>
                </form>
              </section>
              <section className="side__sections">
                <h2 className="side__title">Рассылка</h2>
                <form className="subscribe__form" action="/">
                  <label className="visually__hidden" htmlFor="subscribeinput">
                    Введите ваш email адрес
                  </label>
                  <input
                    className="subscribe__input"
                    type="email"
                    placeholder="Ваше email адрес"
                    id="subscribeinput"
                    required
                  />
                  <button className="subscribe__btn">Подписаться</button>
                </form>
              </section>
              <section className="side__sections">
                <h2 className="side__title">Теги</h2>
                <ul className="tag__list">
                  <TagsList />
                </ul>
              </section>
              <section className="side__sections">
                <h2 className="side__title">Темы</h2>
                <ul className="categories__list">
                  <ThemesList />
                </ul>
              </section>
            </aside>
          </div>
          <section className="product container">
            <h2 className="section__title">Наши изделия</h2>
            <div className="products__list">
              <ProductsList />
            </div>
          </section>
        </main>
        <Footer />
      </TagsContext.Provider>
    </>
  );
};

export default App;

// перейти на Emotion(Styled-Components)
//
//
//
//
//
//
//
//
//
