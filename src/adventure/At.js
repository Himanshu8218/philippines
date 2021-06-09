import React, { Component } from 'react';


const AtSeaLevel = {
    island: `${process.env.PUBLIC_URL}/At-sea-level-img/Island-Camping.jpg`,
    jetskiing: `${process.env.PUBLIC_URL}/At-sea-level-img/Jetskiing.jpg`,
    kayaking: `${process.env.PUBLIC_URL}/At-sea-level-img/Kayaking.jpg`,
    sailing: `${process.env.PUBLIC_URL}/At-sea-level-img/Sailing.jpg`,
    surfing: `${process.env.PUBLIC_URL}/At-sea-level-img/Surfing.jpg`,
}

const imageStyle = { position: "relative", backgroundSize: 'cover' }

export class At extends Component {
    render = () => {
        return (
            <>

            <div className="row m-0" style={{ height: 490, }}>
                <div className="col-6 p-0">
                    <div className='parent' style={{ ...imageStyle, backgroundImage: `url(${AtSeaLevel.sailing})`, height: 490 }}>
                        <div className='details'>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%' ,  width:'45%' }}>
                                <div style={{ color: 'white' }}>
                                    <h1>Sailing</h1>
                                  <p>Play with the winds and the ocean and get the ultimate rush with Sailing. Though it can be fun to do anywhere on earth, Sailing on the rhythmic waves of the Pacific is an exciting thrill to have.


</p>
                                </div>
                            </div>

                        </div>
                        <div style={{ position: 'absolute', right: '16px', bottom: '16px' }}>
                            <h6 style={{ color: 'white' }}>Sailing</h6>
                        </div>


                    </div>

                </div>
                <div className="col-6 p-0 ps-2">
                    <div className="row pb-2 m-0">
                        <div className='parent p-0' style={{ ...imageStyle, backgroundImage: `url(${AtSeaLevel.surfing})`, height: 241 }}>
                            <div className='details'>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%' , width:'45%' }}>
                                    <div style={{ color: 'white' }}>
                                        <h1>Surfing</h1>
                                       <p>Hang ten over the tides, the waves on our beaches truly have a playful stride. Though every beach has that surf element, spots you should definitely hit are East Samar and Baler, Aurora.</p>
                                    </div>
                                </div>

                            </div>
                            <div style={{ position: 'absolute', right: '16px', bottom: '16px' }}>
                                <h6 style={{ color: "white" }}>Surfing</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className=' parent p-0' style={{ ...imageStyle, backgroundImage: `url(${AtSeaLevel.kayaking})`, height: 241 }}>
                            <div className='details'>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%',  width:'45%' }}>
                                    <div style={{ color: 'white' }}>
                                        <h1>kayaking</h1>
                                        <p>Life is always better when we choose to take all the scenic routes. Kayaking through the narrow streams in El Nido, Siargao, Tawala and Roxas is one life choice for your inner adventurer.
</p>
                                    </div>
                                </div>

                            </div>
                            <div style={{ position: 'absolute', right: '16px', bottom: '16px' }}>
                                <h6 style={{ color: 'white' }}>Kayaking</h6>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row pt-3 m-0" style={{ height: 528 }}>
                <div className="col-7 p-0  pe-2 ">
                    <div className='parent' style={{ ...imageStyle, backgroundImage: `url(${AtSeaLevel.jetskiing})`, height: 512 }}>
                        <div className='details'>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%',  width:'45%'}}>
                                <div style={{ color: 'white' }}>
                                    <h1>Jetskiing</h1>
                                    <p>Tame the beast that is the ocean with power. Jet skiing is the most exciting water sport for beginners. You can do it all over the country as the wild waves are welcoming on all shores.

</p>
                                 </div>
                            </div>

                        </div>
                        <div style={{ position: 'absolute', left: '16px', top: '16px' }}>
                            <h6 style={{ color: 'white' }}>Jetskiing</h6>
                        </div>
                    </div>
                </div>
                <div className="col-5 p-0">
                    <div className='parent' style={{ ...imageStyle, backgroundImage: `url(${AtSeaLevel.island})`, height: 512 }}>
                        <div className='details'>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%',  width:'45%' }}>
                                <div style={{ color: 'white' }}>
                                    <h1>Island Camping</h1>
                                   <p>Camping on an island is like a packaged adventure, being left to your own devices, who knows what fun will you figure out. Here you have over 7000 islands to choose from.

</p>
                                </div>
                            </div>

                        </div>
                        <div style={{ position: 'absolute', left: '16px', top: '16px' }}>
                            <h6 style={{ color: 'white' }}>Island Camping</h6>
                        </div>
                    </div>
                </div>
            </div>

        </>
        )
    }
}