import React, { useEffect, useState } from "react";

const LeftSwipe = ({ valueFromLeftTOParent, permission }: any) => {
  const [selectedString, setSelectedString] = useState("");

  useEffect(() => {
    valueFromLeftTOParent(selectedString);
  }, [selectedString]);
  return (
    <div>
      <h1 style={{ backgroundColor: "", color: "white" }}>All Permission</h1>
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

export default LeftSwipe;
