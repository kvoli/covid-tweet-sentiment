/*
COMP90024
Team 11
Marco Marasco - 834882
Austen McClernon - 834063
Sam Mei - 1105817
Cameron Wong - 1117840
*/

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { useSelector, useDispatch } from "react-redux";
import { openStatsDrawer } from "../actions";

import Suburb from "./Suburb";
import TweetDetails from "./TweetDetails";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  drawerPaper: {
    width: 470,
  },
});

export default function Sidebar(opened, selected) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector((store) => store.MapReducer);
  const toggleDrawer = (env) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    dispatch(openStatsDrawer(env));
  };

  const list = () => (
    <div
      className={classes.fullList}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      {state.selected ? (
        state.selected.geometry.type === "Point" ? (
          <div>
            <TweetDetails selected={state.selected} />
          </div>
        ) : (
          <div>
            <Suburb selected={state.selected} />
          </div>
        )
      ) : (
        ""
      )}
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor={"right"}
          open={state.drawerOpen}
          onClose={toggleDrawer(false)}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {list()}
        </Drawer>
      </React.Fragment>
      ))}
    </div>
  );
}
