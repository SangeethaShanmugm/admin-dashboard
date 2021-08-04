export default function FooterCard() {
  return (
    <div className="col-lg-6 mb-4">
      {/*<!-- Illustrations -->*/}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: "20%" }}
              src="img/undraw_posting_photo.svg"
              alt="..."
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            aspernatur sequi mollitia natus ab atque dolorum vel quasi,
            repellendus recusandae at quo aliquid sit minima? Ea autem provident
            libero a?
          </p>
        </div>
      </div>

      {/*<!-- Approach -->*/}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Development Approach
          </h6>
        </div>
        <div className="card-body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            aspernatur sequi mollitia natus ab atque dolorum vel quasi,
            repellendus recusandae at quo aliquid sit minima? Ea autem provident
            libero a?
          </p>
        </div>
      </div>
    </div>
  );
}
