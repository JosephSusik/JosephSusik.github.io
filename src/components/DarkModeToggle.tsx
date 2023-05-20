import "./styles/DarkModeToggle.css"
import { ThemeContext, themes } from "../context/ThemeContext";

function DarkModeToggle() {
   
    return(
            <ThemeContext.Consumer>
                {({ changeTheme }) => (
                    <div className="dark-mode-toggle">
                        <button id="dark-mode-button"
                            onClick={() => changeTheme(themes.dark)}
                        >Dark</button> 
                        
                        <p>|</p>
                        
                        <button id="light-mode-button"
                            onClick={() => changeTheme(themes.light)}
                        >Light</button>
                    </div>
                )}
            </ThemeContext.Consumer>
    );
}

export default DarkModeToggle;