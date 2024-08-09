import Header from './components/header/Header.jsx'
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import NoPage from './pages/nopage/NoPage.jsx'
import Footer from './components/footer/Footer.jsx'
import ContactUs from './pages/contact/ContactUs.jsx'
import Register from './pages/register/Register.jsx'
import AboutUs from './pages/aboutUs/AboutUs.jsx'
import Faq from './components/faq/Faq.jsx'
import Billing from './pages/billing/Billing.jsx'
import PaymentMode from './pages/payment/Payment.jsx'

function App() {
  return (<>
    <Header />
    <Routes>
    <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/addAddress" element={<Billing />} />
      <Route path="paymentMode" element={<PaymentMode />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
    <Footer />
  </>

  )
}

export default App;
