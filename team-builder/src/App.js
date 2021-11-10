import React, { useState } from 'react';
import './App.css';
import Team from './components/Team';
import TeamForm from './components/TeamForm';


function App() {
    const [ teamList, setTeamList ] = useState([
        {
            id: '0',
            name: 'Jane Wangui',
            email: 'jannevick@gmail.com',
            role: 'The queen of all',

        },
        {
            id: '1',
            name: 'Hazel Njoki',
            email: 'princess101@gmail.com',
            role: 'the queen of memes',

        },
        {
            id: '2',
            name: 'Naomi Salau',
            email: 'massaiiprincess@gmail.com',
            role: 'The princess ',
        },
        {
            id: '3',
            name: 'Count Dracula',
            email: 'count.dracula@gmail.com',
            role: 'The unprofessional',
        }
    ]);

    const addNewMember = member => {
        const newMember = {
            id: Date.now(),
            name: member.name,
            email: member.email,
            role: member.role,

        };
        setTeamList([ ...teamList, newMember]);
    }

    const [memberToEdit, setMemberToEdit] = useState('');

    const addMemberToEdit = member => {
        setMemberToEdit(member);
    }

    const editMember = member => {
        let restOfList = teamList.filter(person => person.id !== member.id);
        restOfList.unshift(member);
        setTeamList(restOfList);
        setMemberToEdit('');

    }

    return (
        <div className="App">
            <div className="heading">
                <h1>Team Members!</h1>
            </div>

            <TeamForm addNewMember={addNewMember} memberToEdit={memberToEdit}
                            editMember={editMember}/>
            <Team teamMembers={teamList} addMemberToEdit={addMemberToEdit}/>
        </div>
    );
}

export default App; 