import * as React from "react";
import { Switch, Route } from "react-router-dom";
import StartingPage from "../StartingPage";
import { AlumnoPage, AlumnoInsertPage, AlumnoUpdatePage } from "../../alumno";
export interface Props {
  children?: React.ReactNode;
}

export interface State {}

export default class AppRouter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route path="/" component={StartingPage} exact={true} />
        <Route path="/alumno" component={AlumnoPage} exact={true} />
        <Route path="/alumno/add" component={AlumnoInsertPage} exact={true} />
        <Route path="/alumno/:id" component={AlumnoUpdatePage} exact={true} />
      </Switch>
    );
  }
}
