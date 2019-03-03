import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      posts:[]
    }
  }
  componentDidMount() {
    const url="http://demo9197058.mockable.io/users";
    fetch(url,{
      method:"GET"
    }).then(reponse => reponse.json()).then(posts =>{
     this.setState({posts:posts})
    })
  }

  render() {
    const columns=[
      {
        Header:"ID",
        accessor:"id",
        style:{
          textAlign:"center"
        },
        width:100,
        maxWidth:100,
        minWidth:100


      },
        {
        Header:"First Name",
        accessor:"first_name",
          style:{
          textAlign:"center"
        }


      },
        {
        Header:"Last Name",
        accessor:"last_name",
           style:{
          textAlign:"center"
        }

      },
        {
        Header:"Company",
        accessor:"company_name",
           style:{
          textAlign:"center"
        }
      },
        {
        Header:"City",
        accessor:"city",
           style:{
          textAlign:"center"
        }
      },
        {
        Header:"State",
        accessor:"state",
           style:{
          textAlign:"center"
        }
      },
        {
        Header:"Zip",
        accessor:"zip",
           style:{
          textAlign:"center"
        },
          width:100,
        maxWidth:100,
        minWidth:100
      },
        {
        Header:"Email",
        accessor:"email",
           style:{
          textAlign:"center"
        }
      },
        {
        Header:"Website",
        accessor:"web",
           style:{
          textAlign:"center"
        }
      },
        {
        Header:"Age",
        accessor:"age",
           style:{
          textAlign:"center"
        },
          width:100,
        maxWidth:100,
        minWidth:100
      },
      {
        Header:"Description",
        Cell: props=>{
          return(
              <button onClick="myFunction()"
              >Description</button>
          )
        },
        textAlign:"center",
        filterable:false

      }
    ]
    return (

        <ReactTable
        columns={columns}
        data={this.state.posts}
        filterable
        defaultPageSize={5}
        noDataText="Oops...not found!"
        >

        </ReactTable>




    );
  }
}

export default App;
