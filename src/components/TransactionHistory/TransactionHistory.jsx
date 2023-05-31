import PropTypes from "prop-types";
import React from "react";
import { Table, TableHeader, TableRow, TableBody, TableData } from './TransactionHistory.styled'

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
  <thead>
    <TableRow>
      <TableHeader>Type</TableHeader>
      <TableHeader>Amount</TableHeader>
      <TableHeader>Currency</TableHeader>
    </TableRow>
  </thead>

  <TableBody>
  {items.map(({ id, type, amount, currency }) => {
          return (
            <TableRow key={id}>
              <TableData>{type}</TableData>
              <TableData>{amount}</TableData>
              <TableData>{currency}</TableData>
            </TableRow>
          );
        })}
  </TableBody>
</Table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          type: PropTypes.string,
          amount: PropTypes.string,
          currency: PropTypes.string,
        })
      ),
};