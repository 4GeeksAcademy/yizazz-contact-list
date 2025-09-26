import imagen from "../assets/img/rigo-baby.jpg"

export const Card = () => {
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-12 col-md-8">
                    <div id="container-card" className="border border-danger">
                        <img id="img-card" src={imagen} alt="imagen rigo" />
                        <div id="info-card" className="border border-primary">
                            <div className="fw-bold pt-2">
                                Mike Anamendolia
                            </div>
                            <div className="pt-2">
                                ubicacion
                            </div>
                            <div className="">
                                telefono
                            </div>
                            <div className="border">
                                email
                            </div>
                        </div>
                        <div id="logos-card" className="border border-secondary">
                            <div id="logo-1" className="border border-dark me-2 mt-2">
                                LOGO1
                            </div>
                            <div id="logo-2" className="border border-dark me-3 mt-2">
                                LOGO2
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}