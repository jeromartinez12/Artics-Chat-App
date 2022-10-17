export default function Button({ children, onClick }) {
    return (
        <>
            <button onClick={onClick}>
                {children}
            </button>
            <style jsx> {`
                button {
                    background: black;
                    margin: 10px;
                    border: 0;
                    color: #fff;
                    border-radius: 9999px;
                    cursor: pointer;
                    font-size: 16px;
                    font-weight: 800;
                    padding: 8px 24px;
                    transition: opacity .3s ease;
                    display:flex;
                    align-items: center;
                }

                button > :global(svg) {
                    margin-right: 8px;
                }

                button:hover {
                    opacity: .7;
                }

                `}

            </style>
        </>

    )
}