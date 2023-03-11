import { Divider } from "@mui/material";
import Container from "@mui/material/Container";
import About from "./About/About";
import FoodItems from "./FoodItems/FoodItems";
import PlaceDescription from "./PlaceDescription/PlaceDescription";
export default function Places() {
  return (
    <Container maxWidth="xl">
      <PlaceDescription />
      <FoodItems />
      <About />
    </Container>
  );
}
