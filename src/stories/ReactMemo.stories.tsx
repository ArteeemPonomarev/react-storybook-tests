import React, {useState} from 'react';

export default {
    title: 'React.memo demo'
}

const UsersSecret = (props: {users: string[]}) => {
    console.log('USERS');
    return (
        <ul>
            {props.users.map((u, i) => <li style={{listStyle: 'none'}} key={i}>{u}</li>)}
        </ul>
    )
}

const Users = React.memo(UsersSecret);


const CounterSecret = (props: {count: number}) => {
    console.log('counter')
    return (
        <div>
            {props.count}
        </div>
    )
}
const Counter = React.memo(CounterSecret)


export const Example = () => {
    console.log('Example')
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Artem', 'Dima', 'Vitya'])

    const addUser = () => {
        const newUsers = [...users, 'Alex' + new Date().getTime() ]
        setUsers(newUsers);
    }

    return(
        <>
            <button onClick={() => setCounter(counter+1)}>+</button>
            <button onClick={addUser}>add user</button>
            <Counter count={counter}/>
            <Users users={users}/>
        </>
    )
}