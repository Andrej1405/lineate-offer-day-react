import React, { useRef, useEffect, useContext } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import BookCard from '../BookCard/BookCard'
import BlankCard from '../BlankCard/BlankCard'
import Container from '@mui/material/Container'
import Search from '../Search/Search'
import Context from '../../context/context'
import styles from './styles'

const HomePage = () => {
    const { count, books, handleClick, offline, loading } = useContext(Context)
    const lastBook = useRef()
    const observerBooks = useRef()
    const boxBooks = useRef()
    const listBooks = useRef()
    const { list, listItem, blankListItem, container, total } = styles

    useEffect(() => {
        if (count && count > 10 && count !== books.length) {
            observerBooks.current = new IntersectionObserver(entries =>
                entries[0].isIntersecting ? handleClick() : null
            )

            observerBooks.current.observe(lastBook.current)
        }

        if (count && count > 10 && count === books.length) {
            boxBooks.current.style.height = listBooks.current.clientHeight
        }
    }, [count, books])

    return (
        <Container sx={container} maxWidth="lg">
            {!offline && <Search />}
            {count > 0 && (
                <Typography variant="h5" component="h5" sx={total}>
                    Total books found: {count}
                </Typography>
            )}
            <Box ref={boxBooks} sx={{ height: count * 150 }}>
                {count > 10 ? (
                    <List ref={listBooks} sx={list}>
                        {books.map((book, index) => {
                            const { title, author } = book

                            return (
                                <ListItem key={`${title}-${author}-${index}`} sx={listItem}>
                                    {books.length - 1 === index && books.length !== count && <div ref={lastBook} />}
                                    <BookCard author={author} title={title} />
                                </ListItem>
                            )
                        })}

                        {loading &&
                            new Array(count - books.length >= 10 ? 10 : count - books.length)
                                .fill(null)
                                .map((_, index) => (
                                    <ListItem key={index} sx={blankListItem}>
                                        <BlankCard />
                                    </ListItem>
                                ))}
                    </List>
                ) : (
                    <List sx={list}>
                        {books.map((book, index) => {
                            const { title, author } = book

                            return (
                                <ListItem key={`${title}-${author}-${index}`} sx={listItem}>
                                    <BookCard author={author} title={title} />
                                </ListItem>
                            )
                        })}
                    </List>
                )}
            </Box>
        </Container>
    )
}

export default HomePage
