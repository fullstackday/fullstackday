import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Layout } from "./component/Layout";
import { TimeRecordsScene } from "./component/TimeRecordsScene";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <TimeRecordsScene />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
