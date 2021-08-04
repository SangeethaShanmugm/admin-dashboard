export default function Card() {
  const data = [
    {
      text: "Server Migration",
      percent: "20%",
      color: "danger"
    },
    {
      text: "Sales Tracking",
      percent: "40%",
      color: "warning"
    },
    {
      text: "Customer Database",
      percent: "60%",
      color: "primary"
    },
    {
      text: "Payout Details",
      percent: "80%",
      color: "info"
    },
    {
      text: "Account Setup",
      percent: "100%",
      color: "success"
    }
  ];
  return (
    <div className="col-lg-6 mb-4">
      {/*<!-- Project Card Example -->*/}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
        </div>
        <div className="card-body">
          {data.map((data) => {
            return (
              <>
                <h4 className="small font-weight-bold">
                  {data.text}{" "}
                  <span className="float-right">
                    {data.percent === "100%" ? "Complete!" : data.percent}
                  </span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className={`progress-bar bg-${data.color}`}
                    role="progressbar"
                    style={{ width: data.percent }}
                    aria-valuenow={data.percent}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
