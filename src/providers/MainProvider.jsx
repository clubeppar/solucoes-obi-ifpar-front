import {
  ThemeProvider,
  LoadingProvider,
  NotificationProvider,
} from "@providers";

export function MainProvider({ children }) {
  return (
    <ThemeProvider>
      <LoadingProvider>
        <NotificationProvider>{children}</NotificationProvider>
      </LoadingProvider>
    </ThemeProvider>
  );
}
