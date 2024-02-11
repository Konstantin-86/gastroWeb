import { useState } from "react";

import { useDispatch } from "react-redux";
import { changeNameLanguage } from "../../../store/lunguageSlice";

import "./StylesForButtons.css";

const RadioBtnLanguage = ({ langHandler }) => {
  const [value, setValue] = useState("Russia");

  const dispatch = useDispatch();
  const valueFunc = (e) => {
    setValue(e.target.value);
    langHandler(e.target.value);
    dispatch(changeNameLanguage(e.target.value));
  };
  return (
    <>
      <div>
        <input
          type="radio"
          id="Russia"
          name="Language"
          value="Russia"
          onChange={valueFunc}
          checked={value === "Russia"}
        />
        <label htmlFor="Russia">RU</label>
      </div>
      <div>
        <input
          type="radio"
          id="China"
          name="Language"
          value="China"
          onChange={valueFunc}
        />
        <label htmlFor="China">CH</label>
      </div>
      <div>
        <input
          type="radio"
          id="English"
          name="Language"
          value="English"
          onChange={valueFunc}
        />
        <label htmlFor="English">EN</label>
      </div>
    </>
  );
};

export default RadioBtnLanguage;
