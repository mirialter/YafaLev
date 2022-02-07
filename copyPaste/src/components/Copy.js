import React from "react";

export default function Copy(props) {
    let saved = (event) => {
        event.preventDefault();
        props.setForm({
            title: title.current.value,
            text: text.current.value,
            password: password.current.value,
        });
        props.setSendData(true);
    }
    const title = React.createRef();
    const text = React.createRef();
    const password = React.createRef();
    return (
        <form className='form-group'>
            <input type="text" placeholder='title' className='form-control' ref={title} />
            <textarea placeholder="text" cols={10} rows={10} className='form-control' ref={text} ></textarea>
            <input required type="password" placeholder='pass:' className='form-control' ref={password} />
            <input type="submit" onClick={saved} className='btn btn-success' />
        </form>
    )
}
