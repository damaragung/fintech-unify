import React, { Component, Fragment } from "react";
import { storiesOf } from "@storybook/react";

import Button from "unify-react-mobile/build/Button";
import HistoryCard from "../lib/components/HistoryCard";

let datas = [
  {
    id: "IVR/20190313/XVII/VII",
    status: "waiting",
    date: "9 Jan 2017",
    due_date: "9 Jan 2017",
    amount: 1250000,
    method: "Alfamart"
  },
  {
    id: "IVR/20190313/XVII/VII",
    status: "success",
    date: "9 Jan 2017",
    due_date: "9 Jan 2017",
    amount: 1250000,
    method: "Alfamart"
  },
  {
    id: "IVR/20190213/XVII/VII",
    status: "failed",
    date: "9 Jan 2017",
    due_date: "9 Jan 2017",
    amount: 1250000,
    method: "BCA Virtual Account"
  }
];

class HistoryCardContainer extends Component {
  render() {
    return (
      <Fragment>
        {datas.map((data, index) => (
          <HistoryCard payment key={index} {...data} />
        ))}
        <HistoryCard payment />
        {/* please show button load more below if card is more than 6 */}
        <div className="mcl-history__cta">
          <Button alternate ghost block>
            Transaksi Sebelumnya
          </Button>
        </div>
      </Fragment>
    );
  }
}

storiesOf("History Card", module).add("with container", () => (
  <HistoryCardContainer />
));

storiesOf("History Card", module).add("status waiting", () => (
  <HistoryCard status="waiting" />
));
storiesOf("History Card", module).add("status success", () => (
  <HistoryCard status="success" />
));
storiesOf("History Card", module).add("status failed", () => (
  <HistoryCard status="failed" />
));

storiesOf("History Card", module).add("with card_icon props", () => (
  <HistoryCard card_icon="https://ecs7.tokopedia.net/img/fintech/category/pl/colored-active.png" />
));
