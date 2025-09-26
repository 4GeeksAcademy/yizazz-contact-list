import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<div className="container">
			<div className="row d-flex justify-content-center">
				<nav className="col-12 navbar navbar-light d-flex justify-content-end">
					<div className="row">
						<div className="">
							<Link to="/Addcontact">
								<button className="btn btn-success">Add new contact</button>
							</Link>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};