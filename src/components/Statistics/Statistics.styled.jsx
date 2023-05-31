import styled from "@emotion/styled";

export const StatisticsSection = styled.section`
display: flex;
flex-direction: column;
align-content: center;
padding: 20px;
background-color: #d5e5e5;
width: 360px;
margin: 40px auto;
`

export const StatisticsTitle = styled.h2`
font-size: 28px;
line-height: 1.4;
font-weight: bold;
color: #959595;
margin-bottom: 20px;
text-align: center;
`

export const StatisticsList = styled.ul`
background-color: #b4d4d6;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`

export const StatisticsItem = styled.li`
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

export const StatisticsLabel = styled.span`
  display: flex;
  color: #fffefe;
  font-size: 16px;
  line-height: 1.4;
  text-align: center;
  justify-content: center;
  margin-top: 14px;
`

export const StatisticsPercentage = styled.span`
  display: flex;
  color: #fffefe;
  font-size: 24px;
  line-height: 1.4;
  text-align: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 14px;
`