import styled from "styled-components";

const Box = styled.div``;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 0;

  &:not(:last-child) {
    border-bottom: 1px solid #b4bbbf;
  }
`;

const Remove = styled.div`
  &:after {
    content: "\u00D7";
    display: block;
    font-weight: bold;
    font-size: 20px;
    width: 20px;
    text-align: center;
    cursor: pointer;
  }
`;

const Items = ({
  items,
  remove,
}: {
  items: (string | null)[];
  remove: (item: string | null) => void;
}) => (
  <Box>
    {items.map((item) => (
      <Item key={item}>
        {item}
        <Remove onClick={() => remove(item)} />
      </Item>
    ))}
  </Box>
);

export default Items;
