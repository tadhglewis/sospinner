import { useState } from "react";
import styled from "styled-components";
import { ArrayParam, useQueryParam, withDefault } from "use-query-params";
import Items from "./Items";
import Box from "./ui/box";

const Title = styled.h1`
  text-align: center;
`;

const App = () => {
  const [items, setItems] = useQueryParam("items", withDefault(ArrayParam, []));
  const [picked, setPicked] = useState<string>();

  const pick = () => {
    setPicked(items[Math.floor(Math.random() * items.length)] ?? "");
  };

  return (
    <Box>
      <Title>So Spinner!</Title>

      <h2>{picked}</h2>
      <button onClick={pick}>Pick!</button>

      <Items
        items={items}
        remove={(item) => {
          setItems((prev) => prev?.filter((x) => x !== item));
        }}
      />
    </Box>
  );
};

export default App;
