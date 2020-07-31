import styled, { css } from 'styled-components';

interface IProps {
    fullscreen: boolean;
}

export const Container = styled.div<IProps>`
    ${({ fullscreen }) =>
        fullscreen
            ? css`
                  height: 100vh;
              `
            : css`
                  height: 100%;
              `}
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
