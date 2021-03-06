export default function ActionButton({cssClasses, text, action}) {
    return (
        <button
            data-component="action-button"
            className={`bg-black/70 text-white text-lg leading-5 tracking-widest p-3 rounded cursor-pointer border-0 outline-none select-none no-bh ${cssClasses || ''}`}
            onClick={action}
        >
            {text}
        </button>
    );
}