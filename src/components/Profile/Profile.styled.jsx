import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
display: flex;
flex-direction: column;
align-content: center;
padding: 20px;
background-color: #d5e5e5;
width: 360px;
margin: 40px auto;
`
export const Description = styled.div`
display: flex;
flex-direction: column;
align-content: center;
padding: 20px;
align-items: center;
background-color: #03a9f4;
border-radius: 15px;
`

export const ProfileImage = styled.img`
display: block;
width: 200px;
background: #f0e9e9;
border-radius: 50%;
margin-bottom: 40px;
`

export const ProfileName = styled.p`
font-size: 28px;
line-height: 1.4;
font-weight: bold;
color: #000000;
margin-bottom: 10px;
`

export const ProfileTag = styled.p`
font-size: 20px;
line-height: 1.4;
color: #4d4646;
margin-bottom: 10px;
`
export const StatsList = styled.ul`
background-color: #b4d4d6;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
border-radius: 15px;
`
export const StatsItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  :not(:last-child) {
    border-right: 2px solid #101030;
  }
  :not(:last-child) span {
    border-right: none;
  }
`
export const StatsLabel = styled.span`
  display: flex;
  color: #716868;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.4;
  text-align: center;
  justify-content: center;
  margin-top: 14px;
`

export const StatsQuantity = styled.span`
  text-align: center;
  font-size: 16px;
  line-height: 1.4;
  font-weight: bold;
  margin: 10px auto;
`;