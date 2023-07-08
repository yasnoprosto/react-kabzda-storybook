import React from "react";
import {useState} from "react";
import {log} from "util";

export default {
    title: "React.memo demo"
};


const NewMessagesCounter = (props: any) => {
    console.log("Counter");
    return <div>{props.count}</div>;
};

const Users = (props: { users: Array<any> }) => {
    console.log("Users");
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>;
};

const UsersMemo = React.memo(Users);
const NewMessageCounterMemo = React.memo(NewMessagesCounter);

export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Den", "Tim", "Max"]);

    const adduser = () => {
        setUsers([...users, "Dima"]);
    };

    return <>
        <button onClick={() => {
            setCounter(counter + 1);
        }}>increase
        </button>
        <button onClick={() => {
            adduser();
        }}>add user
        </button>
        <NewMessageCounterMemo count={counter}/>
        <UsersMemo users={users}/>
    </>;
};