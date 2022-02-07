import axios from 'axios';
import React from 'react';

export default function Paste() {
    const password = React.createRef();
    const text = React.createRef();
    const title = React.createRef();
    let checkPass = (event) => {
        event.preventDefault();
        axios.post("http://localhost:5000/paste", {
            pass: password.current.value
        }).then(res => {
            if (res.data === '') {
                text.current.value = '';
                password.current.value = '';
                title.current.value = 'it is wrong!!!';
            } else {
                title.current.value = res.data.Title;
                text.current.value = res.data.Body;
            }
        }, err => {
            console.log(`error: ${err}`);
        });
    }
    return (
        <form className='form-group'>
            <input type="password" placeholder='pass:' className='form-control' ref={password} />
            <input type="submit" onClick={checkPass} className='btn btn-success' />
            <input type="text" readOnly="readOnly" className='form-control' ref={title} />
            <textarea readOnly="readOnly" cols={10} rows={10} className='form-control' ref={text} ></textarea>
        </form>
    )
}
