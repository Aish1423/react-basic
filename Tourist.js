import { Fragment } from "react";
import "./Tourist.css"
export default function Tourist(){
    var location = [
        "Manali", "Shimla", "Jaipur", "Amritsar", "Rajasthan"
    ]

    return (
        <div>
          <Fragment>
          <h1 className="h" >Tourist Locations</h1>
          <ul>
            {location.map(
                (location, index) => (
              <li key={index}>{location}</li>
            ))}
          </ul>
          </Fragment>
        </div>
      );
}
