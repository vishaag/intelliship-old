import Layout from '../components/Layout';

const Index = () => (
    <Layout>

    <div className="card bg-secondary mb-3" >
        <div className="card-header">Get a Quote</div>
    
        <div className="card-body">
            <h5 className="card-title">Receiver Information</h5>
            <form>
                <fieldset>
                    <div className="form-group country">
                        <label htmlFor="selectCountry">Country</label>
                        <select className="form-control" id="exampleSelect1">
                            <option>Singapore</option>
                            <option>Malaysia</option>
                            <option>Indonesia</option>
                            <option>Vietnam</option>
                            <option>Taiwan</option>
                        </select>
                    </div>


                    <div className="form-group pincode">
                        <label className="col-form-label" htmlFor="inputPincode">Pincode (optional)</label>
                        <input className="form-control form-control-sm" type="text" id="inputPincode" />
                    </div>

                    <hr></hr>

                    <h5 className="card-title">Order Summary</h5>

                    <div className="form-group country">
                        <label htmlFor="selectCountry">Box</label>
                        <select className="form-control" id="exampleSelect1">
                            <option>Custom Box</option>
                        </select>
                    </div>

                    <div className="form-group dimensions">
                        <label className="col-form-label" htmlFor="inputPincode">Dimensions</label><br/>
                        <input className="form-control form-control-sm" type="text" className="inputDimensions" />
                        x
                        <input className="form-control form-control-sm" type="text" className="inputDimensions" />
                        x
                        <input className="form-control form-control-sm" type="text" className="inputDimensions" />

                    </div>

                    <div className="form-group country">
                        <label className="col-form-label" htmlFor="inputPincode">Weight (kg)</label><br/>
                        <input className="form-control form-control-sm" type="text" className="inputDimensions" />
                    </div>

                    <div className="form-group country">
                        <label htmlFor="selectCountry">Type of Pckage</label>
                        <select className="form-control" id="exampleSelect1">
                            <option>Document</option>
                            <option>Electronics</option>
                        </select>
                    </div>



  
                    <button type="submit" className="btn btn-primary">Submit</button>
                </fieldset>
            </form>
        </div>
    </div>



    <style jsx>{`
        .card {
            margin: 2em;
        }

        .country {
            width: 15em;
            display: inline-block;
            margin-right: 1em;
        }

        .pincode {
            width: 15em;
            display: inline-block;
            margin-right: 1em;
        }

        .dimensions {
            width: 15em;
            display: inline-block;
            margin-right: 1em;
        }


        button {
            display: block;
        }

        .inputDimensions {
            width: 3em;
        }
    `}</style>
    </Layout>
);

export default Index;