import { useNavigate } from "react-router-dom";
import React from "react";
import { IPropsEditPage } from "../EditPage";

interface IProps extends Omit<IPropsEditPage, 'setIsEdit'> {
    created: number;
}

export const Post = (props: IProps) => {
  const {created, content, id} = props;
  const navigate = useNavigate();

  const formatDate = (date: number) => {
    const d = new Date(date);
    const month = '' + (d.getMonth() + 1);
    const day = '' + d.getDate();
    const year = d.getFullYear();
    const hours = '' + d.getHours();
    const minutes = '' + d.getMinutes();

    const monthPadded = month.padStart(2, '0');
    const dayPadded = day.padStart(2, '0');
    const hoursPadded = hours.padStart(2, '0');
    const minutesPadded = minutes.padStart(2, '0');

    return `${dayPadded}.${monthPadded}.${year} ${hoursPadded}:${minutesPadded}`;
  }

  return (
    <div className='container' onClick={() => navigate(`/posts/${id}`)}>
      <div className='user-info'>
        <img src={'#'} alt={'фото'}/>
        <span>Имя Фамилия</span>
        <span>{formatDate(created)}</span>
      </div>
      <div>{content}</div>
    </div>
  );
}
