import AboutUs from "@/components/AboutUs";
import Articles from "@/components/Articles/Articles";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="">
      <Header />
      <AboutUs />
      <Articles />
      <Footer />
    </main>
  );
}
