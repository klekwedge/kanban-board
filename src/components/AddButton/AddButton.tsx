import { useEffect, useRef, useState } from 'react';
import './AddButton.scss';

interface AddButtonProps {
  title: string;
  placeholder: string;
  addItem: (nameItem: string) => void;
}

function AddButton({ title, addItem, placeholder }: AddButtonProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState('');

  function openDialog() {
    setIsDialogOpen(true);
  }

  function closeDialog() {
    setIsDialogOpen(false);
  }

  useEffect(() => {
    if (isDialogOpen && textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, [isDialogOpen]);

  function addItemByClick() {
    if (textAreaRef.current && textAreaRef.current.value !== '') {
      addItem(textAreaRef.current.value);
      setTextAreaValue('');
      setIsDialogOpen(false);
    } else if (textAreaRef.current) {
      textAreaRef.current.style.border = '2px solid #FF4040';
    }
  }

  function addItemByKey(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.code === 'Enter') {
      addItemByClick();
    }
  }

  return (
    <div className="app__add add">
      {!isDialogOpen ? (
        <div className="add__button" onClick={() => openDialog()}>
          <img src="/svg/plus.svg" alt="plus icon" />
          <h3>{title}</h3>
        </div>
      ) : (
        <div className="add__dialog dialog">
          <textarea
            ref={textAreaRef}
            className="dialog__textarea"
            placeholder={placeholder}
            rows={1}
            value={textAreaValue}
            onInput={(e) => {
              const target = e.target as HTMLFormElement;
              setTextAreaValue(target.value);
            }}
            onKeyDown={(e) => addItemByKey(e)}
          />
          <div className="dialog__buttons">
            <button type="button" className="dialog__add" onClick={addItemByClick}>
              Добавить карточку
            </button>
            <button type="button" className="dialog__close" onClick={() => closeDialog()}>
              <img src="/svg/close.svg" alt="close icon" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddButton;
