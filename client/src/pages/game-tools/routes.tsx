import React from "react";
import { Switch, Route } from "react-router-dom";

import { UnauthenticatedNavBar } from "../../modules/common/navigation/unauthenticated-nav-bar";

import { NotFound } from "../error/not-found";

import { GameToolsHome } from "./home";
import { ValeriaCardKingdomsRandomizer } from "./valeria-card-kingdoms/randomizer";

export function GameToolsRoutes(): React.ReactElement {
  return (
    <>
      <UnauthenticatedNavBar homeLogo />
      <Switch>
        <Route exact path="/game-tools" component={GameToolsHome} />
        <Route path="/game-tools/valeria-card-kingdoms-randomizer" component={ValeriaCardKingdomsRandomizer} />
        <Route exact path="/game-tools/*" component={NotFound} />
      </Switch>
    </>
  );
}
