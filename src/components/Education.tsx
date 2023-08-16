export interface EducationObject {
    institution: string,
    area: string,
    studyType: string,
    startDate: string,
    endDate: string,
    score: string,
    courses: string[]
}

export function isEducationObject(object: any): object is EducationObject {
    return Object.prototype.hasOwnProperty.call(object, "studyType");
}

function Education(prop: { education: EducationObject, id: number }) {
    let courses: JSX.Element[] = [];
    for (let s in prop.education.courses) {
        courses.push(<p key={prop.education.institution + s}>{prop.education.courses[s]}</p>);
    }

    return <div id={prop.id.toString()} className={"work w-full md:w-[45%] pb-6 self-end"}>
        <div>
            <div className="p-6 mx-auto bg-light text-dark rounded-xl shadow-lg items-center space-x-0 justify-center transition-colors">
                <div className="text-3xl font-medium">{prop.education.institution}</div>
                <div className="pt-6">
                    <img className="flex justify-center w-40 mx-auto" src={"./" + prop.education.institution.replaceAll(" ", "") + '.png'}/>
                </div>
                <div className="pt-6">
                    <div className="text-xl font-medium">{prop.education.area}</div>
                    <div>{prop.education.startDate + " : " + (prop.education.endDate ? prop.education.endDate : "")}</div>
                    <div>{prop.education.area}</div>
                </div>
                <div className={(prop.education.score === "" ? "hidden": "font-bold pt-6")}>Overall score: {prop.education.score}</div>
                <div className={(prop.education.courses.length === 0 ? "hidden": "pt-6")}>{courses}</div>
            </div>
        </div>
    </div>
}

export default Education;