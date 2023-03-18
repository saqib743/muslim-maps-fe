import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import About from "./About/About";
import FoodItems from "./FoodItems/FoodItems";
import PlaceDescription from "./PlaceDescription/PlaceDescription";
export default function Places() {
  return (
    <ResponsiveContainer>
      <>
        <PlaceDescription />
        <FoodItems />
        <About />
      </>
    </ResponsiveContainer>
  );
}
