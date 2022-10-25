import { useEffect } from "react";
import Color from "../Colors";
import Education, { EducationObject, isEducationObject } from "./Education";
import ProgressBar from "./ProgressBar";
import Work, { isWorkObject, WorkObject } from "./Work";

let i: number = 0;
function Timeline(prop: { side: Array<WorkObject | EducationObject | null>, title: string }): JSX.Element {
    let colors = new Color().colors;
    var works: Array<HTMLElement> = [];
    let list: JSX.Element[] = [];
    for (let elem in prop.side) {
        let item = prop.side[elem]
        useEffect(() => {
            let left = null, rect = null;
            const div = document.getElementById(elem)!;
            works.push(div);
            window.addEventListener("scroll", () => {
                left = document.getElementById("timeline")!;
                rect = left.getBoundingClientRect();
                (left.children[0].children[1] as HTMLElement).style.borderColor = (window.innerHeight - rect.top <= window.innerHeight * 0.5) ? colors['--light'] : colors['--orange'];
                for (elem in works) {
                    rect = works[elem].getBoundingClientRect();
                    (works[elem].firstChild!.firstChild as HTMLElement).style.backgroundColor = (rect.bottom - window.innerHeight <= works[elem].offsetHeight * 0.3) ? colors['--red'] : colors['--light'];
                    (works[elem].firstChild!.firstChild as HTMLElement).style.color = (rect.bottom - window.innerHeight <= works[elem].offsetHeight * 0.3) ? colors['--light'] : colors['--dark'];
                }
            })
        })
        if (item && isWorkObject(item)) {
            list.push(<Work key={elem} work={item} id={parseInt(elem)}></Work>)
        }
        else if (item && isEducationObject(item)) {
            list.push(<Education key={elem} education={item} id={parseInt(elem)}></Education>)
        }
    }
    return <div className={'flex-1 pt-8 md:pt-52 relative'}>
        <ProgressBar></ProgressBar>
        <div className="flex text-3xl font-medium text-light py-4 border-solid border-y-8 mb-8 transition-colors">
            <h1 className="w-[50%]">{prop.title}</h1>
            <h1 className="w-[50%]">{prop.title}</h1>
        </div>
        <div className="px-12 pb-2 flex flex-col">
            {list}
        </div>
    </div>
}

export default Timeline;