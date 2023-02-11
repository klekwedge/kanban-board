import "./AddButton.scss";

interface AddButtonProps {
  title: string;
}

function AddButton({ title }: AddButtonProps) {
  return (
    <div className="app__add-card">
      <img src="/public/svg/plus.svg" />
      <h3>{title}</h3>
    </div>
  );
}

export default AddButton;
