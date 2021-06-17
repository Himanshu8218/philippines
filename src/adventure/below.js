import React, { Component } from 'react';


const BelowSeaLevel = {
    first: `${process.env.PUBLIC_URL}/Below-img/first.jpg`,
    second: `${process.env.PUBLIC_URL}/Below-img/fourth.jpeg`,
    third: `${process.env.PUBLIC_URL}/Below-img/third.jpg`,
    fourth: `${process.env.PUBLIC_URL}/Below-img/free.jpg`,
    fifth: `${process.env.PUBLIC_URL}/Below-img/fifth.jpg`,
}

const imageStyle = { position: "relative", backgroundSize: 'cover', boxShadow: '0px 4px 20px rgb(0 0 0 / 30%)', backgroundPosition:"center" }

export class Below extends Component {
    render = () => {

        const screenWidth = window.screen.width

        const style = (screenWidth > 600 ? { height: 241 } : { height: 490 })

        console.log('>>>>>>', window.screen.width)

        return (
            <div className="row g-0" >
                <div className="col-md-6 col-12 pe-md-1 pt-1 pb-1">
                    <div className="pb-md-1 pb-2">
                        <div className='parent' style={{ ...imageStyle, backgroundImage: `url(${BelowSeaLevel.first})`, ...style }}>
                            <div className='details'>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%', width: '45%' }}>
                                    <div style={{ color: 'white' }}>
                                        <h1>Snorkelling </h1>
                                        <p>Take a dip underwater and get introduced to life below sea level. It’s at its vibrant best on the shores of the Philippines, especially in Boracay, Coron and Apo Islands.</p>
                                    </div>
                                </div>

                            </div>
                            <div className="student" style={{ position: 'absolute', left: '16px', top: '16px' }}>
                                <h6 style={{ color: "white" }}>Snorkelling</h6>
                            </div>
                        </div>
                    </div>
                    <div className="pt-md-1">
                        <div className='parent' style={{ ...imageStyle, backgroundImage: `url(${BelowSeaLevel.second})`, ...style }}>
                            <div className='details'>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%', width: '60%' }}>
                                    <div style={{ color: 'white' }}>
                                        <h1>Submarine Ride</h1>
                                        <p>Get introduced to the beautiful marine life effortlessly, with a fun ride deep into the waters around our Islands, the life you’ll see below will leave a mark on your memory</p>
                                    </div>
                                </div>

                            </div>
                            <div className="student" style={{ position: 'absolute', left: '16px', top: '16px' }}>
                                <h6 style={{ color: 'white' }}>Submarine Ride</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12 ps-md-1 pt-1 pb-1">
                    <div className='parent' style={{ ...imageStyle, backgroundImage: `url(${BelowSeaLevel.third})`, height: 490 }}>
                        <div className='details'>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%', width: '45%' }}>
                                <div style={{ color: 'white' }}>
                                    <h1>Whale Shark tours</h1>
                                    <p>Meet the kings and queens of the Pacific ocean, tours to see the majestic whale shark set sail from all around the nation. This is ocean safari at its best.
</p>
                                </div>
                            </div>

                        </div>
                        <div className="student" style={{ position: 'absolute', left: '16px', top: '16px' }}>
                            <h6 style={{ color: 'white' }}>Whale Shark tours</h6>
                        </div>


                    </div>

                </div>
                <div className="col-md-7 col-12 pe-md-1 pt-1 pb-1" style={{ height: 528 }}>
                    <div className='parent' style={{ ...imageStyle, backgroundImage: `url(${BelowSeaLevel.fourth})`, height: 512 }}>
                        <div className='details'>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%', width: '45%' }}>
                                <div style={{ color: 'white' }}>
                                    <h1>Free diving</h1>
                                    <p>For the water babies who can hold their breaths longer, the Philippines is a wonderland to explore the ocean on your own. But we do recommend you take a course before.</p>
                                </div>
                            </div>

                        </div>
                        <div className="student" style={{ position: 'absolute', left: '16px', top: '16px' }}>
                            <h6 style={{ color: 'white' }}>Free diving </h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-12 ps-md-1 pt-1 pb-1">
                    <div className='parent' style={{ ...imageStyle, backgroundImage: `url(${BelowSeaLevel.fifth})`, height: 512 }}>
                        <div className='details'>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%', width: '55%' }}>
                                <div style={{ color: 'white' }}>
                                    <h1>Deep Sea Diving</h1>
                                    <p>Divers are in for a treat, if you’re enthusiastic about diving just head to Tubbataha Reefs Natural Park, Anilao - Batangas, Dauin - Dumaguete, or  Moalboal - Cebu and more.

</p>
                                </div>
                            </div>

                        </div>
                        <div className="student" style={{ position: 'absolute', left: '16px', top: '16px' }}>
                            <h6 style={{ color: 'white' }}>Deep Sea Diving</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
