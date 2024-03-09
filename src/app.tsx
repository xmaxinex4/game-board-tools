import React from "react";
import { Switch, Route } from "react-router-dom";

import { Page } from "./modules/common/layout/page";

import { NavBar } from "./modules/common/navigation/nav-bar";
import { ValeriaCardKingdomsRandomizer } from "./pages/game-tools/valeria-card-kingdoms/randomizer";
import { BoardGameSelector } from "./pages/game-tools/board-game-selector/selector";
import { Home } from "./pages/home";

function App() {
  return (
    <Page>
      <NavBar />
      <Switch>
        <Route path="/valeria-card-kingdoms-randomizer" component={ValeriaCardKingdomsRandomizer} />
        <Route path="/board-game-selector" component={BoardGameSelector} />
        <Route exact path="*" component={Home} />
      </Switch>
    </Page>
  );
}

export default App;
