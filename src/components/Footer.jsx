import React from 'react';

function Footer(){
    const year = new Date().getFullYear()

    return(
        <footer>
            <p>Copyright &copy; {year} Mohammad.km</p>
        </footer>
    )
}
export default Footer