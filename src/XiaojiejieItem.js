import React, { Component } from 'react';
class XiaojiejieItem  extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render() { 
        console.log('child render')
        return ( 
            <div onClick={this.handleClick}>
                {this.props.content} - {this.props.aname}
            </div>
         );
    }

    handleClick () {
        const {handleDeleteItemProp, index} = this.props;
        handleDeleteItemProp(index);
    }

    componentWillMount () {
        // console.log('componentWillMount---组件将要挂载到页面的时刻')
    }

    componentDidMount () {
        // console.log('componentDidMount---组件挂载完成的时刻执行')
    }

    shouldComponentUpdate (nextProps, nextState) {
        const isNeedUpdate = nextProps.content !== this.props.content
        // console.log('shouldComponentUpdate---组件发生改变执行')
        return isNeedUpdate
        // return true
    }

    componentWillUpdate () {
        // console.log('componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
    }

    componentDidUpdate () {
        // console.log('componentDidUpdate----组件更新之后执行')
    }

    // 组件第一次存在于dom中，函数不会执行
    componentWillReceiveProps () {
        // console.log(' child - componentWillReceiveProps ')
    }

    componentWillUnmount () {
        // console.log(' componentWillUnmount ')
    }

}
 
export default XiaojiejieItem;