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
  const categories = [
    { "title": "Rice,Millets & Grain", "icon": "/assets/rice (1) 1.png" },
    { "title": "Pulses", "icon": "/assets/red-beans (1) 1.png" },
    { "title": "Oils", "icon": "/assets/olive-oil 1.png" },
    { "title":"Flour & Health Mixes", "icon": "/assets/Frame 1321315134.png" },
    { "title": "Spices,Sweetners & Salt", "icon": "/assets/spice 1.png" },
    { "title": "Dry fruits & Nuts", "icon": "/assets/almond (1) 1.png" },
    { "title": "Ready to eat/Cook", "icon": "/assets/take-away 1.png" },
    { "title": "Others", "icon": "/assets/nuts 1.png" },

  ]


  const features = [
    { "title": "Secure payments", "icon": "/assets/flour 1.png" },
    { "title": "50+ Products", "icon": "/assets/barley 1.png" },
    { "title": "5 M+ Customers", "icon": "/assets/Mask group.png" },
    { "title": "Quality Ingredients", "icon": "/assets/flour 1.png" },
    { "title": "Worldwide Shipping", "icon": "/assets/Mask group.png" },

  ]

  const questions = [{ "q": "title 1", "a": "ssafd" }, { "q": "title 2", "a": "dcvsd" }]
  const items = [
    { "title": "Rice", "desc": "Lorem ipsum dolor sit amet","src":"/assets/freepik-export-20240504124244yJNz 1.png"},
    { "title": "Oil", "desc": "Lorem ipsum dolor sit amet","src":"/assets/freepik-export-20240504125638LCdH 1.png"},
    { "title": "Flour", "desc": "Lorem ipsum dolor sit amet","src":"/assets/freepik-export-20240504125417TOT0 (1) 1.png"},
    { "title": "Dryfruits", "desc": "Lorem ipsum dolor sit amet","src":"/assets/freepik-export-20240504125417TOT0 (1) 1.png"},
    { "title": "Flour", "desc": "Lorem ipsum dolor sit amet","src":"/assets/freepik-export-20240504125638LCdH 1.png"},
  ]

  return (
    <>
      <Category categories={categories} />
      <Carousel />
      <HomeBanner1 features={features} />
      <HomeBanner2 />
      <HomeBanner3 items={items} />
      <Faq questions={questions} />
      <HomeBanner4 />
      <HomeBanner5 />
    </>

  )
}

export default Home