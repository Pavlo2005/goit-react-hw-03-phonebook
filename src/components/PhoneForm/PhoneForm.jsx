import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { ErrMessage, StyledForm } from './PhoneForm.styled';

const quizSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').required('This field is required!'),
    number: Yup.string()
        .min(8, 'Min 8 mins')
        .max(16, 'Max 16 mins')
        .required('This field is required!'),
});

export const PhoneForm = ({ onAddPhone }) => {
    return (
        <div>
            <h2>Phonebook</h2>

            <Formik
                initialValues={{
                    name: '',
                    number: '',
                }}
                validationSchema={quizSchema}
                onSubmit={(values, actions) => {
                    console.log(values);
                    onAddPhone(values);
                    actions.resetForm();
                }}
            >
                <StyledForm>
                    <label>
                        Name
                        <Field name="name" />
                        <ErrMessage name="name" component="div" />
                    </label>
                    <label>
                        Number
                        <Field type="number" name="number" />
                        <ErrMessage name="number" component="div" />
                    </label>
                    <button type="submit">Add contact</button>
                </StyledForm>
            </Formik>
        </div>
    );
};