import HeaderSlider from "../../../components/Guest/HeaderSlider";
import HomeCategory from "../../../components/Guest/HomeCategory";
import BreakSpace from "../../../components/share/BreakSpace";
import ProductItemsSlider from "../../../components/Guest/ProductItemsSlider";
import ProductNewList from "../../../components/Guest/ProductNewList";
import Footer from "../../../components/Guest/Footer";
import TitleSection from "../../../components/share/TitleSection";
import HomeBanner from "../../../components/Guest/HomeBanner";
import HomePragrances from "../../../components/Guest/HomePragrances";

export default function Home(){

    return(
        <div className="home-page-container">
            <HeaderSlider/>

            <BreakSpace h="40px" />
            <HomeCategory/>

            <BreakSpace h="40px" />            
            <TitleSection title="sản phẩm nổi bật"/>
            <ProductItemsSlider/>

            <BreakSpace h="40px" />   
            <HomeBanner/>

            <BreakSpace h="30px" />   
            <TitleSection title="Ưu đãi hôm nay"/>
            <ProductItemsSlider/>
          
            <BreakSpace h="40px" /> 
            <HomePragrances/>

            <BreakSpace h="30px" />
            <TitleSection title="Sản phẩm mới"/>
            <ProductNewList/>
            <BreakSpace h="30px" />
            <Footer/>
          
        </div>
    )
}