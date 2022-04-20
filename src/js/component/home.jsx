import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [count, encender] = useState(null);

	return (
		<div>
			<p>Has dado click {count} veces</p>
			<div className="pole"></div>
			<div className="signal">
				<div
					className="red"
					onClick={() => encender((className = "red bright"))}></div>

				<div
					className="ambar"
					onClick={() =>
						encender((className = "ambar bright"))
					}></div>

				<div
					className="green"
					onClick={() =>
						encender((className = "green bright"))
					}></div>
			</div>
		</div>
	);
};

export default Home;
