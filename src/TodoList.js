import React  from 'react'
// import store from './store'
import { getInputChangeAion, getAddItemAction, getDeleteItemAction } from './store/actionCreators'
import { connect } from 'react-redux'


const TodoList = (props) => {
    const { inputValue, list, changeInputValue, handleClick, handleDelete } = props

        return (
            <div>
                <div>
                    <input 
                        value={inputValue}
                        onChange={changeInputValue}
                    />
                    <button onClick={handleClick}>提交</button>
                </div>
                <ul>
                    {
                        list.map((item, index) => {
                            return <li key={index} onClick={() => handleDelete(index)}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
}
// class TodoList extends Component {

//     // constructor(props) {
//     //     super(props)
//     //     this.handleInputChange = this.handleInputChange.bind(this)

//     // }

//     render() {

        
//     }
// }



const mapStateToProps = (state) =>{
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
//store.dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = getInputChangeAion(e.target.value)
            dispatch(action)
        },
        handleClick() {
            const action = getAddItemAction()
            dispatch(action)
        },
        handleDelete(index) {
            const action = getDeleteItemAction(index)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)