import { useState } from "react";
import "./AddButton.scss";

interface AddButtonProps {
  title: string;
}

function AddButton({ title }: AddButtonProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function openDialog() {
    setIsDialogOpen(true);
  }

  function closeDialog() {
    setIsDialogOpen(false);
  }

  return (
    <div className="app__add add">
      {!isDialogOpen ? (
        <div className="add__button" onClick={() => openDialog()}>
          <img src="/public/svg/plus.svg" />
          <h3>{title}</h3>
        </div>
      ) : (
        <div className="add__dialog dialog">
          <textarea
            className="dialog__textarea"
            placeholder="Введите название карточки"
            rows={1}
          />
          <div className="dialog__buttons">
            <button className="dialog__add">Добавить карточку</button>
            <button className="dialog__close" onClick={() => closeDialog()}>
              <img src="/public/svg/close.svg" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddButton;
