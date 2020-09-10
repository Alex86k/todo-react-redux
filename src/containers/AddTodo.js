import React from 'react'
import {connect} from 'react-redux'
import {addTodo, showAlert} from '../actions'


const AddTodo = ({dispatch}) => {
    let input

    return (
        <div>
            <form className="form-group" onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    dispatch(showAlert('Введите название заметки', 'warning'))
                    return
                }
                try {
                    dispatch(addTodo(input.value))
                    dispatch(showAlert('Заметка успешно добавлена', 'success'))

                } catch (e) {
                    dispatch(showAlert('Что-то пошло не так', 'danger'))
                    console.log(e)
                }
                input.value = ''
            }}>
                <input type="text"
                       className="form-control"
                       placeholder="Введите название заметки"
                       ref={node => input = node}
                />
            </form>
        </div>
    )
}


export default connect()(AddTodo)
