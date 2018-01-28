import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({dispatch, id, description, note, amount, createdAt}) => (
    <div>
        <h3><Link to={"/edit/" + id}>description: {description}</Link></h3>
        <p>note: {note}</p>
        <p>amount: {amount} - createAt: {createdAt}</p>
    </div>
);

export default ExpenseListItem;