import TTT from '../assets/two-player-ttt.jpg';
import discover from '../assets/Discover-fy.png';
import weather from '../assets/weather-dashboard.png';
import candidate from '../assets/candidate-search.png';
import readme from '../assets/Readme.png';
import vehicle from '../assets/vehicle.png';

function Portfolio() {
    return (
        <div className="container my-5">
            <div className="row">
                {/* Portfolio Card 1 */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src={TTT} className="card-img-top" alt="TIC TAC TOE" />
                        <div className="card-body">
                            <h5 className="card-title">Two Player Tic-Tac-Toe Game</h5>
                        </div>
                        <div className="card-footer d-flex justify-content-center">
                            <a href="https://jmalon10.github.io/TTT-Project-1/" className="btn btn-primary mx-2" target="_blank" rel="noopener noreferrer">View App</a>
                            <a href="https://github.com/jmalon10/TTT-Project-1" className="btn btn-secondary mx-2" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                        </div>
                    </div>
                </div>

                {/* Portfolio Card 2 */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src={discover} className="card-img-top" alt="Discover-fy" />
                        <div className="card-body">
                            <h5 className="card-title">Discover-fy</h5>
                        </div>
                        <div className="card-footer d-flex justify-content-center">
                            <a href="https://discover-fy.onrender.com/" className="btn btn-primary mx-2" target="_blank" rel="noopener noreferrer">View App</a>
                            <a href="https://github.com/jmalon10/Discover-fy" className="btn btn-secondary mx-2" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                        </div>
                    </div>
                </div>

                {/* Portfolio Card 3 */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src={weather} className="card-img-top" alt="Weather Dashboard" />
                        <div className="card-body">
                            <h5 className="card-title">Weather Dashboard</h5>
                        </div>
                        <div className="card-footer d-flex justify-content-center">
                            <a href="https://weather-dashboard-9rqx.onrender.com/" className="btn btn-primary mx-2" target="_blank" rel="noopener noreferrer">View App</a>
                            <a href="https://github.com/jmalon10/Weather-Dashboard" className="btn btn-secondary mx-2" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                        </div>
                    </div>
                </div>

                {/* Portfolio Card 4 */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src={candidate} className="card-img-top" alt="Candidate Search" />
                        <div className="card-body">
                            <h5 className="card-title">Candidate Search</h5>
                        </div>
                        <div className="card-footer d-flex justify-content-center">
                            <a href="https://candidate-search-zg70.onrender.com/" className="btn btn-primary mx-2" target="_blank" rel="noopener noreferrer">View App</a>
                            <a href="https://github.com/jmalon10/candidate-search" className="btn btn-secondary mx-2" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                        </div>
                    </div>
                </div>

                {/* Portfolio Card 5 */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src={readme} className="card-img-top" alt="README Generator" />
                        <div className="card-body">
                            <h5 className="card-title">README Generator</h5>
                        </div>
                        <div className="card-footer d-flex justify-content-center">
                            <a href="https://github.com/jmalon10/READ.MEGenerator" className="btn btn-primary mx-2" target="_blank" rel="noopener noreferrer">View App</a>
                            <a href="https://github.com/jmalon10/READ.MEGenerator" className="btn btn-secondary mx-2" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                        </div>
                    </div>
                </div>

                {/* Portfolio Card 6 */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src={vehicle} className="card-img-top" alt="Vehicle Builder" />
                        <div className="card-body">
                            <h5 className="card-title">Vehicle Builder</h5>
                        </div>
                        <div className="card-footer d-flex justify-content-center">
                            <a href="https://github.com/jmalon10/VehicleBuilder" className="btn btn-primary mx-2" target="_blank" rel="noopener noreferrer">View App</a>
                            <a href="https://github.com/jmalon10/VehicleBuilder" className="btn btn-secondary mx-2" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;