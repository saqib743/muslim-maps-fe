import Button from "@/components/Button/Button";
import { Box } from "@mui/material";
import filter from "../../resources/filter.svg";
import dropArrow from "../../resources/dropArrow.svg";
import Comments from "./Comments";
export default function CommentsManager() {
  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Box display="flex" justifyContent="space-between">
        <Box display="flex">
          <Button
            onClick={() => {}}
            variant="primary"
            text="Language  English"
            icon={dropArrow}
            justifyContent="center"
            iconReverse
            marginRight="20px"
          />
          <Button
            onClick={() => {}}
            variant="primary"
            text="Sort by Popular"
            icon={dropArrow}
            justifyContent="center"
            iconReverse
          />
        </Box>
        <Box>
          {" "}
          <Button
            onClick={() => {}}
            variant="primary"
            text="Filter"
            icon={filter}
            justifyContent="center"
            iconReverse
          />
        </Box>
      </Box>
      <Comments />
    </Box>
  );
}
