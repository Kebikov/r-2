
const arrButtons = [
    {
        classBtn:'btn btn-light',
        dateBtn:'\'\'',
        textBtn:'Все сотрудники'
    },
    {
        classBtn:'btn btn-outline-light',
        dateBtn:'up',
        textBtn:'На повышение'
    },
    {
        classBtn:'btn btn-outline-light',
        dateBtn:'zp',
        textBtn:'З/П больше 1000$'
    },
];

const ButtonsFilter = () => {
    const buttonsElements = arrButtons.map(item => {
        return (
            <button 
                className={item.classBtn}
                type="button"
                data-filter={item.dateBtn}
                onClick={this.filterButton}>
                {item.textBtn}
            </button>
        );
    });
    
    return (
        <>
            {buttonsElements}
        </>
    );
}

export default ButtonsFilter;