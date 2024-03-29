export interface WorkObject {
    name: string,
    position: string,
    startDate: string,
    endDate: string,
    highlights: never[],
    summary?: string,
    url: string,
    location: string
}

export function isWorkObject(object: any): object is WorkObject {
    return Object.prototype.hasOwnProperty.call(object, "position");
}

function Work(prop: { work: WorkObject, id: number }) {
    return <div id={prop.id.toString()} className={"work w-full md:w-[45%] pb-6"}>
        <a href={prop.work.url}>
            <div className="p-6 mx-auto bg-light text-dark rounded-xl shadow-lg items-center space-x-0 justify-center transition-colors">
                <div className="text-3xl font-medium">{prop.work.name}</div>
                <div className="pt-6">
                    <img className="flex justify-center w-40 mx-auto max-w-[15%] max-h-[15%]" src={'./' + prop.work.name.replaceAll(" ", "") + '.png'} />
                </div>
                <div className="pt-6">
                    <div className="text-xl font-medium">{prop.work.position}</div>
                    <div>{prop.work.startDate + " : " + (prop.work.endDate ? prop.work.endDate : "")}</div>
                    <div>{prop.work.location}</div>
                </div>
                <div className={"whitespace-break-spaces " + (prop.work.summary === undefined ? "" : "pt-6")}>{prop.work.summary}</div>
                <div>{prop.work.highlights}</div>
            </div>
        </a>
    </div>
}

export default Work;