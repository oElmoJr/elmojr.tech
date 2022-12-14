import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    
    height: 75px;
    width: 100vw;
    padding: 0 60px;
    
    @media (max-width: 768px) {
        padding: 0 25px;
        background-color: #202020;
    }
`;

export const Logo = styled.h3`
    color: #E5E6E0;
    font-family: 'Aleo';
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;

    width: 133px;
    height: 33px;

    span {
        color: #FFC412;
        font-family: 'Aleo' !important;
    }
`;

export const Nav = styled.div``;

export const NavItem = styled.a`
    color: #E5E6E0;
    
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 15px;
    line-height: 16px;
    margin-left: 26px;
    cursor: pointer;
    
    :last-child {
        color: #202020;
        background-color: #FFC412;
        padding: 5px 20px;
        border-radius: 24px;
    }
    
    @media (max-width: 768px) {
        display: none;

        :last-child {
            display: block;
        }
    }
`;