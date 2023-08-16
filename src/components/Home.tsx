import Timeline from './Timeline';
import Profile from './Profile'
import ProgressBar from './ProgressBar';
import data from './../assets/CV.json';
import { isWorkObject, WorkObject } from './Work';
import { EducationObject } from './Education';
import Network from './Network';
import Carousel from './Carousel';

function Home() {
	let timeline: any[] = []
	let network: any[] = []
	timeline = timeline.concat(data.education, data.work)
	timeline = timeline.sort((a: WorkObject, b: EducationObject) => Date.parse(a.startDate) - Date.parse(b.startDate))
	network= network.concat(data.skills, data.languages)

	return <div>
		<Profile></Profile>
		<div id="timeline" className="flex flex-col md:flex-row justify-items-center">
			<Timeline key={1} side={timeline} title={["Experience", "Education"]}></Timeline>
		</div>
		<Carousel projects={data.projects}></Carousel>
		<Network skills={network}></Network>
	</div>
}

export default Home;