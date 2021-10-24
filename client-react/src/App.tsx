import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Layout } from "./component/Layout";
import { TimeRecordsScene } from "./component/TimeRecordsScene";
import { QueryClient, QueryClientProvider } from "react-query";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Layout>
          <CssBaseline />
          Hello iJS!
          <TimeRecordsScene />
        </Layout>
      </LocalizationProvider>
    </QueryClientProvider>
  );
}

export default App;
