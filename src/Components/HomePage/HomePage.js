import Header from '../Header/Header'
import Products from './Products/Products'
import Kit from './Kit/Kit'
import Feedback from './Feedback/Feedback'
import NewsLetter from './NewsLetter/NewsLetter'
import Footer from '../Footer/Footer'
import BannerInitial from './BannerInitial/BannerInitial'
import CallToAction from './CallToAction/CallToAction'
import DnaTest from './DnaTest/DnaTest'

function HomePage() {
  return (
    <>
      <Header />
      <BannerInitial />
      <Products />
      <Kit />
      <DnaTest />
      <Feedback />
      <NewsLetter />
      <CallToAction />
      <Footer />
    </>
  );
}

export default HomePage;