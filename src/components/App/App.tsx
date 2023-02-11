import AddButton from "../AddButton/AddButton";
import Card from "../Card/Card";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <ul>
        <Card title={"Планы на месяц"} />
        <Card title={"Планы на день"} />
      </ul>
      <AddButton title={'Добавить еще одну колонку'}/>
      <img src="/public/img/background.jpg" />
    </div>
  );
}

export default App;
