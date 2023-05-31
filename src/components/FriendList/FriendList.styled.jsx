import styled from "@emotion/styled";

export const List = styled.ul`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 20px;
background-color: #d5e5e5;
width: 360px;
margin: 40px auto;
`

export const Item = styled.li`
display: flex;
align-items: center;
align-content: center;
width: 100%;
border: 1px solid;
padding: 5px;
box-shadow: 0px 1px 3px 5px rgb(0 0 0 / 55%), 
0px 1px 1px 6px rgb(0 0 0 / 14%), 
0px 2px 1px rgb(0 0 0 / 20%);
  :not(:last-child) {
    margin-bottom: 20px;
`

export const Span = styled.span`
width: 16px;
height: 16px;
border-radius: 50%;
margin-left: 20px;
background-color: ${props => (props.status ? 'green' : 'red')};
`

export const Image = styled.img`
display: block;
width: 100px;
background: #eeeeee;
border-radius: 8px;
margin-left: 20px;
`

export const Name = styled.p`
font-size: 24px;
line-height: 1.4;
font-weight: bold;
color: #000000;
margin-left: 20px;
`