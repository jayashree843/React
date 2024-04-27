import '../Counter/Counter.css';
export default function Counter(props){
    return(
        
            <section className="counter-section pb-5 pt-5">
                <div className='counter'>
                            <div className="cards">
                                <h3>{props.Count}</h3>
                                <p>{props.Title}</p>
                            </div>
                            </div>
                       
            </section>
        
    );
}