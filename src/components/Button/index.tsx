import "./styles.css"

const Button_buy = (): JSX.Element =>{

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault();
        alert("agregaste el producto");

    }

    return (

        <div>
            <button onClick={handleClick}> Agregar al carrito</button>
        </div>
    )
}

export default Button_buy