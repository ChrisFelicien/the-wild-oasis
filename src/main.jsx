import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
// import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0
    }
  }
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtoolsPanel initialIsOpen={true} /> */}
      <App />
      <Toaster
        position="top-center"
        containerStyle={{ margin: "12px" }}
        gutter={12}
        toastOptions={{
          success: { duration: 1000 },
          error: { duration: 3000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)"
          }
        }}
      />
    </QueryClientProvider>
  </StrictMode>
);
