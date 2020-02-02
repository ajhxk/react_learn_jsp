import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import XiaojiejieItem from './XiaojiejieItem'

class Xiaojiejie extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: [
                'AA',
                'BB'
            ]
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
                    <input id="jspang" value={this.state.inputValue} onChange={this.handleInputCHange} />
                    <button onClick={this.handleAddList}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <XiaojiejieItem
                                    content={item}
                                    handleDeleteItemProp={this.handleDeleteItem}
                                    key={index + item}
                                    index={index}
                                    aname='aa'
                                />

                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    handleInputCHange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleAddList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
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

// XiaojiejieItem.de

export default Xiaojiejie
