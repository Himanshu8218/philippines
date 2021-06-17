import React, { Component } from 'react';


const AtSeaLevel = {
    island: `${process.env.PUBLIC_URL}/At-sea-level-img/Island-Camping.jpg`,
    jetskiing: `${process.env.PUBLIC_URL}/At-sea-level-img/Jetskiing.jpg`,
    kayaking: `${process.env.PUBLIC_URL}/At-sea-level-img/Kayaking.jpg`,
    sailing: `${process.env.PUBLIC_URL}/At-sea-level-img/Sailing.jpg`,
    surfing: `${process.env.PUBLIC_URL}/At-sea-level-img/Surfing.jpg`,
}

const imageStyle = { position: "relative", backgroundSize: 'cover', boxShadow: '0px 4px 20px rgb(0 0 0 / 30%) ', backgroundPosition: "center" }

export class At extends Component {
    render = () => {

        const screenWidth = window.screen.width

        const style = (screenWidth > 600 ? { height: 241 } : { height: 490 })

        console.log('>>>>>>', window.screen.width)

        return (
            <div className="row pt-2 g-0">
                <div className="col-md-7 pe-md-1 pt-1 pb-1">
                    <div className='parent' style={{ ...imageStyle, backgroundImage: `url(${AtSeaLevel.sailing})`, height: 512 }}>
                        <div className='details'>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%', width: '45%' }}>
                                <div style={{ color: 'white' }}>
                                    <h1>Sailing</h1>
                                    <p>Play with the winds and the ocean and get the ultimate rush with Sailing. Though it can be fun to do anywhere on earth, Sailing on the rhythmic waves of the Pacific is an exciting thrill to have.</p>
                                </div>
                            </div>
                        </div>
                        <div className="student" style={{ position: 'absolute', left: '16px', top: '16px' }}>
                            <h6 style={{ color: 'white' }}>Sailing</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 ps-md-1 pt-1 pb-1">
                    <div className='parent' style={{ ...imageStyle, backgroundImage: `url(${AtSeaLevel.surfing})`, height: 512 }}>
                        <div className='details'>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%', width: '60%' }}>
                                <div style={{ color: 'white' }}>
                                    <h1>Surfing</h1>
                                    <p>Hang ten over the tides, the waves on our beaches truly have a playful stride. Though every beach has that surf element, spots you should definitely hit are East Samar and Baler, Aurora.</p>
                                </div>
                            </div>
                        </div>
                        <div className="student" style={{ position: 'absolute', left: '16px', top: '16px' }}>
                            <h6 style={{ color: 'white' }}>Surfing</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 pe-md-1 pt-1 pb-1">
                    <div className='parent' style={{ ...imageStyle, backgroundImage: `url(${AtSeaLevel.kayaking})`, height: 490 }}>
                        <div className='details'>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%', width: '45%' }}>
                                <div style={{ color: 'white' }}>
                                    <h1>Kayaking</h1>
                                    <p>Life is always better when we choose to take all the scenic routes. Kayaking through the narrow streams in El Nido, Siargao, Tawala and Roxas is one life choice for your inner adventurer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="student" style={{ position: 'absolute', left: '16px', top: '16px' }}>
                            <h6 style={{ color: 'white' }}>Kayaking</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 ps-md-1 pt-1 pb-1">
                    <div className="pb-2">
                        <div className='parent ' style={{ ...imageStyle, backgroundImage: `url(${AtSeaLevel.jetskiing})`, ...style }}>
                            <div className='details'>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%', width: '45%' }}>
                                    <div style={{ color: 'white' }}>
                                        <h1>Jetskiing</h1>
                                        <p>Tame the beast that is the ocean with power. Jet skiing is the most exciting water sport for beginners. You can do it all over the country as the wild waves are welcoming on all shores.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="student" style={{ position: 'absolute', left: '16px', top: '16px' }}>
                                <h6 style={{ color: "white" }}>Jetskiing</h6>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=' parent' style={{ ...imageStyle, backgroundImage: `url(${AtSeaLevel.island})`, ...style }}>
                            <div className='details'>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%', width: '60%' }}>
                                    <div style={{ color: 'white' }}>
                                        <h1>Island Camping</h1>
                                        <p>Camping on an island is like a packaged adventure, being left to your own devices, who knows what fun will you figure out. Here you have over 7000 islands to choose from.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="student" style={{ position: 'absolute', left: '16px', right: '16px' }}>
                                <h6 style={{ color: 'white' }}>Island Camping</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}