
import { db } from "../../firebase";
import { addDoc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, collection, doc } from "firebase/firestore";

import { useState } from "react";

//doc: Alice의 정보나열, collection: Alice,Bob 등의 유저 정보나열,table

const DB_TABLE_NAME = "toDo";
export default function Page(){
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState();

    const handleSetData = async () => {
        //const res = await addDoc(collection(db, DB_TABLE_NAME), {title: 'test', description: 'test1234'});
        //console.log(res);
        const res2 = await setDoc(doc(db, DB_TABLE_NAME, "1"),{title: 'test', description: 'test1234'});
        console.log(res2);
    }

    const handleGetData = async () => {
        /*const res = await getDoc(doc(db, DB_TABLE_NAME, "1"));
        const data = res.data();
        data.id = res.id;
        console.log(data); */

        const res2 = await getDocs(collection(db,DB_TABLE_NAME));
        const datas = res2.docs.map((el) => {
            return {
                id: el.id,
                ...el.data()
            };
        });
        console.log(datas);
    }
    
    const handleUpdateData = async () => {
        const res = await updateDoc(doc(db, DB_TABLE_NAME,"1"), {hi: "test3"});
        console.log(res);
    }

    const handleDeleteData = async () => {
        const res = await deleteDoc(doc(db, DB_TABLE_NAME, "1"));
        console.log(res);
    }

    const setTodo = () =>{
        addDoc(collection(db,DB_TABLE_NAME), {list: input, complete: false});
    }

    const getTodos = async () => {
        const res = await getDocs(collection(db,DB_TABLE_NAME));
        setTodos(res.docs.map((el) => {
            return {
                id: el.id,
                ...el.data()
            };
        }));
    }
    const UpdateToDo = async (id) => {
        const res = await updateDoc(doc(db, DB_TABLE_NAME,id), {complete: true});
        console.log(res);
    }

    const DeleteToDo = async (id) => {
        const res = await deleteDoc(doc(db, DB_TABLE_NAME, id));
        console.log(res);
    }

    return (
        <div>
            <p>
                <input placeholder="뭐할거임?" onChange={(e) => setInput(e.target.value)} />
                <button onClick={setTodo}>할일 추가</button>
            </p>
            <button onClick={getTodos}>할일 불러오기</button>
            {todos.map(el => <div>{el.list}<p>
                    <button onClick={() => {UpdateToDo(el.id)}}>완료</button>
                    <button onClick={() => {DeleteToDo(el.id)}}>삭제</button>
                </p></div>)}
        </div>
    );  
}