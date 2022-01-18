import styled from "styled-components";
import { QueryParamProvider } from "use-query-params";
import Spinner from "./Spinner";
import Box from "./ui/box";
import { GlobalStyle } from "./ui/globalStyle";

const Title = styled.h1`
  text-align: center;
`;

const App = () => {
  return (
    <QueryParamProvider>
      <GlobalStyle />
      <Box>
        <Title>So Spinner!</Title>
        <Spinner />
      </Box>
    </QueryParamProvider>
  );
};

export default App;
