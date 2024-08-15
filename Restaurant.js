import "./Restaurant.css"
export default function Restaurant(){

    var restaurant = [ 
      { rest_name : "food bazar",
        rating : "4", image : 'https://th.bing.com/th/id/OIP.NQ7bf0TfEQRkzdhFshHieQHaFj?rs=1&pid=ImgDetMain',
        location : "central green" 
      },
      {
        rest_name : "jass bakers",
        rating : "5", image : 'https://th.bing.com/th/id/OLC.0nEONZBlzvYbCQ480x360?&rs=1&pid=ImgDetMain',
        location : "model town" 
      },
      {
        rest_name : " SCF champ",
        rating : "3", image : 'https://th.bing.com/th?id=OLC.Aner22l0HRtt5w480x360&w=230&h=180&c=8&rs=1&qlt=80&p=0&o=6&cdv=1&pid=Local',
        location : "model town" 
      }
    ];
    return(

      <table border= "1px">
        <thead>
          <tr>
            <td>Sno.</td>
            <td>Rname</td>
            <td>rating</td>
            <td>image</td>
            <td>location</td>
          </tr>
        </thead>
      <tbody>
        {
          restaurant.map(
            (el,index)=> {
              return (
              <tr key ={index}>
                <td>{index+1} </td>
                <td>{el.rest_name} </td>
                <td>{el.rating} </td>
                <td> <img src={el.image} alt={el.rest_name} width="100" /> </td>
                <td>{el.location}</td> 
              </tr>
            );
          })}
      </tbody>
      </table>
      
   );
  }