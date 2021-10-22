import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import styles from './styles'

const BlankCard = () => (
    <Card sx={styles.blank}>
        <CardContent sx={styles.content}>
            <Typography variant="h5" component="div" sx={styles.title}></Typography>
            <Typography variant="body2" sx={styles.body}></Typography>
        </CardContent>
    </Card>
)

export default BlankCard
