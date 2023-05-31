import styled from "@emotion/styled";

export const Table = styled.table`
background-color: #b5d3d8;
width: 800px;
margin: 0px auto;
margin-bottom: 60px;
`

export const TableHeader = styled.th`
background-color: #62e1f8;
font-size: 16px;
color: white;
text-transform: uppercase;
height: 60px;
border: 1px solid white;
`

export const TableRow = styled.tr`
border: 1px solid white;
&:nth-of-type(even) {
    background-color: white;
  }
  &:hover {
    background-color: #7dd8ea8f;
  }
`

export const TableBody = styled.tbody`
background-color: #dbebee; 
color: #876e6e;
`

export const TableData = styled.td`
height: 60px;
text-align: center;
border-radius: inherit; 
`