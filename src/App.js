import "./App.css";
import { Box, Barra } from "./styled";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { GlobalStyle } from "./globalStyled";
function App() {
  let x = [100, 50, 25, 30];
  let y = [10, 50, 11, 30];

  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <Box>
          {x.map((e, i) => {
            return (
              <Barra width={(100 / e) * y[i]}>
                <div></div>
                <span>
                  <AiOutlineDoubleRight />
                </span>
              </Barra>
            );
          })}
        </Box>
      </header>
    </div>
  );
}

export default App;
