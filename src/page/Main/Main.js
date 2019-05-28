import './Main.css';
import React, { Component } from 'react'
import {weatherAction} from '../../action/weatherAction'
import {connect} from 'react-redux'

class Main extends Component {
    componentDidMount() {
        this.props.getWeather()
    }
    render() {
        return (
            <div>
                <ul>
                    <li>天气:{this.props.weathertext}<img src={this.props.imgUrl} alt=''/></li>
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
    pwd:state.user.oldPwd,
    username:state.user.username,
    imgUrl:state.weather.imgUrl,
    weathertext:state.weather.weathertext
});


export default connect(mapStateToProps, weatherAction)(Main);