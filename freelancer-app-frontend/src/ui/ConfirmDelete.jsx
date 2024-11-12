function ConfirmDelete({ tittle, onClose, confirmDelete }) {
    return (
        <div>
            <hr className="mt-1 mb-4" />
            <h1>
                آیا از حذف{tittle}مطمین هستید؟
            </h1>
            <div className="flex justify-between gap-x-16 mt-6">
                <button className="btn btn--primary flex-1" onClick={onClose}>لغو</button>
                <button className="btn btn--danger flex-1" onClick={confirmDelete}>تایید</button>
            </div>
        </div>
    )
}

export default ConfirmDelete
