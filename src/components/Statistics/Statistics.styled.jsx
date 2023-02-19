import styled from '@emotion/styled';
import { getRandomHexColor } from '../getRandomHexColor';

export const Container = styled.section`
  width: 400px;
  border: 1px solid;
  border-radius: 5px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${props => props.theme.colors.white};
`;

export const Title = styled.h2`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  color: ${props => props.theme.colors.primaryText};
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  background-color: ${props => props.theme.colors.light};
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  flex-basis: calc(100% / 4);
  border-radius: 5px;
  background-color: ${props => getRandomHexColor()};
`;

export const Label = styled.span`
  font-size: 16px;
`;

export const Percent = styled.span`
  margin-top: 10px;
  font-size: 22px;
`;
