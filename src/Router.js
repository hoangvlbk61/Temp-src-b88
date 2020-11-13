import React, { Suspense, lazy } from "react"
import { Router, Switch, Route } from "react-router-dom"
import { history } from "./history"
import { connect } from "react-redux"
import Spinner from "./components/@vuexy/spinner/Loading-spinner"
import { ContextLayout } from "./utility/context/Layout"

// Route-based code splitting
const Home = lazy(() =>
  import("./views/pages/Dashboard")
)
const CommonAccount = lazy(() =>
  import("./views/pages/Accountmanagement/CommonAccount")
)
const BotAccount = lazy(() =>
  import("./views/pages/Accountmanagement/BotAccount")
)
const AdminAccount = lazy(() =>
  import("./views/pages/Accountmanagement/AdminAccount")
)
const CCU = lazy(() =>
  import("./views/pages/Accountmanagement/CCU")
)
const MoneySummary = lazy(() =>
  import("./views/pages/Accountmanagement/MoneySummary")
)

const Page2 = lazy(() =>
  import("./views/pages/Page2")
)

const login = lazy(() =>
  import("./views/pages/authentication/login/Login")
)

// Set Layout and Component Using App Route
const RouteConfig = ({
  component: Component,
  fullLayout,
  permission,
  user,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      return (
        <ContextLayout.Consumer>
          {context => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : context.state.activeLayout === "horizontal"
                ? context.horizontalLayout
                : context.VerticalLayout
              return (
                <LayoutTag {...props} permission={props.user}>
                  <Suspense fallback={<Spinner />}>
                    <Component {...props} />
                  </Suspense>
                </LayoutTag>
              )
          }}
        </ContextLayout.Consumer>
      )
    }}
  />
)
const mapStateToProps = state => {
  return {
    user: state.auth.login.userRole
  }
}

const AppRoute = connect(mapStateToProps)(RouteConfig)

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          <AppRoute
            exact
            path="/"
            component={Home}
          />
          <AppRoute
            path="/common-account"
            component={CommonAccount}
          />
          <AppRoute
            path="/bot-account"
            component={BotAccount}
          />
          <AppRoute
            path="/admin-account"
            component={AdminAccount}
          />
          <AppRoute
            path="/ccu"
            component={CCU}
          />
          <AppRoute
            path="/money-summary"
            component={MoneySummary}
          />
          <AppRoute
            path="/pages/login"
            component={login}
            fullLayout
          />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter
