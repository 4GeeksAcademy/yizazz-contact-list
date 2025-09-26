import imagen from "../assets/img/rigo-baby.jpg"

export const Card = () => {
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-12 col-md-8">
                    <div className="row">
                        <div id="container-card" className="border">
                            <img id="img-card" src={imagen} alt="imagen rigo" />
                            <div id="info-card" className="">
                                <div className="name pt-2">
                                    Mike Anamendolia
                                </div>
                                <div className="location-logo pt-2">
                                    <i id="location" class="fa-solid fa-location-dot"></i>
                                    <div className="location">Ubicación</div>
                                </div>
                                <div className="phone-logo mt-1">
                                    <i id="phone" class="fa-solid fa-phone-flip"></i><div className="phone">Telefono</div>
                                </div>
                                <div className="email-logo mt-1">
                                    <i id="email" class="fa-solid fa-envelope"></i><div className="email">Email</div>
                                </div>
                            </div>
                            <div id="logos-card" className="">
                                <div id="logo-1" className=" me-4 mt-2">
                                   <button id="pencil-button"><i id="pencil" class="fa-solid fa-pencil"></i></button>
                                </div>
                                <div id="logo-2" className="me-3 mt-2">
                                    <button id="trash-button"><i id="trash" class="fa-solid fa-trash-can"></i></button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}