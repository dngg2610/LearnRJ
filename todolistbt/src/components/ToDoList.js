import React, { useEffect, useState } from 'react'


export const Todo = () => {

    const [listToDo, setListToDo] = useState([]);
    const [itemToDo, setItemToDo] = useState({ id: '', name: '', status: false });

    const submit = (e) => {
        e.preventDefault();
        if (itemToDo.name == '') {
            alert("khong hop le")
        } else {
            setListToDo([{ ...itemToDo, id: Math.floor(Math.random() * 1000) }, ...listToDo]);
        }
        setItemToDo({ id: '', name: '', status: false })
    }

    const xoa = (ID) => {
        let listToDoAfterDelete = listToDo.filter(item => item.id !== ID);
        setListToDo(listToDoAfterDelete);
    }

    const change = (itemTodo) => {
        let index = listToDo.findIndex(item => item.id === itemTodo.id)
        const updateToDo = [...listToDo];
        updateToDo[index].status = !updateToDo[index].status;
        setListToDo(updateToDo);
        console.log(updateToDo[index].status);
    }

    return (
        <div className="mx-auto">
            <div className="bg-danger px-5 py-3 rounded-top">
                <h2 className="text-center text-white my-4">Công Việc Cần Làm</h2>
                <form onSubmit={submit}>
                    <div className="mb-3 row">
                        <div className="col-9">
                            <input type="text" className="form-control" placeholder="Type here..."
                                value={itemToDo.name} onChange={(e) => setItemToDo({ ...itemToDo, name: e.target.value })}
                            />
                        </div>

                        <div className="col-3">
                            <button type="submit" className='btn btn-light w-100'>Thêm</button>
                        </div>
                    </div>
                </form>
            </div>

            <ul className="list-group">
                {
                    listToDo.filter((todo) => !todo.status)
                        .map((todo) => (
                            <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <span></span>
                                <span style={{ fontSize: '18px' }}> {todo.name} </span>
                                <div>
                                    <button className="btn border border-success mx-3" onClick={() => change(todo)}>Hoàn thành</button>
                                    <button className="btn border border-danger" onClick={() => xoa(todo.id)}>Loại bỏ công việc</button>
                                </div>
                            </li>
                        ))
                }
                {
                    listToDo.filter((todo) => todo.status)
                        .map((todo) => (
                            <li key={todo.id} className="bg-secondary text-white list-group-item d-flex justify-content-between align-items-center">
                                <span></span>
                                <strike style={{ fontSize: '18px' }}> {todo.name} </strike>
                                <div>
                                    <button className="btn border border-warning text-white mx-3" onClick={() => change(todo)}>Hoàn tác</button>
                                    <button className="btn border border-danger text-white" onClick={() => xoa(todo.id)}>Loại bỏ công việc</button>
                                </div>
                            </li>
                        ))
                }
            </ul>
        </div>
    )
}