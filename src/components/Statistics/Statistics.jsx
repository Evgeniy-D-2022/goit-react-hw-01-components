import PropTypes from "prop-types";
import React from "react";
import { StatisticsSection, StatisticsTitle, StatisticsList, StatisticsItem, StatisticsLabel, StatisticsPercentage } from './Statistics.styled';
import { generateColor } from './randomColor';

export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsSection>
  {title && <StatisticsTitle>{title}</StatisticsTitle>}

  <StatisticsList> {stats.map(elem => (<StatisticsItem key={elem.id} 
  style={{ backgroundColor: generateColor() }}>
    <StatisticsLabel>{elem.label}</StatisticsLabel>
    <StatisticsPercentage>{elem.percentage}</StatisticsPercentage>
  </StatisticsItem>))}
  </StatisticsList>
</StatisticsSection>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number
        })
    ),
};