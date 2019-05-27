import './Main.css';
import React, { Component } from 'react'
import {afterHandler} from '../../action/anction'
import {connect} from 'react-redux'

class Main extends Component {
    componentDidMount() {
        console.log(this.props.username)
    }
    render() {
        return (
            <div>
                <ul>
                    <li>用户名:{this.props.username}</li>
                    <li>密码:***</li>
                    <li><button onClick={()=>{
                        this.props.history.push("/Alter");
                    }}>修改密码</button></li>
                </ul>
            </div>
        )
    }
}
const mapStateToProps = state =>({
    pwd:state.state.oldPwd,
    username:state.state.username
});

export default connect(mapStateToProps, afterHandler)(Main);