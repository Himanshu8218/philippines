import React, { Component } from 'react';
import './style.scss'



const AboveSeaLevel = {
    canyoneering: `${process.env.PUBLIC_URL}/Above-sea-level-img/Canyoneer.jpg`,
    hiking: `${process.env.PUBLIC_URL}/Above-sea-level-img/Hiking.jpg`,
    paragliding: `${process.env.PUBLIC_URL}/Above-sea-level-img/Paragliding.jpg`,
    skydiving: `${process.env.PUBLIC_URL}/Above-sea-level-img/Skydive.jpg`,
    zipline: `${process.env.PUBLIC_URL}/Above-sea-level-img/Zipline.jpg`,

}

const imageStyle = { position: "relative", backgroundSize: 'cover', boxShadow: '0px 4px 20px rgb(0 0 0 / 30%)', 
}

export class Above extends Component {
    render = () => {
        return (
            <>

                <div className="row m-0" style={{ height: 490, }}>
                    <div className="col-6 p-0">
                        <div className='parent' style={{ ...imageStyle, backgroundImage: `url(${AboveSeaLevel.paragliding})`, height: 490 }}>
                            <div className='details'>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%' ,  width:'45%' }}>
                                    <div style={{ color: 'white' }}>
                                        <h1>Paragliding</h1>
                                        <p>Sailing through the breeze of the pacific in a glider, the Philippines has many breathtaking horizons which makes it an oceanic paradise for paragliders.

</p>
                                    </div>
                                </div>

                            </div>
                            <div style={{ position: 'absolute', right: '16px', bottom: '16px' }}>
                                <h6 style={{ color: 'white' }}>Paragliding</h6>
                            </div>


                        </div>

                    </div>
                    <div className="col-6 p-0 ps-2">
                        <div className="row pb-2 m-0">
                            <div className='parent p-0' style={{ ...imageStyle, backgroundImage: `url(${AboveSeaLevel.skydiving})`, height: 241 }}>
                                <div className='details'>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%' , width:'45%' }}>
                                        <div style={{ color: 'white' }}>
                                            <h1>Skydive</h1>
                                            <p>Jumping from 10,000 ft above sea level, goes to another level when you’re Skydiving into paradise. The Philippines is extremely good for this extreme sport.
</p>
                                        </div>
                                    </div>

                                </div>
                                <div style={{ position: 'absolute', right: '16px', top: '16px' }}>
                                    <h6 style={{ color: "white" }}>Skydive</h6>
                                </div>
                            </div>
                        </div>
                        <div className="row m-0">
                            <div className=' parent p-0' style={{ ...imageStyle, backgroundImage: `url(${AboveSeaLevel.zipline})`, height: 241 }}>
                                <div className='details'>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%',  width:'45%' }}>
                                        <div style={{ color: 'white' }}>
                                            <h1>Zipline</h1>
                                            <p>Dash through green mountain peaks, Ziplining is a good way to soak in the beautiful Philippine landscape with a comfortable rush of adrenaline.
</p>
                                        </div>
                                    </div>

                                </div>
                                <div style={{ position: 'absolute', right: '16px', bottom: '16px' }}>
                                    <h6 style={{ color: 'white' }}>Zipline</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row pt-3 m-0" style={{ height: 528 }}>
                    <div className="col-7 p-0  pe-2 ">
                        <div className='parent' style={{ ...imageStyle, backgroundImage: `url(${AboveSeaLevel.canyoneering})`, height: 512 }}>
                            <div className='details'>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%',  width:'45%'}}>
                                    <div style={{ color: 'white' }}>
                                        <h1>Canyoneering</h1>
                                        <p>The Philippines' natural playground allows you to climb mountains, jump into streams and waterfalls. It’s so much fun, that every adventure seeker wants a piece of this wonderland.
</p>
                                    </div>
                                </div>

                            </div>
                            <div style={{ position: 'absolute', left: '16px', top: '16px' }}>
                                <h6 style={{ color: 'white' }}>Canyoneering</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 p-0">
                        <div className='parent' style={{ ...imageStyle, backgroundImage: `url(${AboveSeaLevel.hiking})`, height: 512 }}>
                            <div className='details'>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%',  width:'45%' }}>
                                    <div style={{ color: 'white' }}>
                                        <h1>Mountain Climbing</h1>
                                        <p>Summit the country's highest mountains that leave you astounded with the views from the top. This is where you’ll really feel you’re on top of the world.
</p>
                                    </div>
                                </div>

                            </div>
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


