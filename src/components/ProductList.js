import ChangeProducts from "./products/ChangeProducts";

const ProductList = () => {
    return(
        <div className="frame-2770-OsLAzO" >
            <div className="frame-2775-KGjWov" >
                <article className="property-1-default-ipRnSH" >
                    <ChangeProducts/>
                    <div className="frame-2777" >
                        {[1, 2, 3].map((item, index) => (
                            <div className="frame-292" key={index}>
                                {[1, 2, 3, 4, 5].map((product, i) => (
                                    <div className="product-card" >
                                        <img className="image-94-1"
                                             src="https://cdn.animaapp.com/projects/66333b5cd088bd98580d74fb/releases/66333c1cd088bd98580d74fc/img/image-94-1.svg"
                                             alt="image"/>
                                        <div className="frame-258-Mp8uRa frame-258"><p
                                            className="text_label-MxVsmn text_label iransans-regular-normal-onyx-13px"
                                            >عنوان محصول عنوان محصول عنوان محصول عنوان محصول</p>
                                            <div className="frame-2659" >
                                                <div className="frame-2756" >
                                                    <div className="frame-252" >
                                                        <div className="x46 iransansfanum-regular-normal-dove-gray-14px" >4.6
                                                        </div>
                                                        <img className="vector"
                                                             src="https://cdn.animaapp.com/projects/66333b5cd088bd98580d74fb/releases/66333c1cd088bd98580d74fc/img/vector.svg"
                                                             alt="Vector"/>
                                                    </div>
                                                    <div className="frame-258-biUQS5 frame-258">
                                                        <img className="vuesaxlinearshop"
                                                             src="https://cdn.animaapp.com/projects/66333b5cd088bd98580d74fb/releases/66333c1cd088bd98580d74fc/img/vuesax-linear-shop.svg"
                                                             alt="vuesax/linear/shop"/>
                                                        <div className="text_label-EciNFd text_label iransansfanum-light-gunsmoke-12px"
                                                             >مهراشاپ
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="frame-257">
                                                    <img className="add-botton"
                                                         src="https://cdn.animaapp.com/projects/66333b5cd088bd98580d74fb/releases/66333c1cd088bd98580d74fc/img/add-botton.svg"
                                                         alt="Add botton"/>
                                                    <div className="frame-321">
                                                        <div className="frame-254" >
                                                            <div className="x460000-CrXExu x460000 iransansfanum-regular-normal-cloud-14px"
                                                                 >460,000
                                                            </div>
                                                        </div>
                                                        <div className="frame-253">
                                                            <div className="x460000 iransansfanum-medium-limeade-18px" >460,000
                                                            </div>
                                                            <div className="text_label-rxIJYD text_label iransansfanum-regular-normal-gunsmoke-10px"
                                                                 >تومان
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <img className="frame-264-Mp8uRa frame-264"
                                             src="https://cdn.animaapp.com/projects/66333b5cd088bd98580d74fb/releases/66333c1cd088bd98580d74fc/img/frame-264.svg"
                                             alt="Frame 264"/></div>
                                ))}
                            </div>
                        ))}
                    </div>
                </article>
            </div>
        </div>
    )
}
export default ProductList