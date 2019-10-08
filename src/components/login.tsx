import axios from 'axios';
import React, { Component } from 'react'
import { thisTypeAnnotation } from '@babel/types';

interface State {
    name: string,
    username: string,
    password: string,
    confirm_password: string,
    email: string,
    submit: boolean 
}

export class RegisterPage extends Component<{}, State> {
    
    constructor(props: any){
        super(props)
        this.state = {
            name: '',
            username: '',
            password: '',
            confirm_password: '',
            email: '',
            submit: false
        }
    }

    handleSubmit(e: React.FormEvent<HTMLFormElement>):void {
        e.preventDefault();
        console.log(e);
    } 
    
    render() { 
        return (
        <div className="Register">
            <form onSubmit={e => this.handleSubmit(e)} method="POST">
                <div>
                    <label>이름</label>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="홍길동"
                      value={ this.state.name }
                      onChange={e => this.setState({ name: e.target.value}) }
                      ></input>
                </div>
                <div>
                    <label>아이디</label>
                    <input 
                      type="text" 
                      name="username" 
                      placeholder="username1993"
                      value={ this.state.username }
                      onChange={e => this.setState({ username: e.target.value}) }
                      ></input>
                </div>
                <div>
                    <label>비밀번호</label>
                    <input 
                      type="password" 
                      name="password"
                      value={ this.state.password }
                      onChange={e => this.setState({ password: e.target.value}) }
                      ></input>
                </div>
                <div>
                    <label>비밀번호 재입력</label>
                    <input 
                      type="password" 
                      name="confirm_password"
                      value={ this.state.confirm_password }
                      onChange={e => this.setState({ confirm_password: e.target.value}) }
                      ></input>
                </div>
                <div>
                    <label>이메일</label>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="gd.hong@kr-geninus.com"
                      value={ this.state.email }
                      onChange={e => this.setState({ email: e.target.value}) }
                      ></input>
                </div>
                <input type="submit" name="submit" value="가입"></input>
            </form>
        </div>
        )
    }
}

export default RegisterPage
