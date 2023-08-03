import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const SideNavContainer = styled.nav`
    min-width: 200px;
    background-color: gray;
    padding-right: 20px;
`;

const NavItem = styled(Link)`
    display: block;
    color: white;
    font-size: 18px;
    text-decoration: none;
    margin-bottom: 10px;
`;

const SideNavigation = () => {
    return (
        <SideNavigation>
            <NavItem to="/a">날씨</NavItem>
            <NavItem to="/b">퍼스널컬러</NavItem>
            <NavItem to="/c">이미지첨부</NavItem>
        </SideNavigation>
    );
};

export default SideNavigation;