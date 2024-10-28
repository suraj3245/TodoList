import Header from "./template/header/page";
import Footer from "./template/footer/page";
import AddToList from "./AddToList/page";

export default function Home() {
  return (
    <div>
       <Header/>
       <AddToList/>
       <Footer/>
    </div>
  );
}
