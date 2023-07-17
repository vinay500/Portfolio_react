import { education_details } from "../../data";
import './education.css';
const education = ()=>{
    return(
        <div className="education">
            <h1 className="title">Education</h1>
            <ul>
                {education_details.map((school)=>{
                    return(
                        <li>
                            <p className="education_duration">{school.duration}</p>
                            <p className="education_qualification">{school.qualification}</p>
                            <p className="education_school_name">{school.school_name}</p>
                            <p className="education_percentage">{school.percentage}%</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default education;