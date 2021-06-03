import React from "react";
import { Switch, Route } from "react-router-dom";

import { useApi } from "./hooks/useApi";

import { User } from "./api-types/user";
import { Group } from "./api-types/group";

import { ActiveGroupContext } from "./contexts/active-group-context";
import { ActiveUserContext } from "./contexts/active-user-context";

import { Page } from "./modules/common/layout/page";

import { GameToolsRoutes } from "./pages/game-tools/routes";
import { AuthenticatedRoutes } from "./pages/authenticated/routes";
import { UnAuthenticatedRoutes } from "./pages/unauthenticated/routes";

function App() {
  const { apiGet } = useApi();

  const [activeGroup, setActiveGroup] = React.useState<Group | undefined>(undefined);
  const [currentUser, setCurrentUser] = React.useState<User | undefined>(undefined);

  React.useEffect(() => {
    apiGet<User>("/user/me").then(({ data }) => {
      setCurrentUser(data?.id ? data : undefined);
      if (!activeGroup) {
        setActiveGroup(data?.groupMemberships?.[0]?.group);
      }
    });
  }, []);

  return (
    <Page>
      {
        currentUser
          ? (
            <ActiveUserContext.Provider value={{ activeUser: currentUser }}>
              <ActiveGroupContext.Provider value={{ activeGroup, setActiveGroup }}>
                <Switch>
                  <Route path="/game-tools" component={GameToolsRoutes} />
                  <Route path="*" component={AuthenticatedRoutes} />
                </Switch>
              </ActiveGroupContext.Provider>
            </ActiveUserContext.Provider>
          )
          : (
            <Switch>
              <Route path="/game-tools" component={GameToolsRoutes} />
              <Route path="*" component={UnAuthenticatedRoutes} />
            </Switch>
          )
      }
    </Page>
  );
}

export default App;
