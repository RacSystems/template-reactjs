import styled from 'styled-components';

import { shade } from 'polished';

import colors from 'styles/colors';

export interface IContainerProps {
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: string;
  color?: string;
  height?: string;
  width?: string;
}
export const Container = styled.button<IContainerProps>`
  align-items: center;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : colors.secondary};
  border: 1px solid
    ${props => (props.borderColor ? props.borderColor : colors.transparent)};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '1rem')};
  color: ${props => (props.color ? props.color : colors.white)};
  column-gap: 0.5rem;
  display: flex;
  font-size: 0.875rem;
  font-weight: 500;
  height: ${props => (props.height ? props.height : '2.5rem')};
  justify-content: center;
  width: ${props => (props.width ? props.width : '100%')};

  @media (min-width: 850px) {
    &:hover {
      background-color: ${props =>
        shade(
          0.15,
          props.backgroundColor ? props.backgroundColor : colors.secondary,
        )};
      border-color: ${props =>
        shade(0.2, props.borderColor ? props.borderColor : colors.transparent)};
      color: ${props => shade(0.1, props.color ? props.color : colors.white)};
    }
  }
`;
