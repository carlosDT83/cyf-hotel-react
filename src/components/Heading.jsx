import React from "react";

const Heading = () => {
  const hotelImg =
    "https://cdn-icons.flaticon.com/png/512/4052/premium/4052467.png?token=exp=1652176742~hmac=3f82f6da172c0329fc3856036b5885c8";

  return (
    <header className="App-header">
      <img
        src={hotelImg}
        alt="Logo Hotel"
        width={25}
        style={{
          margin: "0 15px"
        }}
      />
      CYF Hotel
    </header>
  );
};

export default Heading;
