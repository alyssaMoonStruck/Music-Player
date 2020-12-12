import React from 'react'
import { GoMarkGithub } from 'react-icons/go';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMusic } from "@fortawesome/free-solid-svg-icons"

const Nav = ({ setLibraryStatus, libraryStatus }) => {
    return(
        <nav>
            <div>
                <p>
                <a target="_blank" href="https://github.com/alyssaMoonStruck" class="social-item">
						<GoMarkGithub />
				</a>
                </p>
            </div>
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    )
}

export default Nav