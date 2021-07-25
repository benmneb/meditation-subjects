import { Fragment } from 'react';

import {
  Box,
  Collapse,
  ListItem,
  ListItemText,
  List,
  Divider,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import {
  CloseRounded,
  ExpandLessRounded,
  ExpandMoreRounded,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux';

import ListContent from './ListContent';
import ListHeader from './ListHeader';

import { FormattedText } from '../utils';
import { preparatory } from '../data/';
import {
  chooseSubject,
  resetSubjectDrawerState,
  showSubjectDrawer,
  toggleExpandPrepDetails,
} from '../store';

const useStyles = makeStyles((theme) => ({
  appBar: {
    height: 120,
    top: 'auto',
    borderRadius: theme.spacing(2, 2, 0, 0),
    backgroundColor: (props) => props?.color,
  },
  toolbar: {
    height: '100%',
    textAlign: 'center',
    color: (props) =>
      props?.color && theme.palette.getContrastText(props?.color),
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  collapse: {
    margin: theme.spacing(2),
  },
  listItemRoot: {
    justifyContent: 'center',
  },
  listItemInner: {
    display: 'flex',
    alignItems: 'center',
    width: theme.mixins.subjectDrawerContents.maxWidth,
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },
  wrapperInner: {
    maxWidth: theme.mixins.subjectDrawerContents.maxWidth,
    padding: theme.spacing(1, 2),
  },
  buttonBaseRoot: {
    borderRadius: theme.shape.borderRadius,
  },
  noBefore: {
    '&::before': {
      backgroundColor: 'transparent',
    },
  },
  borderRadius: {
    borderRadius: theme.spacing(2, 2, 0, 0),
  },
}));

export default function SubjectDrawerContents(props) {
  const styles = useStyles(props);
  const dispatch = useDispatch();

  const subject = useSelector((state) => state.subject);
  const openPrepDetails = useSelector((state) => state.openPrepDetails);

  function handleCloseDrawer() {
    dispatch(showSubjectDrawer(false));
    dispatch(chooseSubject(null));
    dispatch(resetSubjectDrawerState());
  }

  return (
    <>
      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar disableGutters className={styles.toolbar}>
          <Typography variant="h4" component="h1" className={styles.title}>
            {subject?.longName}
            <Box component="span" fontStyle="italic">
              <Typography variant="body1">
                in {subject?.classification}
              </Typography>
            </Box>
          </Typography>
          <Tooltip title="Close" placement="left">
            <IconButton color="inherit" autoFocus onClick={handleCloseDrawer}>
              <CloseRounded />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Box minHeight={120} />
      <List component="section">
        <ListHeader
          number={1}
          primary="Preparatory Instructions"
          secondary="Applicable to all meditation subjects"
        />
        <ListContent number={1}>
          <FormattedText data={preparatory.inBrief} />
          <List>
            {preparatory.inDetail.map((subChap) => (
              <Fragment key={subChap.text}>
                <ListItem
                  button
                  onClick={() =>
                    dispatch(toggleExpandPrepDetails(subChap.text))
                  }
                  classes={{ root: styles.buttonBaseRoot }}
                >
                  <ListItemText
                    primary={subChap.text}
                    primaryTypographyProps={{
                      component: 'h3',
                      variant: 'body1',
                    }}
                  />
                  {openPrepDetails.includes(subChap.text) ? (
                    <ExpandLessRounded />
                  ) : (
                    <ExpandMoreRounded />
                  )}
                </ListItem>
                <Collapse in={openPrepDetails.includes(subChap.text)}>
                  <Box padding={2}>
                    <FormattedText data={subChap.data} color="textSecondary" />
                  </Box>
                </Collapse>
              </Fragment>
            ))}
          </List>
        </ListContent>
        <Divider />
        <ListHeader
          number={2}
          primary={`Instructions for ${subject?.longName}`}
          secondary="Specific to this meditation subject only"
        />
        <ListContent number={2}>
          {subject && <FormattedText data={subject.instructions} />}
        </ListContent>
        <Divider />
        <ListHeader
          number={3}
          primary="Supplementary Instructions"
          secondary="Applicable to all meditation subjects"
        />
        <ListContent number={3}>
          <Typography>collapse!!3</Typography>
        </ListContent>
      </List>
    </>
  );
}
