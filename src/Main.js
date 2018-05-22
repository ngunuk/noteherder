import React from 'react'

import Sidebar from './Sidebar'
import NoteForm from './NoteForm'
import NoteList from './NoteList'

const Main = () => {
    return (
        <div className="Main">
            <Sidebar />
            <NoteForm />
            <NoteList />
        </div>
    )
}
export default Main