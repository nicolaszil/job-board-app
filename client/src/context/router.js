import { Redirect, Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import { useGlobalState } from "../context";
import { Layout } from "../components/App/AppLayout";
import { Header } from "../components/App/AppHeader";
import { Candidate as CandidateComponent } from "../components/Candidate";

const history = createBrowserHistory();


export const RouterProvider = ({ children }) => {
  const { actions: { setPreviousPath } } = useGlobalState();

  history.listen(({ pathname }) => {
    setPreviousPath(pathname);
  });

  return <Router history={history}>{children}</Router>;
};

export const AppRoutes = () => (
  <Layout>
    <Header />
    <Switch>
      <Route key="candidate" path={CandidatePath} component={CandidateComponent} exact />
      {/* Put your own routes here... */}
      <Redirect to={HomePath} />
    </Switch>
  </Layout>
);

export const HomePath = "/";
export const CandidatePath = "/candidates/:id";
export const AllPaths = [
  CandidatePath,
  {/* Export your own paths here... */}
];
