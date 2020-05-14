import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { extractTotalTweets } from '../helpers';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Card, ListItem, ListItemAvatar, Avatar, ListItemText, List } from '@material-ui/core';

import MaterialTable from 'material-table';
import { Container } from '@material-ui/core';
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

  const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: theme.typography.fontWeightRegular,
    },
    heading1: {
        fontSize: theme.typography.pxToRem(25),
        fontWeight: theme.typography.fontWeightBold,
    },
    pad: {
        padding: theme.spacing(3),
    },
}));


const Statistics = () => {
    const dispatch = useDispatch();
    const state = useSelector(store => store.MapReducer);
    const classes = useStyles();

    

    return (
        <Container maxWidth="lg">
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
            spacing={6}
            className={classes.pad}
        >
            <Grid item>
                <Typography align='center' className={classes.heading1}> Statistics </Typography>
            </Grid>
            <Grid item>
                <MaterialTable 
                icons={tableIcons}
                title="Suburb Level Statistics"
                columns={[
                    {title: "Suburb", field: "suburb"},
                    {title: "Count", field: "count", defaultSort: "desc"},
                    {title: "Pre-Covid19 Sentiment", field: "pre_sentiment"},
                    {title: "Covid19 Sentiment", field: "post_sentiment"},
                    {title: "Delta", field: "change"},
                ]}
                data={state.areaData}
                />
            </Grid>
        </Grid>
        </Container>
    )


}

export default Statistics;