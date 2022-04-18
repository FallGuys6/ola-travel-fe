import React from 'react';

const imageInspiration = [
    {
        urlImage: "https://source.unsplash.com/random",
        linkImage: "#",
        name: "Ola Travel"
    }, {
        urlImage: "https://source.unsplash.com/random",
        linkImage: "#",
        name: "Ola Travel"
    }, {
        urlImage: "https://source.unsplash.com/random",
        linkImage: "#",
        name: "Ola Travel"
    }, {
        urlImage: "https://source.unsplash.com/random",
        linkImage: "#",
        name: "Ola Travel"
    }, {
        urlImage: "https://source.unsplash.com/random",
        linkImage: "#",
        name: "Ola Travel"
    }
]

function InspirationForTravel(props) {
    return (
        <div className="container-1200">
            <div className="inspirationForTravel">
                <div className="info">
                    <h1 className="title">Cảm hứng cho những chuyến đi</h1>
                    <p className="slug">Bí quyết du lịch, những chuyến câu chuyện thú vị sau mỗi chyến đi đang chờ đón bạn</p>
                </div>
                <div className="images">

                    {
                        imageInspiration.map((e, i) => (
                            <a href={e.linkImage} key={i} className="image">
                                <img src={e.urlImage} alt="" />
                                <div className="image-title">{e.name}</div>
                            </a>
                        ))
                    }

                </div>
                <div className='seeAll'>
                    <a className='seeAll-text' href="#">Xem tất cả</a>
                </div>
            </div>

        </div>
    );
}

export default InspirationForTravel;