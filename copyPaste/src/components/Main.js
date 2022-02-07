import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Copy from './Copy';
import Paste from './Paste';

export default function Main() {
    const [sendData, setSendData] = useState(false)
    const [getFlags, setFlags] = useState({
        copy: false,
        paste: false
    });
    const [getForm, setForm] = useState({
        title: '',
        text: '',
        password: ''
    });
    useEffect(() => {
        if (sendData === true && getForm.password !== null && getForm.password !== '' && getForm.password !== undefined) {
            axios.post("http://localhost:5000/copy", {
                data: getForm
            }).then(res => {
                setForm({
                    title: '',
                    text: '',
                    password: ''
                });
                setSendData(false);
            }, err => {
                console.log(`error: ${err}`);
            });
        }
    }, [sendData])
    return (
        <>
            <header>
                <input
                    type="button" 
                    className='btn btn-success' 
                    id="copy" 
                    value="copy" 
                    onClick={() => setFlags({ copy: true, paste: false })}
                />
                <input 
                    type="button" 
                    className='btn btn-success' 
                    id="paste" 
                    value="paste" 
                    onClick={() => setFlags({ copy: false, paste: true })}
                />
            </header>
            <div>
                {
                    getFlags.copy && (<Copy setForm={setForm} setSendData={setSendData} />)
                }
                {
                    getFlags.paste && (<Paste />)
                }
            </div>
        </>
    )
}