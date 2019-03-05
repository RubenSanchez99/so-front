import * as React from "react";
import { Title } from "rbx";
import AlumnoForm from "../components/AlumnoForm";
import { Alumno } from "../model/AlumnoTypes";
import { AlumnoSchema } from "../model/AlumnoSchema";

interface AlumnoInsertPageProps {}

const initialValues: Alumno = {
  matricula: "",
  nombre: "",
  apellidoPaterno: "",
  apellidoMaterno: ""
};

export const AlumnoInsertPage: React.FunctionComponent<
  AlumnoInsertPageProps
> = props => {
  return (
    <React.Fragment>
      <Title>Alumno</Title>
      <AlumnoForm
        validationSchema={AlumnoSchema}
        initialValues={initialValues}
        onSubmit={product => alert(JSON.stringify(product, null, 2))}
      />
    </React.Fragment>
  );
};
