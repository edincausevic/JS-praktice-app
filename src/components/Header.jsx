

const Header = ({onResetBtnClick}) => {
  return (
    <header className="top-bar">
        {/* <div className="progress-indicator">
            <span>✅ done</span>
            <span className="progress-badge" id="progressDisplay">0 / 6</span>
        </div> */}
        <div></div>
        <button onClick={onResetBtnClick}  className="reset-btn" id="resetAllBtn"><span>↻</span> reset all exercises</button>
    </header>
)
}

export default Header;
