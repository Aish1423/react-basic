export default function Employee(props){
    console.log(props.sname);
    return(
        <>
            <table border="2px">
                <tbody>
                    <tr>
                        <td>Employee name</td>
                        <td>{props.sname}</td>
                    </tr>
                    <tr>
                        <td>Department</td>
                        <td>{props.department}</td>
                    </tr>
                    <tr>
                        <td>Designation</td>
                        <td>{props.designation}</td>
                    </tr>
                    <tr>
                        <td>Join_Date</td>
                        <td>{props.join_Date}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}