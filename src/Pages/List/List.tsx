import React, { useMemo, useState, useEffect } from 'react';
import { v4 as uuid_v4 } from "uuid";
import ContentPages  from "../../Components/ContentPages/ContentPages";
// @ts-ignore
import InputDates from "../../Components/InputDates/InputDates";
import ExpenseHistoryCards from "../../Components/ExpenseHistoryCards/ExpenseHistoryCards";
import Filter from "../../Components/Filters/Filters";

import gains from "../../utils/gains"
import expenses from "../../utils/expenses";
import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";

interface IRouteParams {
  match: {
    params: {
      type: string;
    }
  }
}

interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {
  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
  const [selectedFrequency, setSelectedFrequency] = useState(["recurrent", "eventually"]);

  const { type } = match.params;

  const title = useMemo(() => {
    return type === "money-deposit" ? "Money deposit" : "Outflow money"
  }, [type]);

  const lineColor = useMemo(() => {
    return type === "money-deposit" ? "#4E41F0" : "#E44C4E"
  }, [type]);

  const listData = useMemo(() => {
    return type === "money-deposit" ? gains : expenses
  }, [type])

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

    listData.forEach(item => {
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
  },[listData])

    const handleClickFrequency = (frequency: string) => {
    const alreadySelected = selectedFrequency.findIndex(item => item === frequency);

    if (alreadySelected >= 0) {
      const filtered = selectedFrequency.filter(item => item === frequency);
      setSelectedFrequency(filtered)
    } else {
      setSelectedFrequency((prevent) => [...prevent, frequency]);
    }
  }

  useEffect(() => {
    const filteredData = listData.filter(item => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return month === monthSelected && year === yearSelected && selectedFrequency.includes(item.frequency);
    })

    const modifiedListData = filteredData.map(item => {

      return {
        id: uuid_v4(),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === "recurrent"
          ? "#4E41F0"
          : "#E44C4E"
      }
    })

    setData(modifiedListData);
  }, [listData, monthSelected, yearSelected, data.length, selectedFrequency])

  return (
    <>
      <ContentPages title={title} lineColor={lineColor}>
        <InputDates options={months}
                    onChange={(event) => setMonthSelected(Number(event.target.value))}
                    defaultValue={monthSelected}
        />

        <InputDates options={years}
                    onChange={(event) => setYearSelected(Number(event.target.value))}
                    defaultValue={yearSelected}
        />
      </ContentPages>
      <Filter>
        <button
          className={`tag-filter-recurrent
          ${selectedFrequency.includes("recurrent") && "tag-activated"}`}
          type="button"
          onClick={() => handleClickFrequency("recurrent")}
        >
          Recurrent
        </button>
        <button
          className={`tag-filter-eventually
          ${selectedFrequency.includes("eventually") && "tag-activated"}`}
          type="button"
          onClick={() => handleClickFrequency("eventually")}
        >
          Eventually
        </button>
      </Filter>
      <section>
        {
          data.map(item => (
            <ExpenseHistoryCards
              key={item.id}
              tagColor={item.tagColor}
              title={item.description}
              subTitle={item.dateFormatted}
              amount={item.amountFormatted}
            />
          ))
        }
      </section>

    </>
  );
};

export default List;
