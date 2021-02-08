import React from 'react';

const Greetings = (props) => {
    return (
        <div> {lang(props.lang)} {props.name}

        </div>
    );
};

function lang(lang) {
    if (lang === "de") {
        return "Hallo"
    }
    else if (lang === "es") {
        return "Hola"    
    }
    else if (lang === "en") {
        return "Hi"
    }
    else if (lang === "fr") {
        return "Bonjour"
    }
    else if (lang === "ko") {
        return "Yeoboseyo"
    }
}




export default Greetings;