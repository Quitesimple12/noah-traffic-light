import React, { useState, useEffect } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const RedLight = ({selected, onClick}) => {
	return <div className={`bg-danger rounded-circle ${selected ? 'selected' : ''}`}
	style={{width: "125px", height: "125px", position: "absolute", top: "10px", left: "50%", transform: "translateX(-50%)"}} onClick={onClick}></div>
}

const YellowLight = ({selected, onClick}) => {
	return <div className={`bg-warning rounded-circle ${selected ? 'selected' : ''}`}
	style={{width: "125px", height: "125px", position: "absolute", top: "140px", left: "50%", transform: "translateX(-50%)"}} onClick={onClick}></div>
}

const GreenLight = ({selected, onClick}) => {
	return <div className={`bg-success rounded-circle ${selected ? 'selected' : ''}`}
	style={{width: "125px", height: "125px", position: "absolute", top: "270px", left: "50%", transform: "translateX(-50%)"}} onClick={onClick}></div>
}
//create your first component
const Home = () => {
	const [redlightselected, setredlightselected] = useState(false);
	const [yellowlightselected, setyellowlightselected] = useState(false)
	const [greenlightselected, setgreenlightselected] = useState(false)
	const toggleRedLight = () => {
		setredlightselected(true)
		setyellowlightselected(false)
		setgreenlightselected(false)
	}
	const toggleYellowLight = () => {
		setyellowlightselected(true)
		setgreenlightselected(false)
		setredlightselected(false)
	}
	const toggleGreenLight = () => {
		setgreenlightselected(true)
		setredlightselected(false)
		setyellowlightselected(false)
	}
	return (
		<div style = {{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center",}}>
		<div>
			<div className="card bg-dark" style={{height: "200px", width: "10px"}}>
  				<div className="card-body">
  				</div>
			</div>
		</div>
		<div>
			<div className="card bg-dark" style={{height: "400px", width: "200px"}}>
				<div className="card-body" style={{ position: "relative" }}>
					<RedLight selected = {redlightselected} onClick={toggleRedLight} />
					<YellowLight selected = {yellowlightselected} onClick={toggleYellowLight}/>
					<GreenLight selected = {greenlightselected} onClick={toggleGreenLight}/>
				</div>
			</div>
		</div>
		</div>
	);
};

export default Home;
