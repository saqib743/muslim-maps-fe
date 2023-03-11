import { Box } from "@mui/system";
import Image from "next/image";
import pic1 from "../../../resources/foodItems/1.svg";
import pic2 from "../../../resources/foodItems/2.svg";
import pic3 from "../../../resources/foodItems/3.svg";
import pic4 from "../../../resources/foodItems/4.svg";
import pic5 from "../../../resources/foodItems/5.svg";
export default function FoodItems() {
  return (
    <Box display="flex">
      <Box borderRadius="20px" marginRight="8px">
        <Image src={pic1} alt="pic1" />
      </Box>
      <Box display="flex">
        <Box>
          <Box width="50%">
            <Box width="50%" borderRadius="20px" marginRight="8px">
              <Image src={pic2} alt="pic2" />
            </Box>
            <Box borderRadius="20px">
              <Image src={pic4} alt="pic4" />
            </Box>
          </Box>
        </Box>
        <Box>
          <Box width="50%">
            <Box width="50%" borderRadius="20px" marginRight="8px">
              <Image src={pic3} alt="pic3" />
            </Box>
            <Box borderRadius="20px">
              <Image src={pic5} alt="pic5" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
