import React, { useState } from "react";

export interface IPropsEditPage {
  content: string,
  id: number,
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>,
}

export const EditPage = (props: IPropsEditPage) => {
  const {content, id, setIsEdit} = props;
  const [newContent, setNewContent] = useState(content);

  const saveItem = async (id: number) => {
    let response = await fetch(`http://localhost:7070/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ content: newContent })
    });

    if (response.ok) {
      setIsEdit(false);
    }
  };

  return (
    <div>
      <div>
        <span>Редактировать публикацию</span>
        <button onClick={() => setIsEdit(false)}>x</button>
      </div>
      <div>
        <img src={'#'} alt={'фото'} />
        <input type="text" value={newContent} onChange={(e) => setNewContent(e.target.value)}/>
      </div>
      <button onClick={() => saveItem(id)}>Сохранить</button>
    </div>
  );
}
