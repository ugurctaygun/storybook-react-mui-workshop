import { Box } from "@mui/material";
import { useLocation , useNavigate } from "react-router-dom";
import ChipComponent from "../Chip";

type Chip = {
  label: string;
  hash: string;
};

interface ChipNavigatorProps {
  /**
   * Tab values
   */
  chips: Chip[];
}

const ChipNavigation = ({ chips }: ChipNavigatorProps) => {
  const {hash} = useLocation();
  const navigate = useNavigate();

  return (
    <Box style={{display: 'flex' , gap:15}}>
        {chips?.map((chip, i) => (
          <ChipComponent
            key={i}
            variant={chip.hash === hash.replace('#' , '') ? 'default':  'outlined' }
            color="primary"
            label={chip.label}
            textTransform="initial"
            onClick={() => navigate('#'+chip.hash)}
          />
        ))}
    </Box>
  );
};

export default ChipNavigation;
