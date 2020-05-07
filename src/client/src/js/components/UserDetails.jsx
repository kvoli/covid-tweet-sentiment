import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import ReactStoreIndicator from 'react-score-indicator'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    pad1: {
        padding: theme.spacing(2),
    },
    heading: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: theme.spacing(2)
    },
    heading1: {
        fontSize: theme.typography.pxToRem(25),
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: theme.spacing(2)
    },
    pad2: {
        padding: theme.spacing(2),
    },
    spinner: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

const UserDetails = () => {
    const classes = useStyles();
    // const [loadingTweet, setLoadingTweet] = useState(true);
    // const [loadingSentiment, setLoadingSentiment] = useState(true);
    // const [renderUser, setRenderUser] = useState(false);
    // const twitter = <TwitterTweetEmbed tweetId={selected.properties.tweetId} options={{ width: 400 }} />

    // const loadTweet = () => {
    //     setTimeout(() =>
    //         setLoadingTweet(false), 2000)
    //     return null
    // }
    // const loadSentiment = () => {
    //     setTimeout(() =>
    //         setLoadingSentiment(false), 3000)
    //     return null
    // }
    return (<div><Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        spacing={6}
        className={classes.pad2}
    >
        <Grid item className={classes.pad1}>
            <Typography align='center' className={classes.heading1}>User Data</Typography>

        </Grid>
        <Grid item className={classes.pad1}>
            <Typography align='center' className={classes.heading}>Sentiment Average</Typography>

        </Grid>

    </Grid>


    </div>)
}


export default UserDetails;