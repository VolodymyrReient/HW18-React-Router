import React, {Component} from "react";

import Contact from "./Contact";

const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}];

class Contacts extends Component {

    state = {
        contacts: contacts,
        search: "",
       
    }
    handleSearchChange = (evt) => { 
        let newArr = [];  
        let request = (evt.target.value).toLowerCase();
              contacts.forEach( i=> {
                let lastName = i.lastName.toLowerCase();
                let firstName = i.firstName.toLowerCase();
                if (lastName.indexOf((request)) !== -1 || firstName.indexOf((request)) !== -1){
                     newArr.push(i);
                }
            })       
            this.setState({
                contacts: newArr
              });
            this.setState({
                search: evt.target.value
            });
    } 
    render() {
        return(
            
            <div className="wrapper-contacts "> 
                <input type="text" value = {this.state.search}  onChange={evt => this.handleSearchChange(evt)} className="search"></input>
                {this.state.contacts.map((el,i)=><Contact firstName={el.firstName} lastName={el.lastName} number={el.phone} key={i} />)}         
            </div>
        )
    }
}

export default Contacts;