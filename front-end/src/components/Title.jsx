function Title({ title, onClick }) {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };
    return (
        <div
            className={`title text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 ${
                onClick ? "cursor-pointer" : ""
            }`}
            onClick={handleClick}
        >
            {title}
        </div>
    );
}

export { Title };
