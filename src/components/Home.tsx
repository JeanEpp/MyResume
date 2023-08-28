import Timeline from './Timeline';
import Profile from './Profile'
import ProgressBar from './ProgressBar';
import dataFr from './../assets/CV.json';
import dataEn from './../assets/CV (EN).json';
import { isWorkObject, WorkObject } from './Work';
import { EducationObject } from './Education';
import Network from './Network';
import Carousel from './Carousel';
import { useTranslation, Trans } from 'react-i18next';

function Home() {
	let timeline: any[] = []
	let network: any[] = []
	const { t, i18n } = useTranslation();
    const data =  i18n.language === "en-US" ? dataEn : dataFr;
	timeline = timeline.concat(data.education, data.work)
	timeline = timeline.sort((a: WorkObject, b: EducationObject) => Date.parse(a.startDate) - Date.parse(b.startDate))
	network= network.concat(data.skills, data.languages)

	return <div>
		<Profile profile={data.basics}></Profile>
		<div id="timeline" className="flex flex-col md:flex-row justify-items-center">
			<Timeline key={1} side={timeline} title={[t("header.Experiences"), t("header.Education")]}></Timeline>
		</div>
		<Carousel projects={data.projects}></Carousel>
		<Network skills={network}></Network>
	</div>
}

export default Home;