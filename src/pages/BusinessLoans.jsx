import React from 'react';
import { useLocation } from 'react-router-dom';
<<<<<<< HEAD
import { BusinessLoansFeatureData } from '../Data';
=======
import { businessLoans, partnerFeatureData } from '../Data';
>>>>>>> 0acbb6c2778e2bef78b3f68fa2ba01023412816f
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Banner from '../components/banner/Banner';
import Blogs from '../components/blogs/Blogs';
import BringingExperience from '../components/bringingExperience/BringingExperience';
import CommonFeature from '../components/commonFeature/CommonFeature';
import GreatCustomers from '../components/greatCustomers/GreatCustomers';
import GrowSave from '../components/growandsave/GrowSave';
import BannerImg from '/assets/img/bl-banner-img.png';

const BusinessLoans = () => {

  const location = useLocation();

  const routeName = location.pathname.substring(1)

  const bannerDesc = (
    <span>
      Join a community of partners and help ambitious businesses get the next generation of finance products —from cards and loans to payments and foreign exchange accounts.
    </span>
  );

  return (
    <div>
      <Banner
        BannerTitle={"Let's put the CASH back in your Cash flow!"}
        BannerIntro={"Our diversified panel of lenders and products delivers the highest success rate for securing the funding your business needs."}
        BannerImage={BannerImg}
        BusinessLoans={true}
      />
      <Breadcrumb routeName={routeName} />
      <BringingExperience />
      <GrowSave
        bgColor={'growSaveBusinessLoansBg'}
        addClass={'text-start'}
        iconClass={'text-start'}
        secTitle={"What best describes you"}
      />
<<<<<<< HEAD
      <CommonFeature featureData={BusinessLoansFeatureData} BusinessLoans="true" sectionCls="featured-wrapper" isCount={true} isSecHeader={false} />
=======
      <CommonFeature featureData={businessLoans} isCount={true} sectionCls="featured-wrapper" fontBold={ true } isBusinessFeature={true} />
      <GreatCustomers />
>>>>>>> 0acbb6c2778e2bef78b3f68fa2ba01023412816f
      <Blogs />
    </div>
  );
};

export default BusinessLoans;