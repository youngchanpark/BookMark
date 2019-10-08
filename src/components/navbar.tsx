import React, { Component } from "react";

interface Props {
    activeView: string,
    handler: any
}


export class NavBar extends Component<Props> {

    Menu(name:string, active:boolean) {
        const name2href: {[s: string]: string;} = {
            "Home": "#home",
            "News": "#news",
            "Contact": "#contact",
            "About": "#about",
            "Login": "#login",
            "Register": "#register"
        }
        let href = name2href[name]
        if (active===true){
            return (<a onClick={() => this.props.handler(name)} className="active" href={href}>{name}</a>)
        } else {
            return (<a onClick={() => this.props.handler(name)} href={href}>{name}</a>)
        }
    }
    
    AllMenu(active_menu:string) {
        const active_bool: {[s: string]: boolean;} = {
            "Home": false,
            "News": false,
            "Contact": false,
            "About": false,
            "Login": false,
            "Register": false,
        }
        active_bool[active_menu] = true;
        return (
          <div className="navbar">
            {this.Menu("Home", active_bool["Home"])}
            {this.Menu("News", active_bool["News"])}
            {this.Menu("Contact", active_bool["Contact"])}
            {this.Menu("About", active_bool["About"])}
            {this.Menu("Login", active_bool["Login"])}
            {this.Menu("Register", active_bool["Register"])}
          </div>
        )
    }

    render() { return this.AllMenu(this.props.activeView) }   
}

export default NavBar
