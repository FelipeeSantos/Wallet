import React, {useMemo, useState} from 'react';

import ContentPages from "../../Components/ContentPages/ContentPages";
import InputDates from "../../Components/InputDates/InputDates";
import ResultsWalletBox from "../../Components/ResultsWalletBox/ResultsWalletBox"
import MessageWalletBox from "../../Components/MessageWalletBox/MessageWalletBox";
import PieChart from "../../Components/PieChart/PieChart";
import CartesianChartBox from "../../Components/CartesianChartBox/CartesianChartBox";
import VerticalColumnCharts from "../../Components/VerticalColumnCharts/VerticalColumnCharts";

import gains from "../../utils/gains";
import expenses from "../../utils/expenses";
import happyImg from "../../assets/happy.svg";
import sadIcon from "../../assets/sad.svg"
import grinningIcon from "../../assets/grinning.svg";
import ops from "../../assets/ops.svg";

import {ContainerResultsWalletBox, VerticalColumnChartsSection} from "./Styles-DashBoard";

interface IRouteParams {
  match: {
    params: {
      type: string;
    }
  }
}

const Dashboard: React.FC<IRouteParams> = () => {
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

  const months = [
    {value: 1, label: "January" },
    {value: 2, label: "February" },
    {value: 3, label: "March" },
    {value: 4, label: "April" },
    {value: 5, label: "May" },
    {value: 6, label: "June" },
    {value: 7, label: "July" },
    {value: 8, label: "August" },
    {value: 9, label: "September" },
    {value: 10, label: "October" },
    {value: 11, label: "November" },
    {value: 12, label: "December" },
  ]

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...gains, ...expenses].forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      (!uniqueYears.includes(year) && uniqueYears.push(year));
    });

    return uniqueYears.map(year => {
      return {
        value: year,
        label: year
      }
    });
  },[])

  const totalExpenses = useMemo(() => {
    let total: number = 0;

    expenses.forEach(item => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      if(month === monthSelected && year === yearSelected) {
        try{
          total += Number(item.amount);
        } catch {
          throw new Error("Invalid amount! Amount must be a number.")
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected])

  const totalGains = useMemo(() => {
    let total: number = 0;

    gains.forEach(item => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      if(month === monthSelected && year === yearSelected) {
        try{
          total += Number(item.amount);
        } catch {
          throw new Error("Invalid amount! Amount must be a number.")
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected])

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalExpenses, totalGains])

  const message = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: "Vary sad",
        description: "This month you spend more than you should have.",
        footerText: "Check your spending",
        icon: sadIcon,
      }
    } else if (totalGains === 0 && totalExpenses === 0) {
      return {
        title: "Sorry !",
        description: "This month there was no record of cash inflows or outflows.",
        footerText: "You may have forgotten to register your balance sheet this month, please check.",
        icon: ops,
      }
    } else if (totalBalance === 0) {
        return {
          title: "Not bad",
          description: "Pay attention, next month try to save money.",
          footerText: "Be careful",
          icon: grinningIcon,
        }
    } else {
        return {
          title:"Very Good !",
          description: "You portfolio is positive.",
          footerText: "Investing your money",
          icon: happyImg
        }
    }

  }, [totalBalance, totalGains, totalExpenses])

  const percentageBetweenCashInflowsAndOutflows = useMemo(() => {
    const total = totalGains + totalExpenses;
    const percentageOfEarnings = Number(((totalGains / total) * 100).toFixed(1));
    const percentageOfExpenses= Number(((totalExpenses / total) * 100).toFixed(1));

    return [
      {
        name: "Cash Inflows",
        value: totalGains,
        percent: percentageOfEarnings ? percentageOfEarnings : 0,
        color: "#F7931B"
      },
      {
        name: "Cash Outflows",
        value: totalExpenses,
        percent: percentageOfExpenses ? percentageOfExpenses : 0,
        color: "#E44C4E"
      }
    ];

  }, [totalGains,totalExpenses])

  const historyData = useMemo(() => {
    return months.map((month) => {
      let amountEntry = 0;
      let amountOutput = 0;

      gains.forEach(gain => {
        const date = new Date(gain.date);
        const gainMonth = date.getMonth();
        const gainYear = date.getFullYear();

        if (gainMonth === month.value && gainYear === yearSelected) {
          amountEntry += Number(gain.amount)
        }
      });

      expenses.forEach(expense => {
        const date = new Date(expense.date);
        const expenseMonth = date.getMonth();
        const expenseYear = date.getFullYear();

        if (expenseMonth === month.value && expenseYear === yearSelected) {
          amountOutput += Number(expense.amount)
        }
      });

      return {
        monthNumber: month.value,
        month: month.label.substr(0, 3),
        amountEntry,
        amountOutput
      }

    }).filter(item => {
      const currentMonth = new Date().getMonth() + 1;
      const currentYear = new Date().getFullYear();

      return (yearSelected <= currentYear && item.monthNumber <= currentMonth)
    })
  }, [yearSelected, months])

  const listOfRecurringExpensesAndEventual = useMemo(() => {
    let recurringQuantity = 0;
    let eventualQuantity = 0;

    expenses.filter((expense) => {
      const date = new Date(expense.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return month === monthSelected && year === yearSelected;
    }).forEach((expense) => {
      if (expense.frequency === "recurrent") recurringQuantity += Number(expense.amount);
      if (expense.frequency === "eventually") eventualQuantity += Number(expense.amount);
    });

    const total = recurringQuantity + eventualQuantity;
    const percentRecurrent = Number(((recurringQuantity / total) * 100).toFixed(1));
    const percentEventual = Number(((eventualQuantity / total) * 100).toFixed(1));

    return [
      {
        name: "Recurrent",
        amount: recurringQuantity,
        percent:  percentRecurrent ? percentRecurrent : 0,
        color: "#F7931B"
      },
      {
        name: "Eventual",
        amount: eventualQuantity,
        percent: percentEventual ? percentEventual : 0,
        color: "#E44C4E"
      }
    ]
  }, [monthSelected, yearSelected])

  const listOfRecurringExpensesAndEventualGains = useMemo(() => {
    let recurringQuantity = 0;
    let eventualQuantity = 0;

    gains.filter((gain) => {
      const date = new Date(gain.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return month === monthSelected && year === yearSelected;
    }).forEach((gain) => {
      if (gain.frequency === "recurrent") recurringQuantity += Number(gain.amount);
      if (gain.frequency === "eventually") eventualQuantity += Number(gain.amount);
    });

    const total = recurringQuantity + eventualQuantity;
    const percentRecurrent = Number(((recurringQuantity / total) * 100).toFixed(1));
    const percentEventual = Number(((eventualQuantity / total) * 100).toFixed(1));

    return [
      {
        name: "Recurrent",
        amount: recurringQuantity,
        percent: percentRecurrent ? percentRecurrent : 0,
        color: "#F7931B"
      },
      {
        name: "Eventual",
        amount: eventualQuantity,
        percent: percentEventual ? percentEventual : 0,
        color: "#E44C4E"
      }
    ]
  }, [monthSelected, yearSelected])

  return (
    <>
      <ContentPages title="DashBoard" lineColor="#F7931B">
        <InputDates options={months}
                    onChange={(event) => setMonthSelected(Number(event.target.value))}
                    defaultValue={monthSelected}
        />

        <InputDates options={years}
                    onChange={(event) => setYearSelected(Number(event.target.value))}
                    defaultValue={yearSelected}
        />
      </ContentPages>
      <ContainerResultsWalletBox>
        <ResultsWalletBox
          title="Balance"
          color="#4E41F0"
          amount={totalBalance}
          footerLabel="Updated based on cash inflows and outflows"
          icons="dollar"
        />
        <ResultsWalletBox
          title="Money deposit"
          color="#F7931B"
          amount={totalGains}
          footerLabel="Updated based on cash inflows and outflows"
          icons="arrowUp"
        />
        <ResultsWalletBox
          title="Outflow money"
          color="#E44C4E"
          amount={totalExpenses}
          footerLabel="Updated based on cash inflows and outflows"
          icons="arrowDown"
        />
      </ContainerResultsWalletBox>
      <MessageWalletBox
        title={message.title}
        description={message.description}
        footerText={message.footerText}
        icon={message.icon}
      >
        <PieChart data={percentageBetweenCashInflowsAndOutflows}/>
      </MessageWalletBox>
      <CartesianChartBox
        data={historyData}
        lineColorInput="#F7931B"
        lineColorOutput="#E44C4E"
      />
      <VerticalColumnChartsSection>
        <VerticalColumnCharts title="Money deposit" data={listOfRecurringExpensesAndEventual} />
        <VerticalColumnCharts title="Outflow money" data={listOfRecurringExpensesAndEventualGains} />
      </VerticalColumnChartsSection>
    </>
  );
};

export default Dashboard;
