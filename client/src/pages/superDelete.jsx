import React from 'react'
import api from "./../api/apiHandler"
import { Link } from "react-router-dom"

 class superDelete extends React.Component {
     state = {
         user:[]
     }

componentDidMount(){
    
    api.getUser().then((UserFromApi) =>{
        this.setState({user: UserFromApi})
        console.log("andnow")
    })
}

handleDelete = (UserId) =>{
    console.log(UserId)
    
    api.deleteUser(UserId).then(()=>{
        console.log("user deleted")
        this.setState({UserId:null})
        this.props.history.push("/api/user")
    })
}

    render() {
        
        if (this.state.user === null) {
            return <div>Loading....</div>;
          }


        return (
            <div class="crypto-dets"> 
            <p class="crypto-header-bar"><Link class="crypto-header-bar-hover" to={`/`}>Home</Link>  >  Admin </p>
            <br></br>
        <h3>Admin Page</h3>

        <br></br>
         {this.state.user.map((profile) => {

           return (
             <div key={profile._id}>
                 <div class="crypto-info-dets-all">
                     <div class="admin-page-align"> 
                 <p>    <img class="img-avatar2" src={profile.avatar} alt="avatar"/> </p>&nbsp;&nbsp;&nbsp;
               <p class="pad-admin">{profile.userName} </p> &nbsp;&nbsp;&nbsp;
               <br></br>
               <p class="pad-admin">{profile.email}</p>&nbsp;&nbsp;&nbsp;
               <br></br>
               <button class="link-home" onClick={() => this.handleDelete(profile._id)}> delete</button>
             </div>
             </div>
             </div>
            );
          })}
                
            </div>
        )
    }
}




export default superDelete
