import { Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

type Tab = {
  label: string;
  hash: string;
};

interface ToggleNavigatorProps {
  /**
   * Tab values
   */
  tabs: Tab[];
}

const ToggleNavigator = ({ tabs }: ToggleNavigatorProps) => {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      {tabs?.map((tab, i) => (
        <ToggleButton
          onClick={() => navigate("#" + tab.hash)}
          value={tab.label}
        >
          {tab.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default ToggleNavigator;
