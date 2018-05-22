import React from 'react'

import Sidebar from './Sidebar'
import NoteForm from './NoteForm'
import NoteList from './NoteList'

const Main = () => {
    return (
        <div className="Main">
            <Sidebar />
            <NoteList />
            <NoteForm />
        </div>
    )
}
export default Main