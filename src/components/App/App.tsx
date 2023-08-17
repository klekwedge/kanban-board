/* eslint-disable react/jsx-no-bind */
import AddButton from "../AddButton/AddButton";
import Card from "../Card/Card";
import "./App.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { addCard } from "../../slices/kanbanSlice/kanbanSlice";

function App() {
  const { cards } = useAppSelector((state) => state.kanban);
  const dispatch = useAppDispatch();

  function addCardEvent(cardName: string) {
    dispatch(addCard(cardName));
  }

  return (
    <div className="app">
      <ul className="app__cards">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </ul>
      <AddButton
        title="Добавить еще одну колонку"
        addItem={addCardEvent}
        placeholder="Введите название колонки"
      />
      <img src="/img/background.jpg" alt='background'/>
    </div>
  );
}

export default App;
