import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import Hearing from "@/pages/Hearing";
import Privacy from "@/pages/Privacy";
import ServiceDetail from "@/pages/ServiceDetail";
import Orders from "@/pages/Orders";
import Payment from "@/pages/Payment";
import PaymentSuccess from "@/pages/PaymentSuccess";
import SubscriptionSuccess from "@/pages/SubscriptionSuccess";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/hearing"} component={Hearing} />
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/services/:planId"} component={ServiceDetail} />
      <Route path={"/orders"} component={Orders} />
      <Route path={"/payment"} component={Payment} />
      <Route path={"/payment-success"} component={PaymentSuccess} />
      <Route path={"/subscription-success"} component={SubscriptionSuccess} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
