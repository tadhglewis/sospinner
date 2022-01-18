import { useState } from "react";
import { ArrayParam, useQueryParam, withDefault } from "use-query-params";
import Items from "./Items";

const Spinner = () => {
  const [items, setItems] = useQueryParam("items", withDefault(ArrayParam, []));
  const [picked, setPicked] = useState<string>();

  const pick = () => {
    setPicked(items[Math.floor(Math.random() * items.length)] ?? "");
  };

  return (
    <>
      <h2>{picked}</h2>
      <button onClick={pick}>Pick!</button>

      <Items
        items={items}
        remove={(item) => {
          setItems((prev) => prev?.filter((x) => x !== item));
          window.location.reload();
        }}
      />
    </>
  );
};

export default Spinner;
