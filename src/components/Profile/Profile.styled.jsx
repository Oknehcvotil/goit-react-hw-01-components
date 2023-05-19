import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  max-width: 300px;
  width: 100%;
  margin: 0 auto 10px;
  padding: 20px 0;
  background-color: grey;
  border-radius: 5px;
`;

export const Description = styled.div`
  max-width: 200px;
  width: 100%;
  min-height: 220px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 5px 5px 0 0;
`;

export const Avatar = styled.img`
  display: block;
  margin: 0 auto 20px;
  width: 100px;
  border-radius: 50%;
  overflow: hidden;
`;

export const UserName = styled.p`
  margin: 0 0 10px;
  text-align: center;
  font-weight: 700;
  font-size: 22px;
`;

export const UserTag = styled.p`
  margin: 0 0 10px;
  text-align: center;
  color: grey;
`;

export const UserLocation = styled.p`
  margin: 0 0 10px;
  text-align: center;
  color: grey;
`;

export const Stats = styled.ul`
  display: flex;
  max-width: 240px;
  width: 100%;
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
  background-color: #f4f4f4;
  text-align: center;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 80px;
  width: 100%;
  border: 1px solid darkgray;
  gap: 5px;
  padding: 5px 0;
`;

export const Label = styled.span`
    color: grey;
`

export const Quantity = styled.span`
    color: grey;
`
