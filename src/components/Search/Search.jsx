import React, { useContext } from 'react'
import TextField from '@mui/material/TextField'
import Context from '../../context/context'
import styles from './styles'

const Search = () => {
    const { query, handleSearch } = useContext(Context)

    return (
        <TextField
            sx={styles}
            size="large"
            id="find-a-book"
            label="Type title of the book"
            variant="outlined"
            value={query}
            onChange={handleSearch}
        />
    )
}

export default Search
