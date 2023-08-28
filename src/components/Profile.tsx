export interface ProfileObject {
    name: string,
    label: string,
    image: string,
    email: string,
    phone: string,
    url?: string,
    summary: string,
    location: {
        countryCode: string;
        address: string;
    };
    profiles: {
        network: string,
        username: string,
        url: string
    }[]
}

function Link(props : {data : { network: string, username: string, url: string}}) {
    return <div className="md:w-1/4 pb-2 mb:p-6">
        <a href={props.data.url}>
            <img className=" w-28 md:w-32 mx-auto" src={'./'+ props.data.network.replaceAll(" ", "") + '.png'}/>
        </a>
    </div>
}

function Profile(props: { profile: ProfileObject }) {
    return <div id="Profile" className={'pt-6 md:py-20 md:pb-0 md:pt-28 md:px-12 px-6 h-[' + window.innerHeight + 'px]'}>
        <div className=" text-6xl md:text-9xl font-medium text-light">{props.profile.name}</div>
        <div className="p-6 mx-auto mt-6 md:mt-12 bg-red text-light rounded-xl shadow-lg items-center flex flex-col md:flex-row justify-center">
            <div className="p-6 md:w-1/4">
                <div className="text-3xl font-bold">{props.profile.label}</div>
                <div className="pt-3 font-medium">{props.profile.location.address}</div>
                <div className="pt-3 font-medium">{props.profile.email}</div>
                <div className="font-medium">{props.profile.phone}</div>
            </div>
            <div className="pb-6 md:p-6 md:w-2/4 font-medium">{props.profile.summary}</div>
            <Link data={props.profile.profiles[0]}/>
        </div>
    </div>
}

export default Profile;