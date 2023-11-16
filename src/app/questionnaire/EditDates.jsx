import React, { forwardRef, useState } from 'react'
import styles from "./styles/EditDates.module.css";
import EditText from '@/components/EditText/EditText';
import OnClick from '@/components/OnClick/OnClick';
import Font from '@/components/Font/Font';
import { FormProvider, useForm } from 'react-hook-form';
import DeleteIcon from '@mui/icons-material/Delete';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ja from "date-fns/locale/ja"

registerLocale("ja", ja)

const EditDates = (props) => {
    const { 
        dates,
        setDates, 
    } = props;
    const days = ["日", "月", "火", "水", "木", "金", "土"];
    const methods = useForm();
    const onSubmit = (data) => {
        methods.reset();
        if(!dates){
            setDates([["", data.registerDate]]);
            return;
        }
        setDates([...dates, ["", data.registerDate]]);
    }
    const addDate = (data) => {
        const newDate = new Date(data[0]);
        const month = newDate.getMonth() + 1;
        const date = newDate.getDate();
        const day = days[newDate.getDay()];
        const dateString = month + "/" + date + "(" + day + ")";
        if(!dates){
            setDates([["", dateString]]);
            return;
        }
        setDates([...dates, ["", dateString]]);
    }
    const [dragIndex, setDragIndex] = useState(null);
    const dragStart = (index) => {
        setDragIndex(index);
    };
    const dragEnter = (index) => {
        if(index === dragIndex){
            return
        }
        setDates((prevState) => {
            let newDates = JSON.parse(JSON.stringify(prevState));
            const deleteElement = newDates.splice(dragIndex, 1)[0];
            newDates.splice(index, 0, deleteElement);
            return newDates;
        });
        setDragIndex(index);
    }
    const dragEnd = () => {
        setDragIndex(null);
    }
    const editDate = (e, index) => {
        const newDate = e.currentTarget.value;
        setDates((prevState) => {
            let newDates = JSON.parse(JSON.stringify(prevState));
            newDates[index][1] = newDate;
            return newDates;
        });
    }
    const deleteDate = (index) => {
        setDates((prevState) => {
            let newDates = JSON.parse(JSON.stringify(prevState));
            newDates.splice(index, 1);
            return newDates;
        });
    }
    const MyConteiner = ({className, children }) => {
        return (
        <div className={`${styles.date_picker} ${className}`}>
            {children}
        </div>
        )
    }

    return (
        <div className={ styles.frame }>
            <div className={ styles.add_schedule }>
                <div>
                    <Font>カレンダーから追加</Font>
                    <div className={ styles.calender }>
                        <DatePicker
                            onChange={(data) => addDate(data)}
                            locale="ja"
                            selectsRange
                            calendarContainer={ MyConteiner }
                            inline
                        />
                    </div>
                </div>
                <FormProvider { ...methods }>
                    <div>
                        <Font>記入して追加</Font>
                        <form
                            onSubmit={ methods.handleSubmit(onSubmit) } 
                            className={ styles.register_date }>
                            <div className={ styles.edit_text }>
                                <EditText
                                    name="registerDate"
                                    maxLength="50"
                                />
                            </div>
                            <div className={`${ styles.submit } ${ "button" }`}>
                                <OnClick type="submit">
                                    <Font style="button">追加</Font>
                                </OnClick>
                            </div>
                        </form>
                    </div>
                </FormProvider>
            </div>
            {dates?
            <>
                <Font>日程の編集(ドラッグアンドドロップで順番変更)</Font>
                <ul className={ styles.list }>
                    {dates.map((date, index) => (
                        <li
                            key={ index }
                            draggable={ true }
                            onDragStart={ () => dragStart(index) }
                            onDragEnter={ () => dragEnter(index) }
                            onDragOver={ (e) => e.preventDefault() }
                            onDragEnd={ dragEnd }
                            className={`${ styles.element } ${ index === dragIndex? styles.dragging :""  }`}
                            >
                            {date[0]?
                                <div className={ styles.has_id }>
                                    <Font>{ date[1] }</Font>
                                </div>
                            :
                                <input 
                                    type="text" 
                                    defaultValue={ date[1] } 
                                    key={ date[1] } 
                                    className={ styles.edit }
                                    onBlur={ (e) => editDate(e, index)}
                                />
                            }
                            <div className={ styles.delete }>
                                <OnClick func={ () => deleteDate(index) }>
                                    <DeleteIcon sx={{typography:{ fontSize: '2rem' }}}/>
                                </OnClick>
                            </div>
                        </li>
                    ))}
                </ul>
            </>
            :""}
        </div>
    )
}

export default EditDates