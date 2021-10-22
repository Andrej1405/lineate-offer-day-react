import colors from '../../utils/colors'

const styles = {
    blank: {
        width: '100%',
        borderRadius: '2rem',
        padding: '1.5rem',
    },

    content: {
        padding: 0,
        minHeight: '45px',
        '&:last-child': {
            padding: 0,
        },
    },

    title: {
        backgroundColor: colors.lightGray,
        marginBottom: '0.5rem',
        borderRadius: '2rem',
        minHeight: '20px',
        width: '100%',
    },

    body: {
        backgroundColor: colors.lightGray,
        borderRadius: '2rem',
        minHeight: '15px',
        width: '100%',
    },
}

export default styles
