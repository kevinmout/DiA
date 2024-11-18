import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { queryClient } from "./api/react-query/queryClient";
import { IndexProvider } from "./pages/IndexPageProvider";

export const App = (): JSX.Element => {
  return (
    <div className="App">
      <MantineProvider defaultColorScheme="dark">
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route path="/" element={<IndexProvider />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </MantineProvider>
    </div>
  );
};
