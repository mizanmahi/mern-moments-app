import React, { useEffect, useState } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Form from '../Form/Form';
import Posts from '../Posts/Posts';

import { getPosts } from '../../actions/posts';

import useStyle from './styles';

const Home = () => {
  const classes = useStyle();
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.mainContainer}
          container
          justifyContent='space-around'
          alignItems='stretch'
          spacing={2}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>

          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
