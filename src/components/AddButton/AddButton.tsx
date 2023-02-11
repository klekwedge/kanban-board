import { useRef, useState } from "react";
import "./AddButton.scss";

interface AddButtonProps {
  title: string;
  addItem: (nameItem: string) => void;
}

function AddButton({ title, addItem }: AddButtonProps) {
  const textAreaRef = useRef(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState("");

  function openDialog() {
    setIsDialogOpen(true);
  }

  function closeDialog() {
    setIsDialogOpen(false);
  }

  function addItemEvent() {
    if (textAreaRef.current && textAreaRef.current.value !== "") {
      addItem(textAreaRef.current.value);
      setTextAreaValue("");
      setIsDialogOpen(false);
    } else {
      textAreaRef.current.style.border = "2px solid #FF4040";
    }
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
            ref={textAreaRef}
            className="dialog__textarea"
            placeholder="Введите название карточки"
            rows={1}
            value={textAreaValue}
            onInput={(e) => setTextAreaValue(e.target.value)}
          />
          <div className="dialog__buttons">
            <button className="dialog__add" onClick={addItemEvent}>
              Добавить карточку
            </button>
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
