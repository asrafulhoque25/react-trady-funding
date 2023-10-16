
import { homeFeatureData } from '../Data';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/banner/Banner';
import Blogs from '../components/blogs/Blogs';
import Brand from '../components/brand/Brand';
import CommonFeature from '../components/commonFeature/CommonFeature';
import CommonHeader from '../components/commonHeader/CommonHeader';
import GrowSave from '../components/growandsave/GrowSave';
import Testimonial from '../components/testimonial/Testimonial';
import BannerImg from '/assets/img/home-banner-img.jpg';
const Home = () => {
  return (
    <div>
      <>
<<<<<<< HEAD
        <Navbar />
        <Banner 
          BannerTitle={"Unlock cash flow & improve how your business transacts."}
          BannerIntro={"The preferred partner to businesses who want to Grow and Save"}
          BannerImage={BannerImg}
        />
=======
        <Banner />
>>>>>>> 7563f20e5a6cc02c25f062b0e83866daddc19e18
        <GrowSave />
        <CommonFeature sectionCls="featured-wrapper" featureData={homeFeatureData} isSecHeader={true} SectionHeader={
          <CommonHeader
            SectionTitle='Dedicated support to help you achieve!'
            addClass={""}
            SectionIntro={"Have you ever taken a product and thought there was most likely a better solution for your business? It's easy to do when there are sooo many options!"}
          />
        } />
        <Testimonial />
        <Blogs SectionHeader={
          <CommonHeader
            SectionTitle='Let us help you take your business to the next level!'
          />
        } />
        <Brand
          containerClass={'container'}
          rowClass={'gap-6 justify-center lg:justify-between'}
        />
      </>
    </div>
  )
}

export default Home