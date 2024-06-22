import React from 'react'

function ToDoList(props) {
    return (
        <>
            <li className='list-item'>
                {props.item}
                <span className='icons'><i class="fa-solid fa-trash-can icon-delete" onClick={e => {
                    props.deleteItem(props.index)
                }}></i>
                </span>
            </li>
            <hr />
        </>
    )
}

export default ToDoList
