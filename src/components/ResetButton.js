import './ResetButton.css'

const resetButton = ({ resetBoard }) => {
    return (
        <button className='reset-btn' onClick={resetBoard}>Reset</button>
    )
}
export default resetButton