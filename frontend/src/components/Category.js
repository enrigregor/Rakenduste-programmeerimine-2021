function Category(props) {
    return (
        <div>
            <div className="categoryName">{props.name}</div>
            <div className="categoryPrice">{props.type}</div>
        </div>
    )
}

export default Category;