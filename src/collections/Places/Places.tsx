import Container from "@mui/material/Container";
import FoodItems from "./FoodItems/FoodItems";
import PlaceDescription from "./PlaceDescription/PlaceDescription";
export default function Places() {
  return (
    <Container maxWidth="xl">
      <PlaceDescription />
      <FoodItems />
    </Container>
  );
}
