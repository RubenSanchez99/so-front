import * as React from "react";
import { SubmitButton, TextBox, DropDownList } from "../../../shared/controls";
import { Form, Formik } from "formik";
import { Column } from "rbx";
import * as Yup from "yup";
import { Alumno } from "../model/AlumnoTypes";

interface AlumnoFormProps {
  onSubmit: (arg0: Alumno) => void;
  validationSchema: Yup.ObjectSchema<Yup.Shape<{}, Alumno>>;
  initialValues: Alumno;
}

const AlumnoForm: React.FunctionComponent<AlumnoFormProps> = ({
  onSubmit,
  validationSchema,
  initialValues
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          onSubmit(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, isSubmitting, errors, touched }) => (
        <Form>
          <Column.Group>
            <Column>
              <TextBox
                label="Matrícula"
                name="matricula"
                placeholder="Matrícula"
                errors={errors.matricula}
                touched={touched.matricula}
              />
            </Column>
            <Column>
              <TextBox
                label="Nombre"
                name="nombre"
                placeholder="Nombre"
                errors={errors.nombre}
                touched={touched.nombre}
              />
            </Column>
          </Column.Group>
          <Column.Group>
            <Column>
              <TextBox
                label="Apellido Paterno"
                name="apellidoPaterno"
                placeholder="Apellido Paterno"
                errors={errors.apellidoPaterno}
                touched={touched.apellidoPaterno}
              />
            </Column>
            <Column>
              <TextBox
                label="Apellido Materno"
                name="apellidoMaterno"
                placeholder="Apellido Materno"
                errors={errors.apellidoMaterno}
                touched={touched.apellidoMaterno}
              />
            </Column>
          </Column.Group>
          <SubmitButton isSubmitting={isSubmitting} text="Guardar" />
        </Form>
      )}
    </Formik>
  );
};

export default AlumnoForm;
