import styled, { css } from 'styled-components';

import colors from './colors';

interface IItemsProps {
  hasBorder?: boolean;
  marginTop?: string;
}
export const Items = styled.div<IItemsProps>`
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  margin-top: ${props => (props.marginTop ? props.marginTop : '1rem')};
  overflow: hidden;
  position: relative;
  width: 100%;

  ${props =>
    props.hasBorder &&
    css`
      border: 1px solid #000;
    `};
`;

export const ItemsHeader = styled.div`
  align-items: center;
  column-gap: 0.5rem;
  display: grid;
  min-height: 2.5rem;
  padding: 0 0.5rem;
  width: 100%;
`;

interface IItemHeaderProps {
  center?: boolean;
}
export const ItemHeader = styled.label<IItemHeaderProps>`
  color: ${colors.tertiary};
  font-size: 0.875rem;
  font-weight: 600;
  width: 100%;

  ${props =>
    props.center &&
    css`
      text-align: center;
    `};
`;

interface IItemBodyProps {
  addColorRow?: boolean;
}

export const ItemsBody = styled.div<IItemBodyProps>`
  align-items: center;
  background-color: ${colors.transparent};
  column-gap: 0.5rem;
  display: grid;
  min-height: 2.5rem;
  padding: 0 0.5rem;
  width: 100%;

  ${props =>
    props.addColorRow &&
    css`
      background: ${colors.background};
    `}
`;

export const ItemsBodyContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 0.5rem;
  width: 100%;
`;

interface IItemBodyProps {
  active?: boolean;
  center?: boolean;
  inactive?: boolean;
}

export const ItemBody = styled.div<IItemBodyProps>`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: ${colors.text};
  display: -webkit-box;
  float: left;
  font-size: 0.875rem;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  word-break: break-word;

  @media (min-width: 768px) {
    -webkit-line-clamp: 3;
  }

  ${props =>
    props.center &&
    css`
      text-align: center;
    `};

  ${props =>
    props.active &&
    css`
      color: ${colors.secondary};
      font-weight: 600;
    `};

  ${props =>
    props.inactive &&
    css`
      color: ${colors.danger};
    `};
`;

export const ItemTags = styled.div`
  align-items: center;
  column-gap: 0.5rem;
  display: flex;
  grid-column-end: 4;
  grid-column-start: 1;
  width: 100%;
`;

interface IItemTagProps {
  bgColor?: string;
}
export const ItemTag = styled.div<IItemTagProps>`
  align-items: center;
  background-color: ${props => (props.bgColor ? props.bgColor : '#000')};
  border-radius: 0.4rem;
  color: ${colors.white};
  display: flex;
  font-size: 0.75rem;
  height: 1.25rem;
  justify-content: center;
  padding: 0 0.5rem;
`;

export const ItemActions = styled.div`
  column-gap: 0.5rem;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const ItemAction = styled.button`
  align-items: center;
  background-color: ${colors.transparent};
  border: 0;
  display: flex;
  font-size: 0;
  height: 1.5rem;
  justify-content: center;
  width: 1.5rem;

  @media screen and (min-width: 768px) {
    &:hover {
      opacity: 0.8;
    }
  }
`;
