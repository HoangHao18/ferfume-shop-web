import ProductItemsHorizontal from '../ProductItemsHorizontal'
import './style.scss'


export default function ProductNewList(){

    return(
        <div className="product-new-list-container">
            <div className="container plc-content">
                <div className="row-hh">
                    <div className="pnl-product col-8">
                        <ProductItemsHorizontal />
                    </div>
                    <div className="pnl-deco col-4">
                        <div className="pnl-deco-img">
                            <img src="/assets/images/decoPN.jpg" alt=""></img>
                        </div>
                    </div>

                </div>
            </div>

            <div className="plc-deco">
                <div className="plc-deco-left">
                    <img src="/assets/images/decoEdge01.png" alt=""></img>
                    {/* <img src="/assets/images/testPaint.png" alt=""></img> */}
                </div>
                <div className="plc-deco-right">
                    <img src="/assets/images/decoEdge02.png" alt=""></img>
                </div>
            </div>

        </div>
    )
}