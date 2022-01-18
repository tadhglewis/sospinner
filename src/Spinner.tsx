import { useState } from "react";
import {
  ArrayParam,
  NumberParam,
  useQueryParam,
  withDefault,
} from "use-query-params";
import Items from "./Items";

const Spinner = () => {
  const [items, setItems] = useQueryParam("items", withDefault(ArrayParam, []));
  const [picked, setPicked] = useState<string>();

  const [test, setTest] = useQueryParam("test", NumberParam);

  //   const pick = () => {
  //     setPicked(items[Math.floor(Math.random() * items.length)] ?? "");
  //   };

  //   console.log(items);
  //

  return (
    <>
      {test}
      <button onClick={() => setTest((test ?? 0) + 1)}>TRttgt</button>

      <Items
        items={items}
        remove={(item) => setItems((prev) => prev?.filter((x) => x !== item))}
      />
    </>
  );
};

export default Spinner;
