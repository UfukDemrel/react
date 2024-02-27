import React, { useState } from 'react'

function Editor() {

    const [text, setText] = useState('');
    const [before, setBefore] = useState('');

    const handleSelect = () => {
        const data = window.getSelection().toString();
        setText(data);
        setBefore(data);
    }

    const one = () => {
        const spantext = document.createElement('span');
        spantext.innerHTML = text;
        spantext.style.fontSize = '30px';
        console.log(spantext);
        document.getSelection().getRangeAt(0).deleteContents();
        document.getSelection().getRangeAt(0).insertNode(spantext);
    }

    const clear = () => {
        setText("");
        document.getSelection().getRangeAt(0).deleteContents();
        document.getSelection().getRangeAt(0).insertNode(document.createTextNode(before));
    }

    return (
        <div className='p-3'>
            <div onMouseUp={handleSelect}>
                <div className='flex'>
                    <button disabled={!text} className='border-2 flex items-center justify-center w-14 rounded-md border-slate-500 mr-3' onClick={clear}>Clear</button>
                    <button className='border-2 flex items-center justify-center w-14 rounded-md border-slate-500' onClick={one}>h1</button>
                </div>
                <p>Lorem Ipsum, kısaca Lipsum, masaüstü yayıncılık ve basın yayın sektöründe kullanılan taklit yazı bloğu olarak tanımlanır.</p>
            </div>
        </div>
    )
}

export default Editor
