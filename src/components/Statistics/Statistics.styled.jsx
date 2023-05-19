import styled from '@emotion/styled';
import getRandomHexColor from '../../js/RandomColor'

export const StatisticsContainer = styled.section`
  max-width: 300px;
  width: 100%;
  margin: 0 auto 10px;
  padding: 10px 0;
  background-color: grey;
  border-radius: 5px;
`;

export const Title = styled.h2`
  margin: 0 auto;
  max-width: 240px;
  width: 100%;
  padding: 15px 0px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: white;
`;

export const StatList = styled.ul`
  margin: 0 auto;
  max-width: 240px;
  width: 100%;
  list-style: none;
  display: flex;
  padding: 0;
  text-align: center;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 80px;
  width: 100%;
  border: 1px solid darkgray;
  gap: 5px;
  padding: 5px 0;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  font-weight: 700;
`;

export const Percentage = styled.span`
  font-weight: 500;
`;
