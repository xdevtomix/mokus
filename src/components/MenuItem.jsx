export default function MenuItem({role, children}) {
    return (
        <div data-component="menu-item" className={`
            flex justify-between items-center
            p-2 text-black
            text-sm alcatel-v:text-lg
            ${role === 'header' ? 'bg-black' : 'bg-white'}
        `}>
            {children}
        </div>
    );
}