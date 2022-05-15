import React from "react";

const TouristInfoCards = () => {
  const cities = [
    {
      cityImg:
        "https://viajarporescocia.com/contenido/uploads/xfoto_principal-19.jpg.pagespeed.ic.uBUWk1sJuy.webp",
      cityName: "Glasgow",
      preview:
        "In Glasgow, a modern city awaits you in all its splendor, whose chapters of history are reflected in the different corners that make it up. The cradle of the Industrial Revolution, witness to the birth of many inventors, architects, engineers, writers and artists of the 19th and 20th centuries. A place where art and culture have also made their own revolution, turning Glasgow from a declining industrial city to one of the trendiest places on the European continent.",
      link: "https://peoplemakeglasgow.com/"
    },
    {
      cityImg:
        "https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2FOlympic%20Parade%20nav.jpg&action=FeaturedItems3x2",
      cityName: "Manchester",
      preview:
        "Youthful, diverse, energetic and bursting with character; Manchester is one of the most exciting places to visit in the UK right now where everybody and anybody is very warmly welcomed. Known throughout the world as the birthplace of the industrial revolution, Manchester has a proud history in science, politics, music, arts and sport. And today the city combines this heritage with a progressive vision to be a city that delivers surprise and delight in equal measures. ",
      link: "https://www.visitmanchester.com/"
    },
    {
      cityImg:
        "https://cdn.londonandpartners.com/-/media/images/london/visit/general-london/towerbridgecopyrightvisitlondoncomantoinebuchet.jpg?mw=1920&hash=B6672601055B38B34C592E0160B0445AA063B876",
      cityName: "London",
      preview:
        "London is the capital of England and the United Kingdom, and the largest city and urban area in Great Britain and the entire European Union. Located on the banks of the River Thames, London has been an important human settlement since it was founded by the Romans under the name of Londinium almost two millennia ago. The old core of the city, the City of London, basically retains its medieval perimeter of one square mile.",
      link: "https://visitlondon.com/"
    }
  ];

  return (
    <div className="card-container">
      {cities.map(city => (
        <div className="card">
          <img src={city.cityImg} className="card-img-top" alt="image card" />
          <div className="card-body">
            <h2>{city.cityName}</h2>
            <p>{city.preview}</p>
            <a href={city.link} className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TouristInfoCards;
