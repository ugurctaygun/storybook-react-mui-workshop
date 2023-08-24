import {
  Grid,
  Stepper,
  Step,
  StepButton,
  Box,
  StepLabel,
  StepConnector,
} from "@mui/material";

interface StepperProps {
  /**
   * Active step of stepper
   */
  currentStep?: Number;
  /**
   * Set step as a button or a text value
   */
  stepStyle: "Button" | "Label" ;
}

const Steps = ({
  currentStep = 0,
  stepStyle = "Button",
}: StepperProps) => {

  let stepPath = [
    {
      StepName: "First Step",
      completed: true,
    },
    {
      StepName: "Second Step",
      completed: false,
    },
    {
      StepName: "Third Step",
      completed: false,
    },
    {
      StepName: "Fourth Step",
      completed: false,
    },
  ];

  return (
    <Box style={{ minWidth: "500px" }}>
      <Grid container>
        <Grid item xs={12}>
          <Stepper
            variant="outlined"
            alternativeLabel
            nonLinear
            activeStep={currentStep}
          >
            {stepPath.map((item, index) => {
              return (
                <Step key={index} completed={item.completed}>
                  {stepStyle === "Button" ? (
                    <StepButton>{item.StepName}</StepButton>
                  ) : (
                    <StepLabel>{item.StepName}</StepLabel>
                  )}
                </Step>
              );
            })}
          </Stepper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Steps;
