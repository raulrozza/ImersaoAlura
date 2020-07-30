import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Formik } from 'formik';
import * as Yup from 'yup';

// Components
import Button from '../../components/Menu/Button';
import Input, { InputLabelText } from '../../components/Input';
import InputField from '../../components/InputField';
import BaseTemplate from '../../components/BaseTemplate';

// Styles
import { ErrorField, StyledForm } from './styles';

// Services
import api from '../../services/api';

const categorySchema = Yup.object().shape({
    title: Yup.string().required('Digite o nome da categoria'),
    text: Yup.string(),
    color: Yup.string().required('Alguma cor é necessária'),
});

interface ICategory {
    title: string;
    text: string;
    color: string;
}

const NewCategory: React.FC = () => {
    const [disabledBtn, setDisabledBtn] = useState(false);
    const { push } = useHistory();

    const handleSubmit = async (values: ICategory) => {
        setDisabledBtn(true);

        try {
            await api.post('categories', { ...values, videos: [] });

            push('/cadastro/video');
        } catch (error) {
            console.error(error);
        }
        setDisabledBtn(false);
    };

    return (
        <BaseTemplate title="Cadastrar Categoria - Rozzaflix">
            <h1>Cadastro de Categoria</h1>

            <Formik
                initialValues={{ title: '', text: '', color: '#000' }}
                onSubmit={handleSubmit}
                validationSchema={categorySchema}
            >
                {({ errors, touched, values, handleChange }) => (
                    <StyledForm>
                        <InputField>
                            <label>
                                <Input name="title" value={values.title} />
                                <InputLabelText>
                                    Nome da Categoria:
                                </InputLabelText>
                            </label>

                            {errors.title && touched.title ? (
                                <ErrorField>{errors.title}</ErrorField>
                            ) : null}
                        </InputField>
                        <InputField>
                            <label>
                                <Input
                                    as="textarea"
                                    name="text"
                                    value={values.text}
                                    onChange={handleChange}
                                />
                                <InputLabelText>Descrição:</InputLabelText>
                            </label>

                            {errors.text && touched.text ? (
                                <ErrorField>{errors.text}</ErrorField>
                            ) : null}
                        </InputField>
                        <InputField>
                            <label>
                                <InputLabelText>Cor:</InputLabelText>
                            </label>
                            <Input name="color" type="color" />
                            {errors.color && touched.color ? (
                                <ErrorField>{errors.color}</ErrorField>
                            ) : null}
                        </InputField>

                        <Button
                            variant="black"
                            type="submit"
                            disabled={disabledBtn}
                        >
                            Cadastrar
                        </Button>
                    </StyledForm>
                )}
            </Formik>

            <Link to="/">Ir para home</Link>
        </BaseTemplate>
    );
};

export default NewCategory;
