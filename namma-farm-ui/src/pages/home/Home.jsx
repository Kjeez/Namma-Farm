import React from 'react'
import Category from '../../components/category/Category';
import HomeBanner1 from '../../components/homeBanner/HomeBanner1';
import HomeBanner2 from '../../components/homeBanner/HomeBanner2';
import HomeBanner3 from '../../components/homeBanner/HomeBanner3';
import Faq from '../../components/faq/Faq';
import Carousel from '../../components/carousel/Carousel';
import HomeBanner4 from '../../components/homeBanner/HomeBanner4';
import HomeBanner5 from '../../components/homeBanner/HomeBanner5';


const Home = () => {
  const categories = [{ "title": "title 1", "icon": "ssafd" }, { "title": "title 2", "icon": "dcvsd" }]
  const features = [{ "title": "title 1", "icon": "ssafd" }, { "title": "title 2", "icon": "dcvsd" }]
  const questions = [{ "q": "title 1", "a": "ssafd" }, { "q": "title 2", "a": "dcvsd" }]
  return (
    <>
      <Category categories={categories} />
      <Carousel />
      <HomeBanner1 features={features} />
      <HomeBanner2 />
      <HomeBanner3 />
      <Faq questions={questions} />
      <HomeBanner4 />
      <HomeBanner5 />
    </>

  )
}

export default Home