import one from '../assets/png/CCU.png'
import two from '../assets/png/Bits.png'
import three from '../assets/png/RL.png'

export const achievementData = {
    bio : "Check out my work experience here, and find out more about it over my resume.",
    achievements : [
        {
            id : 1,
            title : 'Software Engineer Intern',
            details : 'Led a team to assist law enforcement agencies to pinpoint tattoos linked to criminal affiliations. Integrated computer vision models with a Nest.js-based backend of a microservices application to process and analyze 9k+ images and videos.',
            date : '2024.02 - Now',
            field : 'Rescue Lab UMass Amherst',
            image : three
        },
        {
            id : 2,
            title : 'Data Engineer',
            details : 'Enhanced cancer detection by 5% across 49k+ sequences in 4 species by refining deep learning algorithm for eccDNA with biologists.',
            date : '2022.03 - 2023.07',
            field : 'IIS, Academia Sinica',
            image : two
        },
        {
            id : 3,
            title : 'Teaching Assistant',
            details : 'Organized and conducted office hours for 40+ students across two semesters, providing support for 1st year CS Program Design courses.',
            date : '2019.09 – 2020.06',
            field : 'CCU',
            image : one
        }

    ]
}


// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/