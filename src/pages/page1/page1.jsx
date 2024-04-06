import React from "react";
import { useSelector } from "react-redux";
import Actions from "src/stores/actions";
import "./page1.scss";

const Page1 = () => {
  const { userName } = useSelector((state) => state.user);

  const _setUserName = (e) => {
    const name = e.target.value;
    Actions.user.setUsername(name);
  };

  return (
    <>
      <h1>Page1</h1>
      <input type="text" value={userName} onChange={_setUserName} />
    </>
  );
};

export default Page1;
