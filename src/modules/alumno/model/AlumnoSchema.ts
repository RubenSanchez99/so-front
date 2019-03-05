import * as Yup from "yup";

export const AlumnoSchema = Yup.object().shape({
  matricula: Yup.string().required("Requerido"),
  nombre: Yup.string().required("Requerido"),
  apellidoPaterno: Yup.string().required("Requerido"),
  apellidoMaterno: Yup.string().required("Requerido")
});
