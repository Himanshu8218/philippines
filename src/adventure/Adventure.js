import { Component } from "react";
import { Above } from "./above";
import { At, AtSeaLevel } from "./At";
import { ReactComponent as RulerLeft } from './Ruler.svg'
import { ReactComponent as RulerRight } from './Ruler2.svg'

const AboveSeaLevel = {
    hiking: `${process.env.PUBLIC_URL}/Above-sea-level-img/Hiking.jpg`,
}


export class AdventureScreen extends Component {

    state = {
        currentTab: "above"
    }



    render = () => {
        return (
            <div className='row justify-content-center' style={{ paddingTop: "100px", backgroundImage: `url(${AboveSeaLevel.hiking})`, backgroundSize: 'cover' }}>
                <div className='row justify-content-center'>
                    <div className='col-10'>

                        <div className=" text-center" style={{ color: 'white' }}>
                            <h2> GO TO ANOTHER LEVEL OF EXTREME</h2>
                        </div>
                        <div className="  text-center" style={{ color: 'white' }}>
                            <p>The fun begins at 10,000 ft. and stays that way all the way down to 10. You must have in you, to embrace your extreme side, and there’s no better way to do that than in the Philippines.</p>
                        </div>
                    </div>

                </div>

                <div className='row pb-4'>
                    <div className='col-1 p-0'>
                        <RulerLeft />
                    </div>
                    <div className='col-10'>
                        <div className="row justify-content-center  text-center p-5" style={{ color: 'white' }}>
                            <div className="col-3 " style={this.state.currentTab === 'above' ? { color: "yellow" } : {}} onClick={() => { this.setState({ currentTab: "above" }) }}>ABOVE SEA LEVEL</div>
                            <div className="col-3" onClick={() => { this.setState({ currentTab: "at" }) }}>AT SEA LEVEL</div>
                            <div className="col-3" onClick={() => { this.setState({ currentTab: "below" }) }}>BELOW SEA LEVEL</div>
                        </div>
                        <div>
                            {this.state.currentTab === "above" ? <div><Above /></div> : this.state.currentTab === "at" ? <div><At /></div> : this.state.currentTab === "below" && <div>below</div>}
                        </div>
                        </div>
                        <div className='col-1 p-0' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <RulerRight />

                        </div>
                    </div>


                </div>



        )
    }
}