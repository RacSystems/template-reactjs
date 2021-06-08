import styled from 'styled-components';

import colors from './colors';

export const FormContainer = styled.form`
  margin: 0 auto;
  max-width: 60rem;
  width: 100%;
`;

export const FormSubtitle = styled.strong`
  color: ${colors.tertiary};
  display: flex;
  font-size: 0.93rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

interface IFieldGridProps {
  gridTemplateColumns?: string;
}
export const FieldGrid = styled.div<IFieldGridProps>`
  align-items: flex-end;
  column-gap: 0.5rem;
  display: grid;
  grid-template-columns: ${props =>
    props.gridTemplateColumns ? props.gridTemplateColumns : '1fr'};
  margin-bottom: 1rem;
  row-gap: 1rem;
  width: 100%;
`;

export const FormActions = styled.div`
  column-gap: 0.5rem;
  display: flex;
  margin: 2rem 0 0 auto;
  max-width: 25rem;
  width: 100%;
`;
