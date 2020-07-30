import styled from 'styled-components';

interface IProps {
    horizontalPadding: boolean;
}

export const Main = styled.main<IProps>`
    flex: 1;
    padding: 94px ${({ horizontalPadding }) => (horizontalPadding ? '5%' : '0')}
        18px;
    color: var(--white);
`;
