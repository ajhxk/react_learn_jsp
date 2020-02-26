import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'
import Boss2 from './Boss2'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class Xiaojiejie extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            // list: ['AA','BB']
            list: [],
        }
        this.handleInputCHange = this.handleInputCHange.bind(this)
        this.handleAddList = this.handleAddList.bind(this)
        this.handleDeleteItem = this.handleDeleteItem.bind(this)
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="jspang">加入服务:</label>
                    <input 
                        id="jspang" 
                        ref={ref => {this.input = ref}}
                        value={this.state.inputValue} 
                        onChange={this.handleInputCHange} />
                    <button onClick={this.handleAddList}>增加服务</button>
                </div>
                <ul ref={ref => {this.ul = ref}}>
                    <TransitionGroup>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <CSSTransition
                                        timeout={2000}
                                        classNames={"boss-text"}
                                        unmountOnExit
                                        appear={true}
                                        key={index+item}
                                    >
                                        <XiaojiejieItem
                                            content={item}
                                            handleDeleteItemProp={this.handleDeleteItem}
                                            key={index + item}
                                            index={index}               
                                        />
                                    </CSSTransition>
                                )
                            })
                        }
                    </TransitionGroup>
                </ul>
                <Boss/>
                <Boss2/>
            </Fragment>
        )
    }

    componentDidMount(){
        axios.get('https://www.studyinghome.com/mock/5e55bf642cb0d073b813a475/XJJ/xiaojiejie')
            .then((res)=>{
                console.log('axios 获取数据成功:'+JSON.stringify(res))  
                this.setState({
                    list: res.data.data
                })
            })
            .catch((error)=>{
                console.log('axios 获取数据失败'+error)
                this.setState({
                    list: ['AA-err', 'BB-err']
                })
            })
    }

    handleInputCHange() {
        this.setState({
            inputValue: this.input.value
        })
    }

    handleAddList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }, () => console.log(this.ul.querySelectorAll('div').length));
        // console.log(this.ul.querySelectorAll('div').length)
    }

    handleDeleteItem(index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

XiaojiejieItem.propTypes = {
    content: PropTypes.string,
    handleDeleteItemProp: PropTypes.func,
    index: PropTypes.number,
    aname: PropTypes.string.isRequired
}

XiaojiejieItem.defaultProps = {
    aname: 'qwer'
}

export default Xiaojiejie
