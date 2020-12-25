import React from 'react'

import { Formik } from 'formik'

export default function Form({ initialValues, onSubmit, children }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      { () => (
        <React.Fragment>
          {children}
        </React.Fragment>
      )}
    </Formik>
  )
}