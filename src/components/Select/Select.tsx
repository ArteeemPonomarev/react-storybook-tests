import React, {useState} from 'react';
import styles from './Select.module.css';

export type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}


const Select: React.FC<SelectPropsType> = (props) => {
    const [selectMode, setSelectMode] = useState<boolean>(false);
    const [currentTitle, setCurrentTitle] = useState<string>('')

    return (
        <div className={styles.wrapper}>
            <div className={styles.select} onClick={() => setSelectMode(true)} onBlur={() => setSelectMode(false)}>
                <div>{currentTitle}</div>
                <div className={styles.angleBlock}>
                    <div className={styles.angle} onClick={() => setSelectMode(true)}></div>
                </div>

            </div>
            {selectMode &&
            <div className={styles.options}>
                <div onClick={() => {
                    setCurrentTitle('');
                    setSelectMode(false)}}>None</div>
                {props.items.map(i => {
                        return (
                            <div className={styles.option}
                                 onClick={() => {
                                setCurrentTitle(i.title);
                                setSelectMode(false)}}>
                                {i.title}
                            </div>)
                    }
                )}
            </div>}
        </div>
    )
}

export default Select;