import "./App.css";
import FlipCard from "./Components/FlipCard/flipCard";
import { Row, Container } from "./styled-components";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

const cards = [
  {
    id: "1",
    front: "noodles",
    back: "Back",
  },
  {
    id: "2",
    front: "rice",
    back: "Back",
  },
  {
    id: "3",
    front: "soup",
    back: "Back",
  },
  {
    id: "3",
    front: "soup",
    back: "Back",
  },
  {
    id: "3",
    front: "soup",
    back: "Back",
  },
  {
    id: "3",
    front: "soup",
    back: "Back",
  },
  {
    id: "3",
    front: "soup",
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
