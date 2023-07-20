import React, {useCallback, useMemo, useState} from "react";

export default {
    title: "UseMemo Demo"
};

export const DifficultCountingExample = () => {
    const [a, setA] = useState(5);
    const [b, setB] = useState(5);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let temp = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 1000000000) fake++;
            temp *= i;
        }
        return temp;
    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>Result for a : {resultA}</div>
        <div>Result for b : {resultB}</div>
        <div></div>
    </>;
};

const UsersMap = (props: {
    users: Array<string>
}) => {
    console.log("Rendering Users Map");
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>

    );
};

const UsersMemo = React.memo(UsersMap);

export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo Rendering");
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Anton", "Valera", "Misha", "Denis",]);
    const filteredUsersArrayMemo = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1);
    }, [users]);

    const addUser = () => {
        const newUsers = [...users, "Sveta" + new Date().getTime()];
        setUsers(newUsers);
    };

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <UsersMemo users={filteredUsersArrayMemo}/>

    </>;
};

export const LikeUseCallback = () => {
    console.log("LikeUseCallback");
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(["JS", "React", "CSS", "HTML",]);

    const memoizedAddBook = useMemo( () => {
        return () => {
            console.log(books);
            const newBooks = [...books, "TS" + new Date().getTime()];
            setBooks(newBooks);
        };
    }, [books])

    const memoizedAddBook2 = useCallback( () => {
            console.log(books);
            const newBooks = [...books, "TS" + new Date().getTime()];
            setBooks(newBooks);
        }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>

        {counter}
        <BooksMemo addBook={memoizedAddBook2}/>

    </>;
};

type BooksMapParams = {
    addBook: () => void;
}

const BooksMap = (props: BooksMapParams) => {
    console.log("Rendering Books Map");
    return (
        <div>
            <button onClick={props.addBook}>add book</button>
        </div>

    );
};

const BooksMemo = React.memo(BooksMap);