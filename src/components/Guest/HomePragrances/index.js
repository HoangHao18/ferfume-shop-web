import PragranceTypeSlider from '../../share/PragranceTypeSlider';
import './style.scss';

export default function HomePragrances(){
    const style = {
        backgroundImage: "url('/assets/images/hp06.jpg')"
    }
    return(
        <div className="home-pragrances-container">
            <div className="hp-bg" style={style}>
                <div className="hp-outsite-slider">
                    <div className="hp-slider">
                        <PragranceTypeSlider />
                    </div>  
                </div>
            </div>
        </div>
    )
}