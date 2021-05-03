import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'useMemo',
}

export const DifficultCounting = () => {
    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(5);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for(let i = 1; i <= a; i++) {
            let fake = 0;
            while(fake < 1000000000){
                fake++;
                const fakeValue = Math.random;
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA;
    }, [a])



    for(let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}


const UsersSecret = (props: {users: string[]}) => {
    console.log('USERS-SECRET');
    return (
        <ul>
            {props.users.map((u, i) => <li style={{listStyle: 'none'}} key={i}>{u}</li>)}
        </ul>
    )
}

const Users = React.memo(UsersSecret);


export const HelpsReactMemo = () => {
    console.log('HelpsReactMemo')
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Artem', 'Dima', 'Vitya','Nick'])

    const newArray = useMemo(() => {
        const newUsers = users.filter(u => u.toLowerCase().indexOf('a') >= -1);
        return newUsers
    }, [users]);

    const addUser = () => {
        const newUsers = [...users, 'Alex' + new Date().getTime() ]
        setUsers(newUsers);
    }

    return(
        <>
            <button onClick={() => setCounter(counter+1)}>+</button>
            <button onClick={() => addUser()}>add User</button>
            {counter}
            <Users users={newArray}/>
        </>
    )
}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'JS', 'CSS','HTML'])

    const newArray = useMemo(() => {
        const newBooks = books.filter(b => b.toLowerCase().indexOf('a') >= -1);
        return newBooks
    }, [books]);

    // const memoizedAddBook = useMemo(() => {
    //     return () => {
    //         const newBooks = [...books, 'Angular' + new Date().getTime() ]
    //         setBooks(newBooks);
    //     }
    // }, [books])

    const memoizedAddBook2 = useCallback(() => {
        const newBooks = [...books, 'Angular' + new Date().getTime() ]
        setBooks(newBooks);
    },[books])

    return(
        <>
            <button onClick={() => setCounter(counter+1)}>+</button>

            {counter}
            <Book books={newArray} addBook={memoizedAddBook2}/>
        </>
    )
}

type BookSecretPropsType = {
    books: string[]
    addBook: () => void
}

const BooksSecret = (props: BookSecretPropsType) => {
    console.log('BooksSecret');
    return (
        <>
            <button onClick={() => props.addBook()}>add Books</button>
        <ul>
            {props.books.map((book, i) => <li style={{listStyle: 'none'}} key={i}>{book}</li>)}
        </ul>
            </>
    )
}

const Book = React.memo(BooksSecret);