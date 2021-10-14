import "./goDown.css"

function GoDown(){

    function handleScroll() {
        window.scroll({
          top: document.body.offsetHeight,
          left: 0, 
          behavior: 'smooth',
        });
      }

    return(
        <button onClick={handleScroll} className="goDown">Create post</button>
        )
}
export default GoDown