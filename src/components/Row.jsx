import React, { useState } from "react";
import moment from "moment";

const nbrNights = (a, b) => {
  const dayOut = moment(a);
  const dayIn = moment(b);
  return dayOut.diff(dayIn, "days");
};

const Row = props => {
  const [selected, setSelected] = useState(false);

  return (
    <tr
      onClick={() => setSelected(!selected)}
      className={selected ? "selectedRow" : " "}
    >
      <th scope="row">{props.data.id}</th>
      <td>{props.data.title}</td>
      <td>{props.data.firstName}</td>
      <td>{props.data.surName}</td>
      <td>{props.data.email}</td>
      <td>{props.data.roomId}</td>
      <td>{props.data.checkInDate}</td>
      <td>{props.data.checkOutDate}</td>
      <td>{nbrNights(props.data.checkOutDate, props.data.checkInDate)}</td>
    </tr>
  );
};

export default Row;
