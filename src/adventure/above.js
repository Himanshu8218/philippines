import React, { Component } from 'react';
import './style.scss'



const AboveSeaLevel = {
    canyoneering: `${process.env.PUBLIC_URL}/Above-sea-level-img/Canyoneer.jpg`,
    hiking: `${process.env.PUBLIC_URL}/Above-sea-level-img/Hiking.jpg`,
    paragliding: `${process.env.PUBLIC_URL}/Above-sea-level-img/Paragliding.jpg`,
    skydiving: `${process.env.PUBLIC_URL}/Above-sea-level-img/Skydive.jpg`,
    zipline: `${process.env.PUBLIC_URL}/Above-sea-level-img/Zipline.jpg`,

}

const imageStyle = { position: "relative", backgroundSize: 'cover' }

export class Above extends Component {
    render = () => {
        return (
            <>

                <div className="row" style={{ height: 490, }}>
                    <div className="col-6">
                        <div className='parent' style={{ ...imageStyle, backgroundImage: `url(${AboveSeaLevel.paragliding})`, height: 490 }}>
                            <div className='details'>
                                <div style={{  display: 'flex', flexDirection:'column', justifyContent: 'flex-end', height: '100%' }}>
                                <div  style={{ color: 'white' }}>
                                    <h1>Paragliding</h1>
                                </div>
                                </div>

                            </div>
                            <div style={{ position: 'absolute', left: '16px', top: '16px' }}>
                                <h6 style={{ color: 'white' }}>Paragliding</h6>
                            </div>


                        </div>

                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className='p-0' style={{ ...imageStyle, backgroundImage: `url(${AboveSeaLevel.skydiving})`, height: 245 }}>
                                <div style={{ position: 'absolute', right: '16px', bottom: '16px' }}>
                                    <h6 style={{ color: "white" }}>Skydive</h6>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className='p-0' style={{ ...imageStyle, backgroundImage: `url(${AboveSeaLevel.zipline})`, height: 245 }}>
                                <div style={{ position: 'absolute', right: '16px', bottom: '16px' }}>
                                    <h6 style={{ color: 'white' }}>Zipline</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row pt-3 m-0" style={{ height: 528 }}>
                    <div className="col-7  p-0">
                        <div className='' style={{ ...imageStyle, backgroundImage: `url(${AboveSeaLevel.canyoneering})`, height: 528 }}>
                            <div style={{ position: 'absolute', left: '16px', top: '16px' }}>
                                <h6 style={{ color: 'white' }}>Canyoneering</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 p-0">
                        <div className='' style={{ ...imageStyle, backgroundImage: `url(${AboveSeaLevel.hiking})`, height: 528 }}>
                            <div style={{ position: 'absolute', left: '16px', top: '16px' }}>
                                <h6 style={{ color: 'white' }}>Mountain Climbing</h6>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}


