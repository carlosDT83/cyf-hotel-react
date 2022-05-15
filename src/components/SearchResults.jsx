import React from "react";
import Row from "./Row";

const SearchResults = props => {
  return (
    <table className="table">
      {" "}
      {/*Visto desde bootstrap*/}
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.result.map(data => {
          return <Row data={data} />;
        })}
      </tbody>
    </table>
  );
};
export default SearchResults;
