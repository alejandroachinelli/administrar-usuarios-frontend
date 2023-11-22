import styled from 'styled-components';

export const UserListContainer = styled.div`
  margin: 20px;
`;

export const UserTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  background-color: #00916E;
  color: #FEEFE5;
`;

export const TableData = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const HiddenColumn = styled(TableData)`
  display: none;
`;

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;

export const PageInfo = styled.div`
  font-size: 14px;
  color: #555;
`;

export const PageSizeSelector = styled.select`
  padding: 8px;
`;

export const NoUsersMessage = styled.p`
  text-align: center;
  color: #555;
`;

export const ActionButton = styled.button`
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: ${({ color }) => color};
  border: none;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }

  &:not(:last-child) {
    margin-right: 5px;
  }
`;

export const NavigationButton = styled.button`
  background-color: #00916E;
  color: #FFFFFF;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #006A55;
  }
`;