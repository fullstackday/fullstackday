import { render as testingLibraryRender } from "@testing-library/react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider } from "@mui/lab";

type Render = typeof testingLibraryRender;
type RenderUi = Parameters<Render>[0];
type RenderOptions = Parameters<Render>[1];

export const render = (ui: RenderUi, options: RenderOptions = {}) => {
  return testingLibraryRender(
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {ui}
    </LocalizationProvider>,
    options
  );
};
