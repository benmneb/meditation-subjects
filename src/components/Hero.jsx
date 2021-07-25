import { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Fade, Hidden, Typography } from '@material-ui/core';

import heroImg from '../assets/hero.jpg';

const useStyles = makeStyles((theme) => ({
  header: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  },
  titleBox: {
    margin: theme.spacing(10),
    textAlign: 'center',
    zIndex: 1,
    color: '#fff',
    textShadow:
      '0px 2px 4px rgb(0 0 0 / 20%), 0px 3px 2px rgb(0 0 0 / 14%), 0px 1px 10px rgb(0 0 0 / 12%)',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    justifyContent: (props) => (props.isCentered ? 'center' : 'flex-start'),
    alignItems: (props) => (props.isCentered ? 'center' : 'stretch'),
    textAlign: (props) => (props.isCentered ? 'center' : 'left'),
    backgroundColor: theme.palette.secondary.main,
    opacity: 0.3,
    zIndex: 0,
  },
}));

export default function Hero(props) {
  const { fadeInDuration, imgAltText } = props;

  const styles = useStyles();

  const [offset, setOffset] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset]);

  function handleImageLoad() {
    setImageLoading(false);
  }

  return (
    <Box component="section" className={styles.header}>
      <Fade in={!imageLoading} timeout={fadeInDuration}>
        <img
          src={heroImg}
          alt={imgAltText}
          className={styles.image}
          style={{
            filter: `blur(${offset / 1000}rem)`,
            transform: `translateY(${offset * 0.5}px) scale(1.03)`,
          }}
          onLoad={handleImageLoad}
        />
      </Fade>
      <Box
        component="hgroup"
        className={styles.titleBox}
        style={{
          transform: `translateY(${offset * 0.55}px)`,
        }}
      >
        <Typography variant="h1">
          The Buddha's 40 Meditation Subjects
        </Typography>
        <Hidden xsDown>
          <Typography variant="h2">
            ...as taught in the Visuddhimagga
          </Typography>
        </Hidden>
      </Box>
      <Box className={styles.overlay} />
    </Box>
  );
}
