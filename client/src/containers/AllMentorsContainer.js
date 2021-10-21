import HeaderComponent from "../components/HeaderComponent";
import MatchedMentorList from "../components/MatchedMentorList";
import MentorList from "../components/MentorList";
import { withRouter } from 'react-router-dom';
import { useEffect, useState } from "react";


const AllMentorsContainer = () => {

    const [allMentors, setAllMentors] = useState(null);

    useEffect(() => {
        getAllMentors();
        console.log(allMentors)
    },[])

    const getAllMentors = function() {
        fetch("http://localhost:8080/mentors")
        .then(res => res.json())
        .then(allMentors => setAllMentors(allMentors))
    }

    if (allMentors !=null){
        return(
            <>
                <h3> All Mentors Container </h3>
                <HeaderComponent/>
                <MentorList allMentors = {allMentors}/>
                <MatchedMentorList allMentors = {allMentors}/>
            
                {/* <p>{allMentors[0].languagesSpoken} {allMentors[0].lastName}</p> */}
            </>
        )
    }

    return(
        <>
        <h3> All Mentors Container </h3>
        <HeaderComponent/>
        <MatchedMentorList/>
        
        </>
    )

}

export default withRouter(AllMentorsContainer);