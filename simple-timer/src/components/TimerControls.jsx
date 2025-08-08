import { useEffect, useRef } from "react";

const TimerControls = ({ isRunning, onToggle, onReset }) => {
    const startButtonRef = useRef(null);

    useEffect(() => {
        if (startButtonRef.current) {
            startButtonRef.current.focus();
        }
    }, []);

    return (
        <>
            <button
                className="mt-3 bg-green-500 text-white mr-3 px-4 py-2 rounded hover:bg-green-600"
                ref={startButtonRef}
                onClick={onToggle}>
                {isRunning ? "Pause" : "Start"}
            </button>
            <button
                className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={onReset}>
                Reset
            </button>
        </>
    );
};

export default TimerControls;
