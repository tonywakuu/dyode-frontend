import React from 'react';
import styles from '../Home.css';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import slideTileData from '../Home/data/tileData';

const style = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    overflow: 'auto',
    backgroundColor: theme.palette.background.paper,
    padding: '100px'
  },
  imageList: {
    flexWrap: 'nowrap',
    overflow: 'auto'
  },
  title: {
    color: '#fff',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

export default function Services() {
  const classes = style();
  
  return ( 
    <div className={styles.app}> 
      <div id='services' className='text-center'>
        <h1> New Arrivals</h1>
        <ImageList className={classes.imageList} rowHeight={525} gap={50} cols={3}>
          {slideTileData.map((item) => (
            <div>
              <ImageListItem key={item.img}>
                <img src={item.img} alt={item.title} />
                <ImageListItemBar
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                />
              </ImageListItem>
              <h2>{item.title}</h2>
              <h3>{item.desc}</h3>
              <p>{item.price}</p>
            </div>
          ))}
        </ImageList>
      </div>
    </div>
    );
  }
 
