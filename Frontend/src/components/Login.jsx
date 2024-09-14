function login() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white dark:bg-slate-900 dark:text-white">
          <form method="dialog" className="dark:bg-slate-900 dark:text-white">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:bg-slate-900 dark:text-white">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg dark:bg-slate-900 dark:text-white">Hello!</h3>
          <p className="py-4 dark:bg-slate-900 dark:text-white">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </div>
  );
}

export default login;
