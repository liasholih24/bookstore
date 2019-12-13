import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = theme => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url:
        'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/12/30/211441/211441_fbb3a2c0-7a8a-40e5-8436-7f6263c9bb4f_663_663.jpg',
      title: 'Sejarah',
      width: '40%',
    },
    {
      url:
        'https://s4.bukalapak.com/img/9675215552/w-1000/BUKU_ILMU_PENGETAHUAN_DAN_PERILAKU_MANUSIA___B_F_SKINNER_wr.jpg',
      title: 'Ilmu Pengetahuan',
      width: '40%',
    },
    {
      url:
        'https://www.gramedia.com/blog/content/images/2019/07/batch_9786025710438.jpg',
      title: 'Persiapan CPNS',
      width: '20%',
    },
    {
      url:
        'https://ebooks.gramedia.com/ebook-covers/47864/thumb_image_normal/ID_BDBS2019MTH06BDBS.jpg',
      title: 'Science Fiction',
      width: '38%',
    },
    {
      url:
        'https://image.isu.pub/190219021744-32473afd0d0c2cdc51e8b540d124ca81/jpg/page_1_thumb_large.jpg',
      title: 'Ekonomi',
      width: '38%',
    },
    {
      url:
        'http://www.rajagrafindo.co.id/wp-content/uploads/2018/03/FILSAFAT-ILMU-2015-flatten.png',
      title: 'Filsafat',
      width: '24%',
    },
    {
      url:
        'https://www.jakartanotebook.com/images/products/72/1020/42588/12/lemonbest-kotak-buku-novel-colorful-safety-box-hidden-storage-dhz001-pink-1.jpg',
      title: 'Novel',
      width: '40%',
    },
    {
      url:
        'https://cdn.carro.co/jualo/original/1444309/buku-komik-edukasi-da-buku-novel-dan-komik-1444309.jpg',
      title: 'Komik',
      width: '20%',
    },
    {
      url:
        'https://id-test-11.slatic.net/original/ab4f6551ae6f424e4ef6b0d154bfc65d.jpg',
      title: 'Hukum',
      width: '40%',
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Koleksi buku berdasarkan kategori
      </Typography>
      <div className={classes.images}>
        {images.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
