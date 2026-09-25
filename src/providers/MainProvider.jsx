import {
  ThemeProvider,
  LoadingProvider,
  NotificationProvider,
} from "./index.js";

export function MainProvider({ children }) {
  return (
    <ThemeProvider>
      <LoadingProvider>
        <NotificationProvider>{children}</NotificationProvider>
      </LoadingProvider>
    </ThemeProvider>
  );
}
