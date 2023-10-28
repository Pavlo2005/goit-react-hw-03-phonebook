import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: ${p => p.theme.spacing(4)};
`

export const Button = styled.button`
    width: 120px;
    height: 36px;
`