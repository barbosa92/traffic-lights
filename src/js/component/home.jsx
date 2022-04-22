import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [estado, lightOn] = useState("");

	return (
		<div>
			<div className="pole"></div>
			<div className="signal">
				<div
					id="redLight"
					className={estado != "redLight" ? "" : "redSelected"}
					onClick={() => {
						lightOn("redLight");
					}}></div>

				<div
					id="amberLight"
					className={estado != "amberLight" ? "" : "amberSelected"}
					onClick={() => {
						lightOn("amberLight");
					}}></div>

				<div
					id="greenLight"
					className={estado != "greenLight" ? "" : "greenSelected"}
					onClick={() => {
						lightOn("greenLight");
					}}></div>
			</div>
		</div>
	);
};

// const Home = () => {
// 	const [estado, lightOn] = useState(false);

// 	return (
// 		<div>
// 			<div className="pole"></div>
// 			<div className="signal">
// 			<div
// 					className={estado ? "selected" : "no"}
// 					id="redLight"
// 					onClick={() => lightOn(true)}></div>

// 				<div
// 					className={estado ? "selected" : "no"}
// 					id="amberLight"
// 					onClick={() => lightOn(true)}></div>

// 				<div
// 					className={estado ? "selected" : "no"}
// 					id="greenLight"
// 					onClick={() => lightOn(true)}></div>
// 			</div>
// 		</div>
// 	);
// };

export default Home;
