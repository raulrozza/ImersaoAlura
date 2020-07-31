import styled, { css } from 'styled-components';
import { Field } from 'formik';

export const InputLabelText = styled.span`
    color: #e5e5e5;
    height: 57px;
    position: absolute;
    top: 0;
    left: 16px;

    display: flex;
    align-items: center;

    transform-origin: 0% 0%;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    cursor: text;

    transition: 0.1s ease-in-out;
`;

interface IProps {
    type?: string;
    value?: string;
}

const Input = styled(Field)<IProps>`
    background: #53585d;
    color: #f5f5f5;
    display: block;
    width: 100%;
    height: 57px;
    font-size: 18px;

    outline: 0;
    border: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid #53585d;

    padding: 16px 16px;

    resize: none;
    border-radius: 4px;
    transition: border-color 0.3s;

    &:focus {
        border-bottom-color: var(--primary);
    }
    &:focus:not([type='color']) + ${InputLabelText} {
        transform: scale(0.6) translateY(-10px);
    }

    cursor: ${({ type }) => (type === 'color' ? 'pointer' : 'auto')};

    ${({ value }) => {
        const hasValue = value && value.length > 0;
        return (
            hasValue &&
            css`
                &:not([type='color']) + ${InputLabelText} {
                    transform: scale(0.6) translateY(-10px);
                }
            `
        );
    }};
`;

export default Input;
