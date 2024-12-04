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
      <Route path="/pre-buy" component={TokenPresale} />
      <Route component={NotFound} /> {/* 404 */}
    </Switch>
  );
};

export default Routes;
