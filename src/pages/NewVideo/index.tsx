import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Formik, FormikErrors } from 'formik';
import * as Yup from 'yup';

// Components
import BaseTemplate from '../../components/BaseTemplate';
import { IVideo, ICategory } from '../../components/Carousel';

import api from '../../services/api';
import { StyledForm, ErrorField } from '../NewCategory/styles';
import InputField from '../../components/InputField';
import Input, { InputLabelText } from '../../components/Input';
import Button from '../../components/Menu/Button';
import Loading from '../../components/Loading';

const videoSchema = Yup.object().shape({
    title: Yup.string().required('Digite o nome do vídeo'),
    url: Yup.string().required('Precisamos de um link.'),
    category: Yup.string().required('Nomeie uma categoria.'),
});

interface IVideoForm extends IVideo {
    category: string;
}

const NewVideo: React.FC = () => {
    const [disabledBtn, setDisabledBtn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState<ICategory[]>([]);
    const { push } = useHistory();

    useEffect(() => {
        (async () => {
            try {
                const { data } = await api.get('categories');

                setCategories(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    const findCategory = (categoryName: string) => {
        return categories.find(
            category =>
                category.title.toLowerCase() === categoryName.toLowerCase(),
        );
    };

    const handleSubmit = async (values: IVideoForm) => {
        setDisabledBtn(true);

        try {
            await api.post('videos', {
                title: values.title,
                url: values.url,
                categoryId: findCategory(values.category)?.id,
            });

            push('/');
        } catch (error) {
            console.error(error);
        }
        setDisabledBtn(false);
    };

    return (
        <BaseTemplate title="Cadastrar Vídeo - Rozzaflix">
            <h1>Cadastro de Vídeo</h1>

            {loading ? (
                <Loading />
            ) : (
                <Formik
                    initialValues={{ title: '', url: '', category: '' }}
                    onSubmit={handleSubmit}
                    validationSchema={videoSchema}
                    validate={values => {
                        const error: FormikErrors<IVideoForm> = {};

                        // Check if category matches
                        if (!findCategory(values.category))
                            error.category = 'Categoria inválida.';

                        return error;
                    }}
                >
                    {({ errors, touched, values, handleChange }) => (
                        <StyledForm>
                            <InputField>
                                <label>
                                    <Input name="title" value={values.title} />
                                    <InputLabelText>
                                        Título do Vídeo
                                    </InputLabelText>
                                </label>

                                {errors.title && touched.title && (
                                    <ErrorField>{errors.title}</ErrorField>
                                )}
                            </InputField>

                            <InputField>
                                <label>
                                    <Input name="url" value={values.url} />
                                    <InputLabelText>
                                        URL do Vídeo
                                    </InputLabelText>
                                </label>

                                {errors.url && touched.url && (
                                    <ErrorField>{errors.url}</ErrorField>
                                )}
                            </InputField>

                            <InputField>
                                <label>
                                    <Input
                                        name="category"
                                        value={values.category}
                                        id="category"
                                        list="suggestionFor_category"
                                    />
                                    <InputLabelText>
                                        Selecione uma categoria
                                    </InputLabelText>

                                    <datalist
                                        id="suggestionFor_category"
                                        autoCorrect="off"
                                    >
                                        {categories.map(category => (
                                            <option
                                                key={category.id}
                                                value={category.title}
                                            >
                                                {category.title}
                                            </option>
                                        ))}
                                    </datalist>
                                </label>

                                {errors.category && touched.category && (
                                    <ErrorField>{errors.category}</ErrorField>
                                )}
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
            )}

            <Link to="/cadastro/categoria">Cadastrar categoria</Link>
        </BaseTemplate>
    );
};

export default NewVideo;
