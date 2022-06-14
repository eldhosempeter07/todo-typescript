import { Dispatch, FormEvent, SetStateAction } from "react";

type AddNewProps = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  setTodo: Dispatch<SetStateAction<string>>;
  todo: string;
  setCompleted: Dispatch<SetStateAction<boolean>>;
  handleAddNewCancel: () => void;
  completed: boolean;
  buttonText: string;
};

const AddNew = ({
  handleSubmit,
  setTodo,
  todo,
  setCompleted,
  handleAddNewCancel,
  completed,
  buttonText,
}: AddNewProps) => {
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md"
      >
        <label className="font-semibold text-sm text-gray-600 pb-1 ml-1 block text-left">
          Task
        </label>
        <input
          type="text"
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <div className="text-left">
          <label className="font-semibold text-sm text-gray-600  ml-1 mr-4">
            Completed
          </label>
          <br />
          <div className="mt-2">
            <input
              className="mx-1 mt-0.5"
              type="radio"
              name="completed"
              id="yes"
              onChange={(e) => setCompleted(true)}
              checked={completed}
            />
            <label htmlFor="yes">Yes</label>

            <input
              className="mx-1 mt-0.5 ml-3"
              type="radio"
              name="completed"
              id="no"
              onChange={(e) => setCompleted(false)}
              checked={!completed}
            />
            <label htmlFor="no">No</label>
          </div>
        </div>
        <div className="mt-5 text-left">
          <button
            className="bg-blue-500 px-6 py-2.5 mr-2 rounded text-white font-medium text-xs  uppercase"
            type="submit"
          >
            {buttonText}
          </button>
          <button
            type="button"
            className="bg-blue-500 px-6 py-2.5 rounded text-white font-medium text-xs  uppercase"
            onClick={handleAddNewCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNew;
