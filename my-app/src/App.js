import "./App.css";
import FlipCard from "./Components/FlipCard/flipCard";
import { Row, Container } from "./styled-components";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

const cards = [
  {
    id: "1",
    title: "lamb noodles",
    back: "lamb, noodles, cumin, cilantro",
  },
  {
    id: "2",
    title: "rice",
    back: "Back",
  },
  {
    id: "3",
    title: "soup",
    back: "Back",
  },
  {
    id: "3",
    title: "soup",
    back: "Back",
  },
  {
    id: "3",
    title: "soup",
    back: "Back",
  },
  {
    id: "3",
    title: "soup",
    back: "Back",
  },
  {
    id: "3",
    title: "soup",
    back: "Back",
  },
];

export function App() {
  return (
    <Container>
      <Row>
        {cards.map((card) => (
          <FlipCard key={card.id} card={card} />
        ))}
      </Row>
    </Container>
  );
}

export default App;
