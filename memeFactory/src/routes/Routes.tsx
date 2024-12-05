import { AllPresales } from "@/page/AllPresales";
import { FaucetPage } from "@/page/FaucetPage";
import Home from "@/page/Home";
import NotFound from "@/page/NotFound";
import CreateToken from "@/page/PreBuy";
import TokenPresale from "@/page/TokenPresale";

import { Route, Switch } from "wouter";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/create-token" component={CreateToken} />
      <Route path="/list-presale" component={AllPresales} />
      <Route path="/faucet" component={FaucetPage} />
      <Route path="/pre-sale/:address/:symbol" component={TokenPresale} />
      <Route component={NotFound} /> {/* 404 */}
    </Switch>
  );
};

export default Routes;
