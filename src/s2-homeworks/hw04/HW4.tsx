import React from 'react'
import s3 from './H4.module.css'
import Stand from './Stand'

/*
* 1 - понять (и простить) SuperInputText
* 2 - в зависимости от типа и дизэйбла прицепить нужный класс в SuperButton.tsx (строка 21)
* 3 - дописать onChangeCallback в SuperCheckbox.tsx чтоб оба чекбокса работали на стенде
* 4 - сделать стили в соответствии с дизайном
* */

const HW4 = () => {
    return (
        <div id={'hw4'}>
            <div className={s3.hwTitle}>Hometask №4</div>
            {/*демонстрация возможностей компонент:*/}
            <div className={s3.hw}>
                <Stand />
            </div>
        </div>
    )
}

export default HW4
