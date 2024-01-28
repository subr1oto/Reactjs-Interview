import { useState } from "react";

export default function App() {
  const [list1, setList1] = useState([
    {
      title: "Sun",
      checkbox: false,
    },
    {
      title: "Day",
      checkbox: false,
    },
    {
      title: "Water",
      checkbox: false,
    },
  ]);

  const [list2, setList2] = useState([
    {
      title: "Moon",
    },
    {
      title: "Night",
    },
    {
      title: "Fire",
    },
  ]);

  const handleCheckbox = (index) => {
    const updatedList1 = [...list1];
    updatedList1[index].checkbox = !updatedList1[index].checkbox;
    setList1(updatedList1);
  };

  const handleSwap = () => {
    const updatedList1 = [...list1];
    const updatedList2 = [...list2];
    updatedList1.forEach((item, idx) => {
      if (item.checkbox) {
        const temp = updatedList1[idx].title;
        updatedList1[idx].title = updatedList2[idx].title;
        updatedList2[idx].title = temp;
      }
      updatedList1[idx].checkbox = false;
    });
    setList1(updatedList1);
    setList2(updatedList2);
  };

  const ShowItemList1 = () => {
    return (
      <div
        style={{
          width: "150px",
          height: "190px",
          backgroundColor: "lightgray",
          overflowY: "auto",
          borderRadius: "10px",
        }}
      >
        <ul>
          {list1.map((list1, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "5px",
              }}
              htmlFor={list1.title}
            >
              <input
                id={list1.title}
                type="checkbox"
                checked={list1.checkbox}
                onChange={() => {
                  handleCheckbox(index);
                }}
              />
              <span>{list1.title}</span>
            </div>
          ))}
        </ul>
      </div>
    );
  };

  const ShowItemList2 = () => {
    return (
      <div
        style={{
          width: "150px",
          height: "190px",
          backgroundColor: "lightgray",
          overflowY: "auto",
          borderRadius: "10px",
        }}
      >
        <ul>
          {list2.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "5px",
              }}
              htmlFor={item.title}
            >
              <li>{item.title}</li>
            </div>
          )) || <>No Items Selected</>}
        </ul>
      </div>
    );
  };

  return (
    <div style={{ padding: "12px" }}>
      <h1>Swapping Lists</h1>
      <h2>
        Left side checked list should swap from right side list having equal
        index.
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <div style={{ display: "flex", gap: "20px" }}>
          <ShowItemList1 />
          <ShowItemList2 />
        </div>
        <button
          style={{
            borderRadius: "10px",
            height: "30px",
            width: "60px",
            cursor: "pointer",
          }}
          onClick={() => handleSwap()}
        >
          Swap
        </button>
      </div>
    </div>
  );
}
