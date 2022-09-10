import './app-info.css';

const AppInfo = ({allWorks, bonus}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании OZON</h1>
            <h2>Общее число сотрудников: {allWorks + ' чел.'}</h2>
            <h2>Премию получат: {bonus}</h2>
        </div>
    )
}

export default AppInfo;