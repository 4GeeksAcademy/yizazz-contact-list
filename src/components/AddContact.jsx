import { Link } from "react-router-dom"

export const AddContact = () => {
    return (
        <>
            <form className="container">
                <div className="row">
                    <div className="col-12 col-lg-8 mx-auto d-flex justify-content-center">
                        <h1>Add new contact</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <label htmlFor="FullName" className="form-label">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Full name"
                            className="form-control"
                        >
                        </input>
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col-12">
                        <label htmlFor="Email" className="form-label">
                            Email
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter email"
                        >
                        </input>
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col-12">
                        <label htmlFor="Phone" className="form-label">
                            Phone
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter phone"
                        ></input>
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col-12">
                        <label htmlFor="Address" className="form-label">
                            Address
                        </label>
                        <input type="text"
                            className="form-control"
                            placeholder="Enter Address"
                        />
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-12">
                        <button
                            type="submit"
                            className="form-control bg-primary text-light">
                            Save
                        </button>
                    </div>
                </div>
                <div>
                    <Link to="./Card">
                    or get back to contacts
                    </Link>
                </div>
            </form>
        </>

    )
}
