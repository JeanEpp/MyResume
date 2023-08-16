import data from '../assets/CV.json';

function Link(props : {data : { network: string, username: string, url: string}}) {
    return <div className="md:w-1/4 pb-2 mb:p-6">
        <a href={props.data.url}>
            <img className=" w-28 md:w-32 mx-auto" src={'./'+ props.data.network.replaceAll(" ", "") + '.png'}/>
        </a>
    </div>
}

function Profile() {

    return <div id="Profile" className={'pt-6 md:py-20 md:pb-0 md:pt-28 md:px-12 px-6 h-[' + window.innerHeight + 'px]'}>
        <div className=" text-6xl md:text-9xl font-medium text-light">{data.basics.name}</div>
        <div className="p-6 mx-auto mt-6 md:mt-12 bg-red text-light rounded-xl shadow-lg items-center flex flex-col md:flex-row justify-center">
            <div className="p-6 md:w-1/4">
                <div className="text-3xl font-bold">{data.basics.label}</div>
                <div className="pt-3 font-medium">{data.basics.location.address}</div>
                <div className="pt-3 font-medium">{data.basics.email}</div>
                <div className="font-medium">{data.basics.phone}</div>
            </div>
            <div className="pb-6 md:p-6 md:w-2/4 font-medium">{data.basics.summary}</div>
            <Link data={data.basics.profiles[0]}/>
        </div>
    </div>
}

export default Profile;