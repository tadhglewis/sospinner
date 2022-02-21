import { useState } from "react";

const Add = ({ onAdd }: { onAdd: (item: string) => void }) => {
  const [item, setItem] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        onAdd(item);
        setItem("");
      }}
    >
      <input value={item} onChange={(e) => setItem(e.currentTarget.value)} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Add;
