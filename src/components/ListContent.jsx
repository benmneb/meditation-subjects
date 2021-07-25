import { Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  wrapperInner: {
    maxWidth: theme.mixins.subjectDrawerContents.maxWidth,
    padding: theme.spacing(1, 2),
  },
}));

export default function ListContent(props) {
  const { number, children } = props;

  const styles = useStyles(props);

  const openSections = useSelector((state) => state.openSections);

  return (
    <Collapse
      in={openSections.includes(number)}
      timeout="auto"
      component="article"
      classes={{ wrapper: styles.wrapper, wrapperInner: styles.wrapperInner }}
    >
      {children}
    </Collapse>
  );
}
