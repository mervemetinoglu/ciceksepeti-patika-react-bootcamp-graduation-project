import { useState } from "react";
import "./drop.style.scss";
const Drop = ({
  options,
  selected,
  setSelected,
  name,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (option) => {
    setIsActive(false);
    setSelected({
      ...selected,
      title: option.title,
      id: option.id,
    });
  };

  return (
    <div className="dropdown__container">
      <div className="dropdown__label">{name}</div>
      <div className="dropdown__btn" onClick={() => setIsActive(!isActive)}>
        {selected?.title ? selected?.title : `${name} seç`}
      </div>
      {isActive && (
        <div className="dropdown__content">
          {options.map((option) => (
            <div
              key={option.id}
              className="dropdown__item"
              onClick={() => handleClick(option)}
            >
              {option.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Drop;
