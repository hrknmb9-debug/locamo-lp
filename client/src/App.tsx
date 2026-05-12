import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import Privacy from "@/pages/Privacy";
import Hearing from "@/pages/Hearing";
import ServiceDetail from "@/pages/ServiceDetail";
import LpIllustrationsPreview from "@/pages/LpIllustrationsPreview";
import { HEARING_PATH, LP_ILLUSTRATIONS_PREVIEW_PATH, getWouterRouterBase } from "@/constants/spaRoutes";
import { RouterMeta } from "@/components/seo/RouterMeta";
import { Router as WouterRouter, Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

function AppRoutes() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/privacy"} component={Privacy} />
      <Route path={HEARING_PATH} component={Hearing} />
      <Route path={`${HEARING_PATH}/`} component={Hearing} />
      <Route path="/services/:planId" component={ServiceDetail} />
      <Route path={LP_ILLUSTRATIONS_PREVIEW_PATH} component={LpIllustrationsPreview} />
      <Route path={`${LP_ILLUSTRATIONS_PREVIEW_PATH}/`} component={LpIllustrationsPreview} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const wouterBase = getWouterRouterBase();

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <WouterRouter {...(wouterBase !== undefined ? { base: wouterBase } : {})}>
            <RouterMeta />
            <AppRoutes />
          </WouterRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
