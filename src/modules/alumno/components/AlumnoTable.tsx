import * as React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { AlumnoRow } from "../model/AlumnoTypes";

interface AlumnoTableProps {
  data: AlumnoRow[];
}

const AlumnoTable: React.FunctionComponent<AlumnoTableProps> = ({ data }) => {
  return (
    <ReactTable
      data={data}
      columns={[
        {
          Header: "",
          accessor: "ProductId",
          maxWidth: 50,
          Cell: (row: any) => (
            <div>
              <Link to={`/alumno/${row.value}`}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </Link>
            </div>
          )
        },
        {
          Header: "Matrícula",
          accessor: "Matricula"
        },
        {
          Header: "Nombre",
          accessor: "Nombre"
        },
        {
          Header: "Materias inscritas",
          accessor: "Materias"
        }
      ]}
      defaultPageSize={10}
      className="-striped -highlight"
    />
  );
};

export default AlumnoTable;
