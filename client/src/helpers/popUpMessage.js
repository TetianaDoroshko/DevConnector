import toast from "react-hot-toast";

export const popUpMessage = (message, dispatch) => {
  toast(
    (t) => (
      <div className="pop-up-message">
        {message}
        <div className="btn-wrap">
          <button
            className="btn btn-primary"
            onClick={() => {
              dispatch();
              toast.dismiss(t.id);
            }}
          >
            Delete
          </button>
          <button className="btn btn-white" onClick={() => toast.dismiss(t.id)}>
            Dismiss
          </button>
        </div>
      </div>
    ),
    {
      duration: 6000,
    }
  );
};
