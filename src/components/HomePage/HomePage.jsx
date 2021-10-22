import React, { useRef, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import styles from './styles'
import ListItem from '@mui/material/ListItem'
import BookCard from '../BookCard/BookCard'
import Container from '@mui/material/Container'
import Search from '../Search/Search'

const HomePage = ({ query, count, handleSearch, books, hasMore, loading, handleClick, offline }) => {
    const { list, listItem, container, total } = styles
    const lastBook = useRef()
    const observerBooks = useRef()

    useEffect(() => {
        if (observerBooks.current) observerBooks.current.disconnect()
        if (count && count > 10) {
            const observe = entries => (entries[0].isIntersecting ? handleClick() : null)

            observerBooks.current = new IntersectionObserver(observe)
            observerBooks.current.observe(lastBook.current)
        }
    }, [count, books])

    return (
        <Container sx={container} maxWidth="lg">
            {!offline && <Search query={query} handleSearch={handleSearch} />}
            {count > 0 && (
                <Typography variant="h5" component="h5" sx={total}>
                    Total books found: {count}
                </Typography>
            )}
            <Box>
                <List sx={list}>
                    {count > 10
                        ? books.map((book, index) => {
                              const { title, author } = book

                              return (
                                  <ListItem key={`${title}-${author}-${index}`} sx={listItem}>
                                      {books.length - 1 === index && <div ref={lastBook}></div>}
                                      <BookCard author={author} title={title} />
                                  </ListItem>
                              )
                          })
                        : books.map((book, index) => {
                              const { title, author } = book

                              return (
                                  <ListItem key={`${title}-${author}-${index}`} sx={listItem}>
                                      <BookCard author={author} title={title} />
                                  </ListItem>
                              )
                          })}
                </List>
            </Box>
        </Container>
    )
}

export default HomePage
