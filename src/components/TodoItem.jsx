import { MdDeleteOutline } from "react-icons/md";
function TodoItem({todoName,todoDate,onDeleteClick}) {
    return (
        <div className="container">
            {/* second Row */}
            <div className="row row1">
                <div className="col-5">
                    {todoName}
                </div>
                <div className="col-4">
                    {todoDate}
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger button1" onClick={()=> onDeleteClick(todoName)}>
                    <MdDeleteOutline />
                        </button>
                </div>
            </div><br />
        </div>

    );
}

export default TodoItem;