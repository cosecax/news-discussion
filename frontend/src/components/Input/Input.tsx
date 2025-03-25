import { FormikProps } from "formik";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Input = ({ name, label, formik }: { name: string; label: string; formik: FormikProps<any> }) => {
  const value = formik.values[name]
  const error = formik.errors[name] as string | undefined
  const touched = formik.touched[name]
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <br />
      <input name={name} id={name} type="text" value={value} onChange={(e) => formik.setFieldValue(name, e.target.value)} onBlur={() => formik.setFieldTouched(name)} />
      {error && touched && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  )
}

export default Input