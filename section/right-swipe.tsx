import React, { useEffect, useState } from "react";

const RightSwipe = ({ valueFromRightTOParent, permission }: any) => {
  const [selectedString, setSelectedString] = useState("");

  useEffect(() => {
    valueFromRightTOParent(selectedString);
  }, [selectedString]);
  return (
    <div>
      <h1 style={{ backgroundColor: "", color: "white" }}>Given Permission</h1>
      {permission?.map((list: string, i: any) => (
        <div
          key={i + 1}
          onClick={() => {
            setSelectedString(list);
          }}
          style={{
            backgroundColor: list === selectedString ? "white" : "black",
            color: list === selectedString ? "black" : "white",
          }}
        >
          {list}
        </div>
      ))}
    </div>
  );
};

export default RightSwipe;
