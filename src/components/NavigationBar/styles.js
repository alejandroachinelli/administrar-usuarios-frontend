import styled from 'styled-components';

export const NavbarContainer = styled.nav`
    background-color: #00916E;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.5);
`;

export const NavbarOptions = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavbarOption = styled.div`
    color: #FEEFE5;
    cursor: pointer;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 5px;
    border: 1px solid #FEEFE5;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    &:hover {
        color: #000000;
        background-color: #FEEFE5;
        border: 1px solid #000000;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    }
`;