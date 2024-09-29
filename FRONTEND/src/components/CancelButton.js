
function CancelButton({isPresented}) {
    if (isPresented) {
        return (
            <>
                <button className="ml-[24px] bg-red-500 p-[14px] rounded-[14px] hover:bg-red-600 transition-all duration-200">
                    Cancel
                </button>
            </>
        )
    } else {
        return null;
    }
}

export default CancelButton;