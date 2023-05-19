import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: white;
  border: 1px solid grey;
  border-radius: 5px;
  padding-left: 10px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 48px;
  display: block;
  margin-right: 10px;
`;

export const Name = styled.p`
  margin: 0;
`;
