import "./EmployeeD.css"
export default function EmployeeD(props) {
    var employee = [
        { employee_name: 'Aish', department: 'web', designation: 'Full-stack Developer', join_date: '30-05-2024' },
        { employee_name: 'Armaan', department: 'app', designation: 'Mobile Developer', join_date: '15-06-2024' },
        { employee_name: 'Nishi gupta', department: 'hr', designation: 'Manager', join_date: '01-07-2024' },
    ];

    return(
        <div>
         <h1>Employee List</h1>
        <table border= "1px">
        <thead>
          <tr>
            <td className="background-colored">Sno.</td>
            <td className="background-colored">employee_name</td>
            <td className="background-colored">Department</td>
            <td className="background-colored">Designation</td>
            <td className="background-colored">Join_date</td>
          </tr>
        </thead>
        <tbody>
        {
          employee.map(
            (employee,index)=> {
              return (
              <tr key ={index}>
                <td>{index+1} </td>
                <td className={employee.department === 'web' ? 'blue' : employee.department === 'app' ? 'yellow' :'green'}>
                    {employee.employee_name}
                </td>
                <td>{employee.department}</td>
                <td>{employee.designation}</td>
                <td>{employee.join_date}</td>
                     
              </tr>
            )
          }
      )}
      </tbody>
      </table>

      </div>
   )
}