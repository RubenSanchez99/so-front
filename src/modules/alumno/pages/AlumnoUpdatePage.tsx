import * as React from "react";
import { Title } from "rbx";
import AlumnoForm from "../components/AlumnoForm";
import { Alumno } from "../model/AlumnoTypes";
import { AlumnoSchema } from "../model/AlumnoSchema";

interface AlumnoUpdatePageProps {}

const initialValues: Alumno = {
  matricula: "12315243",
  nombre: "Pedrito",
  apellidoPaterno: "Sola",
  apellidoMaterno: "Hernández"
};

export const AlumnoUpdatePage: React.FunctionComponent<
  AlumnoUpdatePageProps
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
