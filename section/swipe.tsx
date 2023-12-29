import React, { useState } from "react";
import RightSwipe from "./right-swipe";
import LeftSwipe from "./left-swipe";

const Swipe = () => {
  const [permissionForLeft, setPermissionForLeft] = useState([
    "string 1",
    "string 2",
  ]);
  const [permissionForRight, setPermissionForRight] = useState([
    "string 1",
    "string 2",
  ]);
  const [valueOfLeft, setValueOfLeft] = useState<string>("");
  const [valueOfRight, setValueOfRight] = useState<string>("");

  const valueFromLeftTOParent = (valuefromLeft: string) => {
    setValueOfLeft(valuefromLeft);
  };
  const valueFromRightTOParent = (valuefromRight: string) => {
    setValueOfRight(valuefromRight);
  };

  const toRightHandler = () => {
    const getFilteredArray = permissionForLeft.filter(
      (item) => item !== valueOfLeft
    );
    const getSelectedFilteredArray = permissionForLeft.filter(
      (item) => item === valueOfLeft
    );

    console.log(getSelectedFilteredArray);

    setPermissionForLeft([...getFilteredArray, valueOfRight]);
    setPermissionForRight([...permissionForRight, ...getSelectedFilteredArray]);
  };

  const toLeftHandler = () => {
    const getFilteredArray = permissionForRight.filter(
      (item) => item !== valueOfRight
    );
    const getSelectedFilteredArray = permissionForRight.filter(
      (item) => item === valueOfRight
    );

    setPermissionForRight([...getFilteredArray, valueOfLeft]);
    setPermissionForLeft([...permissionForLeft, ...getSelectedFilteredArray]);
  };

  return (
    <div>
      <LeftSwipe
        valueFromLeftTOParent={valueFromLeftTOParent}
        permission={permissionForLeft}
      />
      <button onClick={toRightHandler}>'To Right'</button>
      <button onClick={toLeftHandler}>'To Left'</button>
      <RightSwipe
        valueFromRightTOParent={valueFromRightTOParent}
        permission={permissionForRight}
      />
    </div>
  );
};

export default Swipe;
