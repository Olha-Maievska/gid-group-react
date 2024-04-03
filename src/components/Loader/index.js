import BeatLoader from "react-spinners/BeatLoader";

import './loader.scss'

export const LoaderBigger = () => {
	return (
		<div className="loader">
			<BeatLoader size={20} color={'#000'}/>
		</div>
	)
}

export const LoaderSmall = () => {
	return (
		<div className="loader-small">
			<BeatLoader size={10} color={'#000'}/>
		</div>
	)
}