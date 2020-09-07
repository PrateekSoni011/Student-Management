import React,{ Component } from 'react';
import '../Styles/App.css';
import Header from './Header';
import { connect } from "react-redux";
import { getStudents } from "../actions/api";

  
class ViewStudent extends Component {
  state={    
    data: [],
    totalcount: 0,
    error:''
  }

  componentDidMount() {
    this.getStudentData();
  }

  getStudentData() {
    this.props.getStudents(this.state).then(()=>{
      // console.log(this.state);
      let res = this.props.api_data       
      if(!res.error){
        this.setState({
          data: res.data,
          totalcount: res.totalcount
        })
      }else{
        return this.setState({ error: 'Invalid User Name or password' });
      }
    })
    .catch((err)=>{
        console.log(err)
    })
  }
 
  renderTableData() {
    return this.state.data.map((student, index) => {
       const { firstName, lastName , fatherName, email, address, mobileNo, gender, dob , country} = student //destructuring
       return (
          <tr key={index}>
             <td>{firstName}</td>
             <td>{lastName}</td>
             <td>{fatherName}</td>
             <td>{email}</td>
             <td>{address}</td>
             <td>{mobileNo}</td>
             <td>{gender}</td>
             <td>{dob}</td>
             <td>{country}</td>                        
          </tr>
       )
    })
  }

  renderTableHeader() {    
    if(this.state.data && this.state.data[0]){
      let header = Object.keys(this.state.data[0])
      return header.map((key, index) => {
          return <th key={index}>{key.toUpperCase()}</th>
      })
    }
  }

  render() {
    return (    
      <div className="ViewStudent">            
        <Header {...this.props}/>
        <div className="images_wrapper row">
            <h1 id='title'>Student Data</h1>
            <table id='students'>            
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {  
  return {
      api_data: state.data.api_data,
  };
}
export default connect(mapStateToProps, { getStudents })(ViewStudent);