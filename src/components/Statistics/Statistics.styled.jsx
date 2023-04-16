import styled from '@emotion/styled';

export const ListItem = styled.li`
  color: #fff;

  &:first-child {
    color: #21ffb1;
  }

  &:nth-child(2) {
    color: #21e1ff;
  }

  &:nth-child(3) {
    color: #ff2121;
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:hover {
    background-color: #3d3d3d;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  padding: 5px;
`;
