import './Alter.css';
import React, { Component } from 'react'
import {afterHandler} from '../../action/anction'
import {connect} from 'react-redux'
class Alter extends Component{
    constructor(props) {
        super(props)
        this.state={
            old:'',
            old2:'',
            new1:'',
            new2:''
        }
    }
    componentDidMount() {
        this.setState({
            old:this.props.pwd
        });
    }

    render(){
        return(
            <div>
                <ul>
                    <li>请输入旧密码:<input type='text' id="ip1" onChange={(e)=>{
                        this.setState({
                            old2:e.target.value
                        })
                    }}/></li>
                    <li>请输入新密码:<input type='text' id="ip2" value={this.state.new1} onChange={(e)=>{
                        this.setState({
                            new1:e.target.value
                        })
                    }}/></li>
                    <li>请再次输入新密码:<input type='text' id="ip3" value={this.state.new2} onChange={(e)=>{
                        this.setState({
                            new2:e.target.value
                        })
                    }} onBlur={()=>{
                        if(this.state.new1!==this.state.new2){
                            alert('两次密码不一样,请重新输入!')
                            this.setState({new1:'',new2:''})
                        }
                    }}/></li>
                    <li><button onClick={()=>{
                        if(this.state.new1===this.state.new1){
                            if(this.state.old===this.state.old2){
                                this.props.history.push('/')
                                alert('密码修改成功!')
                                this.props.alter(this.state.new1)
                            }else{
                                alert('旧密码错误!')
                            }
                        }
                    }}>确认</button></li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    pwd:state.state.oldPwd,
    username:state.state.username
});


// export default connect(mapStateToProps, afterHandler)(Alter);

export default connect(mapStateToProps, afterHandler)(Alter);