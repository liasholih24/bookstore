import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import ProductSmokingHero from './modules/views/ProductSmokingHero';
import ProductHero from './modules/views/ProductHero';
//import ProductValues from './modules/views/ProductValues';
//import ProductHowItWorks from './modules/views/ProductHowItWorks';
import ProductCTA from './modules/views/ProductCTA';

function Index() {  

  return (
    <React.Fragment>
      <ProductHero />
      <ProductCTA />
      <ProductCategories />
      <ProductSmokingHero />
    </React.Fragment>
  );
}

export default withRoot(Index);
