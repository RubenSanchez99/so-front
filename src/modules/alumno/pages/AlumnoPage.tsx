import * as React from "react";
import { AddButton } from "../../../shared/controls";
import AlumnoTable from "../components/AlumnoTable";
import { AlumnoRow } from "../model/AlumnoTypes";

interface AlumnoPageProps {}

const data: AlumnoRow[] = [
  { Matricula: "1233456", Nombre: "Pedrito Sola", Materias: 2 },
  { Matricula: "23452323", Nombre: "Margarito", Materias: 4 },
  { Matricula: "21355213", Nombre: "Margara Teresa", Materias: 1 }
];

export const AlumnoPage: React.FunctionComponent<AlumnoPageProps> = props => {
  return (
    <div>
      <AddButton route="/alumno/add" />
      <AlumnoTable data={data} />
    </div>
  );
};
