import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

function Student({students}) {
    return (
    <>
        <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
                <FontAwesomeIcon className="studentIcon" icon={faGraduationCap} size="2x"/><strong>{students.trackNum}</strong>
            </Grid>
        </Grid>
        </>
    );
}

export default Student;