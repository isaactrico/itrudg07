import React, {Component} from 'react';
import './App.css';
import data from './db.js';
import Dashboard from './components/Dashboard.js';
import RegCard from './components/RegCard.js';
import DelCard from './components/DelCard.js';
import UpdCard from './components/UpdCard.js';
import Login from './components/Login.js';
import Detail from './components/Detail.js';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      logUser: false,
      logPass: false,
      showDetail: false,
      showLogin: false,
      showDashboard: true,
      showRegCard: false,
      showDelCard: false,
      showUpdCard: false,
      data: data,
      admin: '',
      user: '',
      pass: '',
      policy: '',
      rfc:'',
      begin: '',
      end: '',
      insurance: '3322332233',
      kalmy: '3322332233',
      hospitals: '',
      siniestro: 'Aquí se informará la situación actual del asegurado'
    };
  }

  handleDetail = event =>{
    const {name} = event.target
    this.setState({
      user: name,
      showDetail: true
    })

  }

  handleLogin = () =>{
    if(this.searchByName(this.state.user).admin && this.searchByName(this.state.user).pass === this.state.pass){
      this.setState({
        showLogin: false,
        showDashboard: true
      })
      this.clearState();
    }
  }

  clearState(){
    this.setState({
      admin: '',
      user: '',
      pass: '',
      policy: '',
      rfc:'',
      begin: '',
      end: '',
      insurance: '3322332233',
      kalmy: '3322332233',
      hospitals: '',
      siniestro: 'Aquí se informará la situación actual del asegurado'
    })
  }

  searchByName = (name) => {
    let user=null;
    this.state.data.forEach((reg) =>{
      if(reg.user === name){
        user = reg;
        return false;
      }
    })
    return user;
  }

  validateAdmin = () => {
    if(this.searchByName(this.state.user)){
      return this.searchByName(this.state.user).admin
    }
  }

  validatePass = () =>{
    if(this.searchByName(this.state.user))
      return this.searchByName(this.state.user).pass === this.state.pass
  }

  handleDelUser = event => {
    if(this.searchByName(this.state.user)){
      let newData = [];
      this.state.data.forEach( (user) =>{
        if(user.user !== this.state.user ){
          newData.push(user);
        }
      })
      this.setState({
        data: newData
      })
      this.setState({
        user: '',
        showDelCard: false
      })
    }else{
      alert('informacion de usuario erronea')
    }
  }

  togglePopup = event => {
    const {name} = event.target
    console.log(name);
    this.setState({
      [name]: !this.state[name]
    })
  }

  handleNewUser = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleRegUser = event => {
    if(!this.searchByName(this.state.user)){
      this.setState({
        data: [...this.state.data, {
          admin: (this.state.admin === "1") ? true : false,
          user: this.state.user,
          pass: this.state.pass,
          policy: this.state.policy,
          rfc: this.state.rfc,
          begin: this.state.begin,
          end: this.state.end,
          insurance: this.state.insurance,
          kalmy: this.state.kalmy,
          hospitals: this.state.hospitals,
          siniestro: this.state.siniestro
        }]
      })
      this.clearState();
      this.setState({
        showRegCard: false
      })
    }
    else{
      alert('informacion de usuario incorrecta')
    }
  }

  handleUpdUser = event => {
    let u2u = this.searchByName(this.state.user);
    console.log(u2u);
    let newData = [];
    if(u2u){
      this.state.data.forEach( (user) =>{
        if(user.user !== this.state.user){
          newData.push(user);
        }else{
          newData.push({
            admin: (this.state.admin === "1") ? true : false,
            user: this.state.user,
            pass: (this.state.pass.length > 0) ? this.state.pass : user.pass ,
            policy: (this.state.policy.length > 0) ? this.state.policy : user.policy,
            rfc: (this.state.rfc.length > 0) ? this.state.rfc : user.rfc,
            begin: (this.state.begin.length > 0) ? this.state.begin : user.begin,
            end: (this.state.end.length > 0) ? this.state.end : user.end,
            insurance: (this.state.insurance.length > 0) ? this.state.insurance : user.insurance,
            kalmy: (this.state.kalmy.length > 0) ? this.state.kalmy : user.kalmy,
            hospitals: (this.state.hospitals.length > 0) ? this.state.hospitals : user.hospitals,
            siniestro: (this.state.siniestro.length > 0) ? this.state.siniestro : user.siniestro
          })
        }
      })
      this.setState({
        data: newData,
        showUpdCard: false
      })
    }else{
      alert('informacion de usuario incorrecto')
    }
    this.clearState();
  }



  render(){

    return(
      <React.Fragment>
        {this.state.showLogin ?
          <Login
            handleNewUser={this.handleNewUser}
            handleLogin={this.handleLogin}
            />
          :
          null
        }

        <br/>

        {this.state.showDashboard ?
          <Dashboard
            data={this.state.data}
            handleDetail={this.handleDetail}
            togglePopup={this.togglePopup}
            />
          :
          null
        }

        {this.state.showDetail ?
          <Detail
            user={this.searchByName(this.state.user)}
            togglePopup={this.togglePopup}
            />

          :
          null
        }


        {this.state.showRegCard ?
          <RegCard
            handleNewUser={this.handleNewUser}
            handleRegUser={this.handleRegUser}
            togglePopup={this.togglePopup}
            />
          :
          null
        }

        {this.state.showDelCard ?
          <DelCard
            togglePopup={this.togglePopup}
            handleDelUser={this.handleDelUser}
            handleNewUser={this.handleNewUser}
            />
          :
          null
        }

        {this.state.showUpdCard ?
          <UpdCard
            togglePopup={this.togglePopup}
            handleUpdUser={this.handleUpdUser}
            handleNewUser={this.handleNewUser}
            />
          :
          null
        }

      </React.Fragment>
    );
  }
};

export default App;
