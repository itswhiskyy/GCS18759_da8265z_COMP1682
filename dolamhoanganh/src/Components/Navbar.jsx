import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../Responsive"
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"

const Container = styled.div`
    height: 60px;
    ${mobile({height: "60px"})}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({height: "10px 0px"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 20px;
    cursor: pointer;
    ${mobile({display: "none"})}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({marginLeft: "0px"})}
`
const Input = styled.input`
    border: none;
    ${mobile({width: "50px"})}
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize: "23px"})}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex: "2", justityContent: "Center"})}
`

const MenuIt = styled.div`
    font-size: 20px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: "12px", marginLeft: "10px"})}
`

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder="Search"/>
                    <Search style={{color: "gray", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>QUEEN.</Logo></Center>
            <Right>
                <Link to="/register"><MenuIt>REGISTER</MenuIt></Link>
                <Link to="/login"><MenuIt>SIGN IN</MenuIt></Link>
                <Link to="/cart">
                <MenuIt>
                <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlined />
                </Badge>
                </MenuIt>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar