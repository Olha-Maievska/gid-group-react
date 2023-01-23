import BeatLoader from "react-spinners/BeatLoader";

const Spinner = () => {
	return (
		<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
			<BeatLoader size={10} color={'#86e7d4'}/>
		</div>
	)
}

export default Spinner