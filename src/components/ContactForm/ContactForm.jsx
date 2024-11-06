import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Number is required'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onAddContact }) => {
  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = (values, actions) => {
    onAddContact({ id: nanoid(), ...values });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <label htmlFor={nameId}>Name</label>
        <Field id={nameId} type="text" name="name" />
        <ErrorMessage name="name" component="span" />
        <label htmlFor={numberId}>Number</label>
        <Field id={numberId} type="text" name="number" />
        <ErrorMessage name="number" component="span" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
