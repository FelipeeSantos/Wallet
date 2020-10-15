import React from 'react';
import { CardContainer, Tag } from "./Styles-ExpenseHistoryCards";

interface IExpenseHistoryCards {
    tagColor: string;
    title: string;
    subTitle: string;
    amount: string;
}

const ExpenseHistoryCards: React.FC<IExpenseHistoryCards> = ({ tagColor, title, subTitle, amount }) => {
  return (
    <CardContainer >
      <div>
        <Tag color={tagColor} />
        <div>
          <span>{title}</span>
          <small>{subTitle}</small>
        </div>
        <h3>{amount}</h3>
      </div>
    </CardContainer>
  );
};

export default ExpenseHistoryCards;
