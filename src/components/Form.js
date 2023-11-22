import React from 'react';

export default function Form(handleSubmit, value, setValue){
    const handleChange = (e) => {
        console.log(e.target.value)
        setValue(e.target.value)
    }

    return(
        <div>
            <form style={{display : "flex"}} onSubmit={handleSubmit}>
                <input type="text"
                       name="value"
                       style={{flex:"10",padding:"5px"}}
                       placeholder="해야할 일을 입력해 주세요"
                       value={value}
                       onChange={handleChange}
                />
                <input
                    type="submit"
                    value="입력"
                    className="btn"
                    style={{flex:'1'}}
                />
            </form>
        </div>
    )
}